import React, { useState } from 'react';
import {IoMdSquareOutline, IoMdGrid} from "react-icons/io";
import { Link } from 'react-router-dom';
import useSite from './useSite';

const GridButton = () => {

    const {projectState, setProjectState} = useSite();
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    let linkStyle;
    let linkStyle2;



    

    if (hover){
        linkStyle = {
            color:"black",
            opacity: (projectState[1]===true ? 0.5 : 0.9),
            scale: "1.6",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    } else {
        linkStyle = {
            color:"black",
            opacity: (projectState[1]===true ? 0.5 : 0.9),
            scale: "1.5",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    }
    if (hover2){
        linkStyle2 = {
            color:"black",
            opacity: (projectState[1]===true ? 0.9 : 0.5),
            scale: "1.6",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    } else {
        linkStyle2 = {
            color:"black",
            opacity: (projectState[1]===true ? 0.9 : 0.5),
            scale: "1.5",
            margin: "0px 3px",
            transition: "all 0.1s ease-in-out"
        }
    }

    return (
        <div>
            <Link to={`/projects/${projectState[0]}`}>
                <IoMdSquareOutline 
                    onMouseEnter={() => {
                        setHover2(!hover2);
                    }}
                    onMouseLeave={() => {
                        setHover2(!hover2);
                    }}
                    onClick={() => {
                        let temp = [...projectState];
                        temp[1] = true;
                        setProjectState(temp);
                    }}
                    style={linkStyle2}
                />
            </Link>
            <Link to="/projects">
                <IoMdGrid 
                    onMouseEnter={() => {
                        setHover(!hover);
                    }}
                    onMouseLeave={() => {
                        setHover(!hover);
                    }}
                    onClick={() => {
                        let temp = [...projectState];
                        temp[1] = false;
                        setProjectState(temp);
                    }}
                    style={linkStyle}
                />
            </Link>
        </div>
    );
}

export default GridButton;