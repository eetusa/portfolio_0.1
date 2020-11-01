import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.js'

const Title = () => {
    const subText = ["b","y",".","e","e","t","u",".","s","a","l","l","i"];


    const SubTitle = () => {
        
        return (
            <div style={style.subtitle}>
                {subText.map( (letter, index) => {
                    return(
                        <div key={index}>{letter}</div>
                    )
                })}
            </div>
        )
        
    }



    return (
        <div style={{borderBottom: "1px solid rgb(230,230,230)"}}>
            <Link style={{textDecoration: 'none', color:"black"}} to="/home">
                <h1 style={style.title}>P o r t f o l i o</h1>
            </Link>
            <SubTitle/>
        </div>
    );
}

export default Title;