import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import ReadMore from '../components/ReadMore';
import ExperienceList from '../components/ExperienceList';
import ExperienceItem from '../components/ExperienceItem';



const About = () => {
    
    const [loadTime] = useState(Date.now());
 

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
            subtemp.push(Math.random()*45); // left 0
            subtemp.push(5+ Math.random()*45); // right 1
            subtemp.push(5+5*Math.random()); // duration 2
            subtemp.push(5*Math.random()); // delay 3
            subtemp.push(Math.random()*0.22); // opacity 4
            subtemp.push(loadTime + (subtemp[3])*1000); // anim_start 5
            temp.push(subtemp);

        }
        
        return temp;
    }
  //  console.log(loadTime)

    const interestsList = ["guitar", "music", "horror movies", "movies", "tv series", "piano", "games", "animals", "dogs", "mathemathics", 
    "Dota 2", "CS:GO", "The Witcher 3", "tattoos", "code", "technology", "rain", "sea", "summer", "books", "audio books", "fantasy",
    "scifi", "esports", "family", "friends", "learning", "studying", "teaching", "helping",  "beer", "wine", "sauna",
     "hifi", "Pori","Rauma","Tampere","Kuopio", "js", "java", "full stack",
    "sun","C++","C#","IoT", "Arduino", "cycling", "martin"];

    
    const [interests] = useState(shuffle(shuffle(interestsList)));
    const [interestAttributes] = useState(generateAttributesList(interestsList));

    const getCurrentAnimationTime = (anim_start) => {

        return (anim_start-Date.now())/1000;
    }

    const RandomInterests = () => {
        return (
                    <div 
                    className="text-muted"
                        style=
                        {{
                            fontSize:"10px",
                            position:"relative",
                            whiteSpace:"nowrap",
                            height: "0px"
                        }}
                    >
                        {interests.map ( (word, index) => {
                            const positionXFirst = interestAttributes[index][0];
                            const positionXSecond = interestAttributes[index][1];
                            const randomDuration=interestAttributes[index][2];
                            const randomOpacity=interestAttributes[index][4];
                           // const randomDelay=interestAttributes[index][3];
                       
                           const randomDelay=getCurrentAnimationTime(interestAttributes[index][5])
                            // const randomDelay=1
                            // console.log(randomDelay)
                            return(
                                <React.Fragment key = {`${index}+${word}`}>
                                      
                                                <span
                                                className="fade-in"
                                                    style={ 
                                                        index%2===0 ? 
                                                            {   
                                                                opacity: '0',
                                                                animation: `fadeIn ease ${randomDuration}s forwards`,
                                                                WebkitAnimation: `fadeIn ease ${randomDuration}s forwards `,
                                                                MozAnimation: `fadeIn ease ${randomDuration}s forwards `,
                                                                OAnimation: `fadeIn ease ${randomDuration}s forwards `,
                                                                animationDelay: `${randomDelay}s`,
                                                                MozAnimationDelay: `${randomDelay}s`,
                                                                WebkitAnimationDelay: `${randomDelay}s`,
                                                                OAnimationDelay: `${randomDelay}s`,
                                                                left: `${positionXFirst}%`,
                                                                //color: Math.random() > 0.9 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)",
                                                                color : `rgba(0,0,0,${randomOpacity})`,
                                                            }  
                                                                :
                                                            {
                                                                opacity: '0',
                                                                animation: `fadeIn ease ${randomDuration}s  forwards`,
                                                                WebkitAnimation: `fadeIn ease ${randomDuration}s  forwards`,
                                                                MozAnimation: `fadeIn ease ${randomDuration}s  forwards`,
                                                                OAnimation: `fadeIn ease ${randomDuration}s  forwards`,
                                                                animationDelay: `${randomDelay}s`,
                                                                MozAnimationDelay: `${randomDelay}s`,
                                                                WebkitAnimationDelay: `${randomDelay}s`,
                                                                OAnimationDelay: `${randomDelay}s`,
                                                                right: `${positionXSecond}%`,
                                                               // color: Math.random() > 0.9 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)",
                                                               color : `rgba(0,0,0,${randomOpacity})`,
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
                <div className="col-12 col-sm-7 m0 fade-in-first order-1 order-sm-1 py-4" style={{  display: "flex", flexDirection:"column",justifyContent:"space-between"}}>
                    {/* <RandomInterests></RandomInterests> */}
                    <div className="py-5" style={{height: "100%", display: "flex", flexDirection:"column", justifyContent: "center"}}>
                    <p>
                    My name is Eetu Salli.<br></br><br></br>

                    I'm a software developer from Pori, Finland.<br></br>
                    I have a BBA in Information Technology.
                   </p>
                    </div>
                    <ExperienceList>
                        
                        <ExperienceItem
                            title="Software Developer"
                            org="Elinar Oy Ltd"
                            start="2022, 02, 01"
                        />
                        <ExperienceItem
                            title="Project Researcher"
                            org="Satakunta University of Applied Sciences - SAMK"
                            start="2021, 04, 01"
                            end="2022, 02, 01"
                        />
                    </ExperienceList>
                    
                    
                
                </div>
            </div>
            
        <ReadMore>
                <p>I'm..</p>
                <ul style={{paddingTop:"0px"}}>
                    <li>30 years old</li>
                    <li>interested in technology, <span data-for="music" data-type="success" className="text-success" data-tip="">music</span>, movies, <span data-for="games" data-type="error" className="text-danger" data-tip="">games</span>, tv series, family & friends</li>
                    <li>a happy owner of a Portuguese Water Dog, <span data-for='kelmi' className="text-info" data-tip='Kelmi'>Kelmi</span></li>
                </ul>
                <p>Prior to software development I studied to be a classroom teacher and a bit of mathemathics.</p>
                <p>On my free time I dabble with different things going from game development to curiosities to utility programs to IOT devices. 
                    I have a thing for stuff related to math and algorithms and I enjoy holistics approaches to projects. 
                    I really enjoy envisioning procuts from front to back and implementing my ideas. You can see my hobby projects <a href='\projects'>here</a>.</p>
                <p>Outside of the field - among other things - I have experience as..</p>
                <ul>
                    <li><span className="highlight-word">A classroom teacher</span> in elementary school <i>City of Rauma, City of Pori</i></li>
                    <li><span className="highlight-word">A process operator</span> in a chemical plant <i>Sachtleben Pigments Oy, Pori</i></li>
                    <li><span className="highlight-word">A group leader</span> in special cleaning and contamination management in Olkiluoto Nuclear Power Plant <i>RTK-Palvelut Oy</i></li>
                    <li><span className="highlight-word">A technician</span> and <span className="highlight-word">a group leader</span> in maintaining ice condensers in Loviisa Nuclear Power Plant <i>RTK-Palvelut Oy</i></li>
                    <li><span className="highlight-word">A longshoreman</span> in Port of Rauma <i>Valdoring Oy</i></li>
                    <li><span className="highlight-word">A warehouse worker</span> in Rauma shipyard <i>Transval Oy</i></li>
                </ul>
                {/* <p>My current abilities in computing:</p>
                <div className="px-4 py-2" style={{backgroundColor:"rgb(230,230,230)"}}><p style={{paddingBottom:"2px", paddingTop:"2px", marginTop:"2px",marginBottom:"2px"}}><b>I have ability</b> in JS, Java, Python, C# and C/C++. In web development I'm familiar with HTML, CSS, PHP and React. This site has been built with React and uses Bootstrap.</p> <p style={{paddingBottom:"2px", paddingTop:"2px", marginTop:"2px",marginBottom:"2px"}}><b>Currently</b> I'm getting familiar with mobile device app development, VR applications and data analytics.</p></div> */}
                <ReactTooltip id="games" className="tooltip-text" effect="solid">I'm a pretty good shot in CS:GO and quite alright in Dota 2!</ReactTooltip>
                <ReactTooltip id='kelmi'  className="tooltip-kelmi" place="right"  effect="solid"><img alt="Kelmi dog" style={{position:"absolute",maxHeight:"100%", top:"0",left:"0"}} src={require(`../assets/images/siteimages/kelmi.png`)}/></ReactTooltip>
                <ReactTooltip id="music" className="tooltip-text" effect="solid">I play guitar! And love to play other instruments too.</ReactTooltip>
        </ReadMore>
            
        </>
    );
}

export default About;