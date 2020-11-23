import React, { useEffect, useState } from 'react';
import {IoMdSquareOutline, IoMdGrid} from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import useSite from '../api/useSite';


const GridButton = () => {

    const {projectState} = useSite();
    const [gridView, setGridView] = useState(false);

    const id = useLocation();
    let subtitle = "";
    let title = id.pathname.slice(1,2).toUpperCase()+id.pathname.slice(2);
    if (title.indexOf("/")>-1 && title.indexOf("/") !== title.length-1){
        subtitle=title.slice(title.indexOf("/")+1);
        title = title.slice(0,title.indexOf("/"));
    }

    useEffect(() => {
        if (subtitle===""){
            setGridView(false);
        } else {
            setGridView(true);
        }
    },[id.pathname, subtitle]);

    return (
        <div>
            <Link to={`/projects/${projectState[0]}`}>
                <IoMdSquareOutline 
                    className={
                        gridView ? 
                        "gridButton gridButton-active" : "gridButton"
                    }
                />
            </Link>
            <Link to="/projects">
                <IoMdGrid 
                    className={
                        !gridView ? 
                        "gridButton gridButton-active" : "gridButton"
                    }
                />
            </Link>
        </div>
    );
}

export default GridButton;