import React, { useState } from 'react';
import style from './style.js'
import useSite from './useSite.js';


const Link = ({value, target}) => {
    const {view, setView} = useSite();
    const [hover,setHover] = useState(false);
 
    const activeStyle = {
        color: "black",
        // borderBottom: target===1 ? ( hover ? "1px solid rgb(220,220,220)" : "1px solid rgb(255,255,255)") : "",
        borderTop: hover ? "1px solid rgb(220,220,220)" : "1px solid rgb(255,255,255)",  
        borderBottom: "1px solid rgb(220,220,220)",
        cursor: "default",
        
    }


    const inactiveStyle = {
        color: "rgb(90,90,90)",
        // borderBottom: target===1 ? ( hover ? "1px solid rgb(220,220,220)" : "1px solid rgb(255,255,255)") : "",
        // borderTop: target!==1 ? (hover ? "1px solid rgb(220,220,220)" : "1px solid rgb(255,255,255)") : "",    
        borderTop: hover ? "1px solid rgb(220,220,220)" : "1px solid rgb(255,255,255)",  
        cursor: "default",
    }

    return (
        <div className="col-4 text-center"  >
            <div 
                onClick={() => setView(target)}
                
                onMouseEnter={() => setHover(!hover)} 
                onMouseLeave={() => setHover(!hover)} 
                style={ view===target ? activeStyle : inactiveStyle }
            >
                {value}
            </div>
        </div>
    );
}

export default Link;