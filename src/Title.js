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
        <Link style={{textDecoration: 'none', color:"black"}} to="/home">
        <div style={{display:"flex", height:"80px"}}>
            <img height="100%" style={{marginRight: "5px"}} src={require(`./assets/images/testlogo.png`)} alt="logo" />
            <div style={{borderBottom: "1px solid rgb(230,230,230)"}}>
                
                    <h1 style={style.title}>P o r t f o l i o</h1>
                
                <SubTitle/>
            </div>
        </div>
        </Link>
    );
}

export default Title;