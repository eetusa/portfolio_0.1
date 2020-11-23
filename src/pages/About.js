import React, { useState } from 'react';




const About = () => {

    const shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    const generateAttributesList = (array) => {
        let temp = [];
        for (let i = 0 ; i < array.length ; i++){
            let subtemp = [];
            subtemp.push(Math.random()*45); // left
            subtemp.push(5+ Math.random()*45); // right
            subtemp.push(2+10*Math.random()); // duration
            subtemp.push(3+4*Math.random()); // delay
            temp.push(subtemp);

        }
        
        return temp;
    }

    const interestsList = ["guitar", "music", "horror movies", "movies", "tv series", "piano", "games", "PC", "animals", "dogs", "mathemathics", "algorithms", 
    "Dota 2", "CS:GO", "The Witcher 3", "tattoos", "code", "technology", "rain", "sea", "summer", "books", "audio books", "fantasy",
    "scifi", "esports", "family", "friends", "anime", "learning", "studying", "teaching", "helping", "physics", "beer", "wine", "sauna",
     "sundays", "hifi", "Pori","Rauma","Tampere","Kuopio", "JS", "Java", "Full stack"];
    const [interests] = useState(shuffle(shuffle(interestsList)))
    const [interestAttributes] = useState(generateAttributesList(interestsList))

    const RandomInterests = () => {
        return (
                    <div 
                    className="text-muted"
                        style=
                        {{
                            fontSize:"10px",
                            position:"relative",
                            whiteSpace:"nowrap",
                            height: "100px"
                        }}
                    >
                        {interests.map ( (word, index) => {
                            const positionXFirst = interestAttributes[index][0];
                            const positionXSecond = interestAttributes[index][1];
                            const randomDuration=interestAttributes[index][2];
                            const randomDelay=interestAttributes[index][3];
                            return(
                                <React.Fragment key = {`${index}+${word}`}>
                                      
                                                <span
                                                className="fade-in"
                                                    style={ 
                                                        index%2===0 ? 
                                                            {   
                                                                animationDelay: `${randomDelay}s`,
                                                                MozAnimationDelay: `${randomDelay}s`,
                                                                WebkitAnimationDelay: `${randomDelay}s`,
                                                                OAnimationDelay: `${randomDelay}s`,
                                                                animation: `fadeIn ease ${randomDuration}s`,
                                                                WebkitAnimation: `fadeIn ease ${randomDuration}s`,
                                                                MozAnimation: `fadeIn ease ${randomDuration}s`,
                                                                OAnimation: `fadeIn ease ${randomDuration}s`,
                                                                left: `${positionXFirst}%`,
                                                                color: Math.random() > 0.9 ? "#e66465" : "black",
                                                            }  
                                                                :
                                                            {
                                                                animationDelay: `${randomDelay}s`,
                                                                MozAnimationDelay: `${randomDelay}s`,
                                                                WebkitAnimationDelay: `${randomDelay}s`,
                                                                OAnimationDelay: `${randomDelay}s`,
                                                                animation: `fadeIn ease ${randomDuration}s`,
                                                                WebkitAnimation: `fadeIn ease ${randomDuration}s`,
                                                                MozAnimation: `fadeIn ease ${randomDuration}s`,
                                                                OAnimation: `fadeIn ease ${randomDuration}s`,
                                                                right: `${positionXSecond}%`,
                                                                color: Math.random() > 0.9 ? "#e66465" : "black",
                                                            } 
                                                        }
                                                >
                                                    {word}
                                                </span>
                                              { index%2!==0 && <br></br>}
                                </React.Fragment>
                                )
                        })}
                    </div>
            )
    }

    return (
        
        <>
            <div className="row px-0 mx-0">
                {/* <div className="col-12 p-4 m-0 order-0 order-sm-3"  style={{paddingTop:"0px", marginTop:"0px"}}>
                    <RandomInterests />  
                    <div 
                        className="fade-in-second display-1"
                        style={{
                                position:"absolute",
                                top:"25%",
                                left:"30%"
                            }}>
                                Me
                        </div>   
                    
                </div> */}
                <div className="col-12 col-sm-5 col-lg-4 m-0 p-0 fade-in-first order-2 order-sm-2" 
                    style=
                        {{
                            display: "flex",
                            alignItems: "center",
                            position:"relative",
                            justifyContent:"center"
                    
                        }}
                >
                    <img 
                        

                        style=
                            {{
                                 filter:"grayscale(90%)", 
                                 maxHeight: "600px",
                                 maxWidth:"100%"
                                  
                            }}  
                        src={require(`../assets/images/siteimages/minakuva2.png`)} 
                        alt="Me" 
                    />
                </div>       
                <div className="col-12 col-sm-7 m0 justify-content-center fade-in-first order-1 order-sm-1 py-4" style={{ textAlign: "center", display: "flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                    <p>I first got into programming in sixth grade, I think, playing around with CoolBasic. That was just the spark. That spark 
                    kept smoldering for almost two decades until I started properly studying programming. <br></br><br></br>

                    At the moment, I am a first-year student in Satakunta University of Applied Sciences.<br></br><br></br>

                    Before that I've studied Mathemathics and teaching in an University.<br></br><br></br>

                    <b>My name is Eetu Salli.   </b></p>
                </div>
            </div>
           

            
        </>
    );
}

export default About;