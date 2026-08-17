import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const salliLetters = 'Salli'.split('');
const eetuLetters = 'Eetu'.split('');

const RADIUS = 1.1;
const SWEEP_HOLD_MS = 80;
const restingStrengths = {
    salli: salliLetters.map(() => 0),
    eetu: eetuLetters.map(() => 0),
};

const distanceToSegment = (point, segmentLeft, segmentRight) => {
    if (point < segmentLeft) return segmentLeft - point;
    if (point > segmentRight) return point - segmentRight;
    return 0;
};

export const getLetterSweepStrengths = (startX, endX, letterRects) => {
    if (letterRects.length === 0) return [];

    const sweepLeft = Math.min(startX, endX);
    const sweepRight = Math.max(startX, endX);
    const firstCenter = (letterRects[0].left + letterRects[0].right) / 2;
    const lastRect = letterRects[letterRects.length - 1];
    const lastCenter = (lastRect.left + lastRect.right) / 2;
    const averageSpacing = letterRects.length > 1
        ? (lastCenter - firstCenter) / (letterRects.length - 1)
        : letterRects[0].width;
    const radius = Math.max(averageSpacing * RADIUS, 1);

    return letterRects.map((rect) => {
        const center = (rect.left + rect.right) / 2;
        const distance = distanceToSegment(center, sweepLeft, sweepRight);
        return Math.max(0, 1 - distance / radius);
    });
};

export const getLetterStrengths = (clientX, letterRects) => (
    getLetterSweepStrengths(clientX, clientX, letterRects)
);

const getLetterRects = (wordElement) => (
    wordElement
        ? Array.from(wordElement.children).map((letter) => letter.getBoundingClientRect())
        : []
);

const Title = () => {
    const [strengths, setStrengths] = useState(restingStrengths);
    const [isActive, setIsActive] = useState(false);
    const salliRef = useRef(null);
    const eetuRef = useRef(null);
    const frameRef = useRef(null);
    const trailTimerRef = useRef(null);
    const trailsRef = useRef({
        salli: salliLetters.map(() => ({ strength: 0, expiresAt: 0 })),
        eetu: eetuLetters.map(() => ({ strength: 0, expiresAt: 0 })),
    });
    const refreshStrengthsRef = useRef(null);
    const latestClientXRef = useRef(null);
    const previousClientXRef = useRef(null);
    const previousUpdateTimeRef = useRef(null);
    const isActiveRef = useRef(false);

    const scheduleNextTrailExpiry = useCallback(() => {
        if (trailTimerRef.current !== null) {
            window.clearTimeout(trailTimerRef.current);
            trailTimerRef.current = null;
        }

        const now = Date.now();
        const nextExpiry = [...trailsRef.current.salli, ...trailsRef.current.eetu]
            .map((trail) => trail.expiresAt)
            .filter((expiresAt) => expiresAt > now)
            .reduce((earliest, expiresAt) => Math.min(earliest, expiresAt), Infinity);

        if (nextExpiry !== Infinity) {
            trailTimerRef.current = window.setTimeout(() => {
                trailTimerRef.current = null;
                if (refreshStrengthsRef.current) {
                    refreshStrengthsRef.current();
                }
            }, Math.max(nextExpiry - now, 0) + 1);
        }
    }, []);

    const refreshStrengths = useCallback(() => {
        const now = Date.now();
        const salliRects = getLetterRects(salliRef.current);
        const eetuRects = getLetterRects(eetuRef.current);
        const hasActivePointer = isActiveRef.current && latestClientXRef.current !== null;
        const endpointStrengths = {
            salli: hasActivePointer
                ? getLetterStrengths(latestClientXRef.current, salliRects)
                : restingStrengths.salli,
            eetu: hasActivePointer
                ? getLetterStrengths(latestClientXRef.current, eetuRects)
                : restingStrengths.eetu,
        };

        setStrengths({
            salli: endpointStrengths.salli.map((strength, index) => (
                Math.max(
                    strength,
                    trailsRef.current.salli[index].expiresAt > now
                        ? trailsRef.current.salli[index].strength
                        : 0
                )
            )),
            eetu: endpointStrengths.eetu.map((strength, index) => (
                Math.max(
                    strength,
                    trailsRef.current.eetu[index].expiresAt > now
                        ? trailsRef.current.eetu[index].strength
                        : 0
                )
            )),
        });

        scheduleNextTrailExpiry();
    }, [scheduleNextTrailExpiry]);

    refreshStrengthsRef.current = refreshStrengths;

    const activateSweptLetters = useCallback((startX, endX, startTime, endTime) => {
        const activateWord = (word, letterRects) => {
            const sweptStrengths = getLetterSweepStrengths(startX, endX, letterRects);

            sweptStrengths.forEach((strength, index) => {
                if (strength <= 0) return;

                const rect = letterRects[index];
                const center = (rect.left + rect.right) / 2;
                const progress = startX === endX
                    ? 1
                    : Math.max(0, Math.min(1, (center - startX) / (endX - startX)));
                const activatedAt = startTime + (endTime - startTime) * progress;
                const expiresAt = activatedAt + SWEEP_HOLD_MS;

                if (expiresAt <= endTime) return;

                const trail = trailsRef.current[word][index];
                const currentStrength = trail.expiresAt > endTime ? trail.strength : 0;
                trail.strength = Math.max(currentStrength, strength);
                trail.expiresAt = Math.max(trail.expiresAt, expiresAt);
            });
        };

        activateWord('salli', getLetterRects(salliRef.current));
        activateWord('eetu', getLetterRects(eetuRef.current));
    }, []);

    const scheduleUpdate = useCallback((clientX) => {
        latestClientXRef.current = clientX;
        if (frameRef.current !== null) return;

        frameRef.current = window.requestAnimationFrame(() => {
            frameRef.current = null;
            if (isActiveRef.current && latestClientXRef.current !== null) {
                const currentClientX = latestClientXRef.current;
                const previousClientX = previousClientXRef.current === null
                    ? currentClientX
                    : previousClientXRef.current;
                const currentTime = Date.now();
                const previousTime = previousUpdateTimeRef.current === null
                    ? currentTime
                    : previousUpdateTimeRef.current;

                activateSweptLetters(previousClientX, currentClientX, previousTime, currentTime);
                previousClientXRef.current = currentClientX;
                previousUpdateTimeRef.current = currentTime;
                refreshStrengths();
            }
        });
    }, [activateSweptLetters, refreshStrengths]);

    const handleMouseEnter = useCallback((event) => {
        const reduceMotion = window.matchMedia
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        isActiveRef.current = true;
        previousClientXRef.current = event.clientX;
        previousUpdateTimeRef.current = Date.now();
        setIsActive(true);
        scheduleUpdate(event.clientX);
    }, [scheduleUpdate]);

    const handleMouseMove = useCallback((event) => {
        if (isActiveRef.current) {
            scheduleUpdate(event.clientX);
        }
    }, [scheduleUpdate]);

    const resetInteraction = useCallback(() => {
        if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }

        const now = Date.now();
        if (latestClientXRef.current !== null) {
            activateSweptLetters(
                latestClientXRef.current,
                latestClientXRef.current,
                now,
                now
            );
        }

        isActiveRef.current = false;
        latestClientXRef.current = null;
        previousClientXRef.current = null;
        previousUpdateTimeRef.current = null;
        setIsActive(false);
        refreshStrengths();
    }, [activateSweptLetters, refreshStrengths]);

    useEffect(() => () => {
        if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current);
        }
        if (trailTimerRef.current !== null) {
            window.clearTimeout(trailTimerRef.current);
        }
    }, []);

    return (
        <Link className="title-container" to="/home">
            <div
                className={`title-interaction${isActive ? ' title-interaction-active' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetInteraction}
            >
                <h1
                    ref={salliRef}
                    className="title"
                    style={{
                        gridRow: 1,
                        gridColumn: 1,
                        alignSelf: 'center',
                        justifySelf: 'start',
                        display: 'flex',
                        margin: 0,
                    }}
                >
                    {salliLetters.map((letter, index) => (
                        <span
                            key={index}
                            className="title-letter"
                            style={{ opacity: 1 - strengths.salli[index] * 0.9 }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
                <div
                    ref={eetuRef}
                    className="display-1"
                    style={{
                        gridRow: 1,
                        gridColumn: 1,
                        alignSelf: 'center',
                        justifySelf: 'start',
                        marginLeft: '2rem',
                        display: 'flex',
                        pointerEvents: 'none',
                    }}
                >
                    {eetuLetters.map((letter, index) => (
                        <span
                            key={index}
                            className="title-letter-bg"
                            style={{ opacity: 0.1 + strengths.eetu[index] * 0.75 }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default Title;
