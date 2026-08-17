import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Title, { getLetterStrengths, getLetterSweepStrengths } from './Title';

const createRect = (left, right) => ({
    left,
    right,
    width: right - left,
    top: 0,
    bottom: 20,
    height: 20,
});

describe('Title', () => {
    let container;
    let frameCallbacks;
    let nextFrameId;
    let originalMatchMedia;
    let originalRequestAnimationFrame;
    let originalCancelAnimationFrame;
    let currentTime;
    let dateNowSpy;

    beforeEach(() => {
        jest.useFakeTimers();
        container = document.createElement('div');
        document.body.appendChild(container);
        frameCallbacks = new Map();
        nextFrameId = 1;
        originalMatchMedia = window.matchMedia;
        originalRequestAnimationFrame = window.requestAnimationFrame;
        originalCancelAnimationFrame = window.cancelAnimationFrame;
        currentTime = 1000;
        dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => currentTime);

        window.matchMedia = jest.fn().mockReturnValue({ matches: false });
        window.requestAnimationFrame = jest.fn((callback) => {
            const frameId = nextFrameId;
            nextFrameId += 1;
            frameCallbacks.set(frameId, callback);
            return frameId;
        });
        window.cancelAnimationFrame = jest.fn((frameId) => {
            frameCallbacks.delete(frameId);
        });
    });

    afterEach(() => {
        act(() => {
            ReactDOM.unmountComponentAtNode(container);
        });
        container.remove();
        window.matchMedia = originalMatchMedia;
        window.requestAnimationFrame = originalRequestAnimationFrame;
        window.cancelAnimationFrame = originalCancelAnimationFrame;
        dateNowSpy.mockRestore();
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    const flushAnimationFrames = () => {
        const callbacks = Array.from(frameCallbacks.values());
        frameCallbacks.clear();
        act(() => {
            callbacks.forEach((callback) => callback());
        });
    };

    it('calculates strength from actual letter positions', () => {
        const salliRects = [
            createRect(0, 20),
            createRect(25, 45),
            createRect(50, 58),
            createRect(63, 71),
            createRect(76, 84),
        ];
        const eetuRects = [
            createRect(40, 70),
            createRect(75, 100),
            createRect(105, 120),
            createRect(125, 155),
        ];

        expect(getLetterStrengths(140, salliRects)).toEqual([0, 0, 0, 0, 0]);
        expect(getLetterStrengths(140, eetuRects)[3]).toBe(1);
        expect(getLetterSweepStrengths(-40, 140, salliRects)).toEqual([1, 1, 1, 1, 1]);

        const strengthsAtT = getLetterStrengths(112.5, eetuRects);
        expect(strengthsAtT[2]).toBe(1);
        expect(strengthsAtT[1]).toBeLessThan(0.25);
        expect(strengthsAtT[3]).toBeLessThan(0.25);
    });

    it('activates crossed letters and preserves their fade timing after leave', () => {
        act(() => {
            ReactDOM.render(
                <MemoryRouter>
                    <Title />
                </MemoryRouter>,
                container
            );
        });

        const interaction = container.querySelector('.title-interaction');
        const salliSpans = container.querySelectorAll('.title-letter');
        const eetuSpans = container.querySelectorAll('.title-letter-bg');
        const salliRects = [
            createRect(0, 20),
            createRect(25, 45),
            createRect(50, 58),
            createRect(63, 71),
            createRect(76, 84),
        ];
        const eetuRects = [
            createRect(40, 70),
            createRect(75, 100),
            createRect(105, 120),
            createRect(125, 155),
        ];

        Array.from(salliSpans).forEach((span, index) => {
            span.getBoundingClientRect = () => salliRects[index];
        });
        Array.from(eetuSpans).forEach((span, index) => {
            span.getBoundingClientRect = () => eetuRects[index];
        });

        act(() => {
            interaction.dispatchEvent(new MouseEvent('mouseover', {
                bubbles: true,
                clientX: 140,
                relatedTarget: null,
            }));
        });
        flushAnimationFrames();

        expect(interaction.classList.contains('title-interaction-active')).toBe(true);
        Array.from(salliSpans).forEach((span) => {
            expect(span.style.opacity).toBe('1');
        });
        expect(eetuSpans[3].style.opacity).toBe('0.85');

        currentTime = 1060;
        act(() => {
            interaction.dispatchEvent(new MouseEvent('mousemove', {
                bubbles: true,
                clientX: -40,
            }));
        });
        flushAnimationFrames();

        Array.from(salliSpans).forEach((span) => {
            expect(Number(span.style.opacity)).toBeCloseTo(0.1);
        });

        act(() => {
            interaction.dispatchEvent(new MouseEvent('mouseout', {
                bubbles: true,
                relatedTarget: document.body,
            }));
        });

        expect(interaction.classList.contains('title-interaction-active')).toBe(false);
        expect(Number(salliSpans[0].style.opacity)).toBeCloseTo(0.1);
        expect(eetuSpans[3].style.opacity).toBe('0.85');

        currentTime = 1081;
        act(() => {
            jest.advanceTimersByTime(21);
        });

        expect(eetuSpans[3].style.opacity).toBe('0.1');
        expect(Number(salliSpans[0].style.opacity)).toBeCloseTo(0.1);

        currentTime = 1200;
        act(() => {
            jest.advanceTimersByTime(200);
        });

        Array.from(salliSpans).forEach((span) => {
            expect(span.style.opacity).toBe('1');
        });
        Array.from(eetuSpans).forEach((span) => {
            expect(span.style.opacity).toBe('0.1');
        });
    });
});
