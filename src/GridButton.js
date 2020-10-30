import React, { useState } from 'react';
import {IoMdSquareOutline, IoMdGrid} from "react-icons/io";
import useSite from './useSite';
// bootstrap icons BsLayoutSidebar

const GridButton = () => {
    const {projectStyle, setProjectStyle} = useSite();
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    let linkStyle;
    let linkStyle2;

    if (hover){
        linkStyle = {
            
            opacity: (projectStyle===true ? 0.5 : 0.9),
            scale: "1.6",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    } else {
        linkStyle = {
            
            opacity: (projectStyle===true ? 0.5 : 0.9),
            scale: "1.5",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    }
    if (hover2){
        linkStyle2 = {
            
            opacity: (projectStyle===true ? 0.9 : 0.5),
            scale: "1.6",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    } else {
        linkStyle2 = {
            
            opacity: (projectStyle===true ? 0.9 : 0.5),
            scale: "1.5",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    }

    return (
        <div>
            <IoMdSquareOutline 
                onMouseEnter={() => {
                    setHover2(!hover2);
                }}
                onMouseLeave={() => {
                    setHover2(!hover2);
                }}
                onClick={() => setProjectStyle(!projectStyle)}
                style={linkStyle2}
            />
            <IoMdGrid 
                onMouseEnter={() => {
                    setHover(!hover);
                }}
                onMouseLeave={() => {
                    setHover(!hover);
                }}
                onClick={() => setProjectStyle(!projectStyle)}
                style={linkStyle}
            />
            


        </div>
    );
}

export default GridButton;