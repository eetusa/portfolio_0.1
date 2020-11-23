import React from 'react';

const style = {
    show: {
        position: "absolute",
        opacity: "1",
        transition: "all 0.3s",
    },
    hide: {
        position: "absolute",
        opacity: "0",
        transition: "all 0.1s   "

    }
}

const len = 16;
const xStart = 5;
const xEnd = xStart + len;
const yStart = 3;
const yEnd = yStart + len;
const color = "rgb(150,150,150)"

const HamburgerButtonSVG = ({navExpanded}) => {
    return (
        <div style={{position: "relative"}}>
            <div  style={navExpanded ? style.hide : style.show}>
                <svg viewBox="0 0 100 80" width="26" height="26">
                        <rect fill={color} width="100" height="10" rx="8"></rect>
                        <rect fill={color} y="30" width="100" height="10" rx="8"></rect>
                        <rect fill={color} y="60" width="100" height="10" rx="8"></rect>
                </svg>
            </div>
            <div style={!navExpanded ? style.hide : style.show}>
                <svg height="26" width="26">
                    <line fill={color} x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} style={{stroke:"#000", strokeWidth:"2"}}  />
                    <line fill={color} x1={xStart} y1={yEnd} x2={xEnd} y2={yStart} style={{stroke:"#000", strokeWidth:"2"}}  />
                </svg>
            </div>
    </div>
    );
}

export default HamburgerButtonSVG;