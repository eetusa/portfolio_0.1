import React from 'react';
import useWindowDimensions from "../api/useWindowDimensions";


const Home = () => {

    const {height, width} = useWindowDimensions();


    
    
    return (
            <div className="row px-0 mx-0">
                <div 
                    className="col-12" 
                    style={{
                        minHeight: width > 576 ? `${height-175}px` :`${height-63}px`,
                        position: "relative",
                        opacity: 1,
                        overflow: "hidden"
                    }}
                >   
                    <div
                   
                        style={{
                            position:"absolute",
                            top:"20vh"
                        }}
                    >   <div className="display-4 fade-in-first">
                        Finally here.
                        </div>
                        <p className="text-muted fade-in-second mx-1">
                              Welcome to my portfolio 
                        </p>
                        <div style={{
                            width:"150px",
                            height: "2000px",
                            // background: "rgb(240,240,240)",
                            // background: "linear-gradient(#e66465, #9198e5)",
                            // background: "#e66465",
                            // background: "linear-gradient(to right, rgb(240,240,240) 0%, rgba(240,240,240,0) 100%)",
                            marginLeft:"5px"
                        }}>
                            
                        </div>
                    </div>
                </div>
               
                
                
            </div>

    );
}

export default Home;