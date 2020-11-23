import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {

    // const subText = "portfolio";
    // const subTextList = subText.split("");
    // const subTextList = ["b","y",".","e","e","t","u",".","s","a","l","l","i"];


    // const SubTitle = () => {
        
    //     return (
    //         <div className="title-subtitle text-muted">
    //             {subTextList.map( (letter, index) => {
    //                 return(
    //                     <div key={index}>{letter}</div>
    //                 )
    //             })}
    //         </div>
    //     )
        
    // }



    return (
        <Link className="title-container" to="/home">
            <div style={{display:"flex"}}>
                {/* <img height="100%" style={{marginRight: "5px"}} src={require(`../assets/images/siteimages/testlogo2.png`)} alt="logo" /> */}
                {/* <div style={{borderBottom: "1px solid rgb(230,230,230)", display:"flex", position:"relative"}}> */}
                <div style={{ display:"flex", position:"relative", marginTop:"20px"}}>
                    
                        <h1 className="title">S a l l i</h1>
                        <div className="display-1" style={{position:"absolute", opacity:"0.1",left:"30%",top:"-80%"}}>Eetu</div>
                    
                    {/* <SubTitle/> */}
                </div>
            </div>
        </Link>
    );
}

export default Title;