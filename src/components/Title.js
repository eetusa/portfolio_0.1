import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const salliLetters = "Salli".split("");
const eetuLetters = "Eetu".split("");

const RADIUS = 1.5;

const distToSegment = (point, a, b) => {
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);
    if (point >= lo && point <= hi) return 0;
    return Math.min(Math.abs(point - lo), Math.abs(point - hi));
};

const getStrength = (pos, prev, i) => {
    if (pos === null) return 0;
    const center = i + 0.5;
    const dist = prev !== null
        ? distToSegment(center, prev, pos)
        : Math.abs(pos - center);
    return Math.max(0, 1 - dist / RADIUS);
};

const Title = () => {

    const [salliPos, setSalliPos] = useState(null);
    const [eetuPos, setEetuPos] = useState(null);
    const prevSalliPos = useRef(null);
    const prevEetuPos = useRef(null);
    const containerRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;

        const newSalliPos = ratio * salliLetters.length;
        const newEetuPos = ratio * eetuLetters.length;

        prevSalliPos.current = salliPos;
        prevEetuPos.current = eetuPos;

        setSalliPos(newSalliPos);
        setEetuPos(newEetuPos);
    }, [salliPos, eetuPos]);

    const handleMouseLeave = useCallback(() => {
        prevSalliPos.current = null;
        prevEetuPos.current = null;
        setSalliPos(null);
        setEetuPos(null);
    }, []);

    return (
        <Link className="title-container" to="/home">
            <div
                ref={containerRef}
                style={{
                    display:"grid",
                    gridTemplateColumns:"1fr",
                    gridTemplateRows:"1fr",
                    marginTop:"20px",
                    background: salliPos !== null ? "rgba(0,0,0,0.03)" : "transparent",
                    transition: salliPos !== null ? "background 0.15s ease" : "background 0.5s ease-in"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="title" style={{
                    gridRow:1, gridColumn:1,
                    alignSelf:"center",
                    justifySelf:"start",
                    display:"flex",
                    margin:0
                }}>
                    {salliLetters.map((letter, i) => {
                        const s = getStrength(salliPos, prevSalliPos.current, i);
                        const opacity = 1 - s * 0.9;
                        return (
                            <span
                                key={i}
                                className="title-letter"
                                style={{color: `rgba(0,0,0,${opacity})`}}
                            >{letter}</span>
                        );
                    })}
                </h1>
                <div className="display-1" style={{
                    gridRow:1, gridColumn:1,
                    alignSelf:"center",
                    justifySelf:"start",
                    marginLeft:"2rem",
                    display:"flex",
                    pointerEvents:"none"
                }}>
                    {eetuLetters.map((letter, i) => {
                        const s = getStrength(eetuPos, prevEetuPos.current, i);
                        const opacity = 0.1 + s * 0.75;
                        return (
                            <span
                                key={i}
                                className="title-letter-bg"
                                style={{color: `rgba(0,0,0,${opacity})`}}
                            >{letter}</span>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
}

export default Title;
