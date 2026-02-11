import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const salliLetters = "Salli".split("");
const eetuLetters = "Eetu".split("");

const RADIUS = 1.5;

const getLetterPos = (mouseX, ref, count) => {
    if (!ref.current) return null;
    const rect = ref.current.getBoundingClientRect();
    const ratio = (mouseX - rect.left) / rect.width;
    return ratio * count;
};

const getStrength = (pos, i) => {
    if (pos === null) return 0;
    const dist = Math.abs(pos - (i + 0.5));
    return Math.max(0, 1 - dist / RADIUS);
};

const Title = () => {

    const [salliPos, setSalliPos] = useState(null);
    const [eetuPos, setEetuPos] = useState(null);
    const salliRef = useRef(null);
    const eetuRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const x = e.clientX;
        setSalliPos(getLetterPos(x, salliRef, salliLetters.length));
        setEetuPos(getLetterPos(x, eetuRef, eetuLetters.length));
    }, []);

    const handleMouseLeave = useCallback(() => {
        setSalliPos(null);
        setEetuPos(null);
    }, []);

    return (
        <Link className="title-container" to="/home">
            <div
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
                <h1 ref={salliRef} className="title" style={{
                    gridRow:1, gridColumn:1,
                    alignSelf:"center",
                    justifySelf:"start",
                    display:"flex",
                    margin:0
                }}>
                    {salliLetters.map((letter, i) => {
                        const s = getStrength(salliPos, i);
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
                <div ref={eetuRef} className="display-1" style={{
                    gridRow:1, gridColumn:1,
                    alignSelf:"center",
                    justifySelf:"start",
                    marginLeft:"2rem",
                    display:"flex",
                    pointerEvents:"none"
                }}>
                    {eetuLetters.map((letter, i) => {
                        const s = getStrength(eetuPos, i);
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
