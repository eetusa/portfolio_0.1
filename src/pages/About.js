import React from 'react';
import ReactTooltip from 'react-tooltip';
import ReadMore from '../components/ReadMore';



const About = () => {

    // const shuffle = (a) => {
    //     let j, x, i;
    //     for (i = a.length - 1; i > 0; i--) {
    //         j = Math.floor(Math.random() * (i + 1));
    //         x = a[i];
    //         a[i] = a[j];
    //         a[j] = x;
    //     }
    //     return a;
    // }
    // const generateAttributesList = (array) => {
    //     let temp = [];
    //     for (let i = 0 ; i < array.length ; i++){
    //         let subtemp = [];
    //         subtemp.push(Math.random()*45); // left
    //         subtemp.push(5+ Math.random()*45); // right
    //         subtemp.push(2+10*Math.random()); // duration
    //         subtemp.push(3+4*Math.random()); // delay
    //         temp.push(subtemp);

    //     }
        
    //     return temp;
    // }

    // const interestsList = ["guitar", "music", "horror movies", "movies", "tv series", "piano", "games", "PC", "animals", "dogs", "mathemathics", "algorithms", 
    // "Dota 2", "CS:GO", "The Witcher 3", "tattoos", "code", "technology", "rain", "sea", "summer", "books", "audio books", "fantasy",
    // "scifi", "esports", "family", "friends", "anime", "learning", "studying", "teaching", "helping", "physics", "beer", "wine", "sauna",
    //  "sundays", "hifi", "Pori","Rauma","Tampere","Kuopio", "JS", "Java", "Full stack"];
    // const [interests] = useState(shuffle(shuffle(interestsList)))
    // const [interestAttributes] = useState(generateAttributesList(interestsList))

    // const RandomInterests = () => {
    //     return (
    //                 <div 
    //                 className="text-muted"
    //                     style=
    //                     {{
    //                         fontSize:"10px",
    //                         position:"relative",
    //                         whiteSpace:"nowrap",
    //                         height: "100px"
    //                     }}
    //                 >
    //                     {interests.map ( (word, index) => {
    //                         const positionXFirst = interestAttributes[index][0];
    //                         const positionXSecond = interestAttributes[index][1];
    //                         const randomDuration=interestAttributes[index][2];
    //                         const randomDelay=interestAttributes[index][3];
    //                         return(
    //                             <React.Fragment key = {`${index}+${word}`}>
                                      
    //                                             <span
    //                                             className="fade-in"
    //                                                 style={ 
    //                                                     index%2===0 ? 
    //                                                         {   
    //                                                             animationDelay: `${randomDelay}s`,
    //                                                             MozAnimationDelay: `${randomDelay}s`,
    //                                                             WebkitAnimationDelay: `${randomDelay}s`,
    //                                                             OAnimationDelay: `${randomDelay}s`,
    //                                                             animation: `fadeIn ease ${randomDuration}s`,
    //                                                             WebkitAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             MozAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             OAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             left: `${positionXFirst}%`,
    //                                                             color: Math.random() > 0.9 ? "#e66465" : "black",
    //                                                         }  
    //                                                             :
    //                                                         {
    //                                                             animationDelay: `${randomDelay}s`,
    //                                                             MozAnimationDelay: `${randomDelay}s`,
    //                                                             WebkitAnimationDelay: `${randomDelay}s`,
    //                                                             OAnimationDelay: `${randomDelay}s`,
    //                                                             animation: `fadeIn ease ${randomDuration}s`,
    //                                                             WebkitAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             MozAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             OAnimation: `fadeIn ease ${randomDuration}s`,
    //                                                             right: `${positionXSecond}%`,
    //                                                             color: Math.random() > 0.9 ? "#e66465" : "black",
    //                                                         } 
    //                                                     }
    //                                             >
    //                                                 {word}
    //                                             </span>
    //                                           { index%2!==0 && <br></br>}
    //                             </React.Fragment>
    //                             )
    //                     })}
    //                 </div>
    //         )
    // }

    

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
            
        <ReadMore>
                <p>I'm..</p>
                <ul style={{paddingTop:"0px"}}>
                    <li>29 years old</li>
                    <li>interested in <span data-for="music" data-type="success" className="text-success" data-tip="">music</span>, movies, <span data-for="games" data-type="error" className="text-danger" data-tip="">games</span>, tv series, family & friends</li>
                    <li>a happy owner of a Portuguese Water Dog, <span data-for='kelmi' className="text-info" data-tip='Kelmi'>Kelmi</span></li>
                </ul>
                <p>Outside of the field - among other things - I have experience as..</p>
                <ul>
                    <li><span className="highlight-word">A classroom teacher</span> in elementary school <i>City of Rauma, City of Pori</i></li>
                    <li><span className="highlight-word">A process operator</span> in a chemical plant <i>Sachtleben Pigments Oy, Pori</i></li>
                    <li><span className="highlight-word">A group leader</span> in special cleaning and contamination management in Olkiluoto Nuclear Power Plant <i>RTK-Palvelut Oy</i></li>
                    <li><span className="highlight-word">A technician</span> and <span className="highlight-word">a group leader</span> in maintaining ice condensers in Loviisa Nuclear Power Plant <i>RTK-Palvelut Oy</i></li>
                    <li><span className="highlight-word">A longshoreman</span> in Port of Rauma <i>Valdoring Oy</i></li>
                    <li><span className="highlight-word">A warehouse worker</span> in Rauma shipyard <i>Transval Oy</i></li>
                </ul>
                <p>My current abilities in computing:</p>
                <div className="px-4 py-2" style={{backgroundColor:"rgb(230,230,230)"}}><p style={{paddingBottom:"2px", paddingTop:"2px", marginTop:"2px",marginBottom:"2px"}}><b>I have ability</b> in JS, Java and Python. In web dev I'm familiar with HTML, CSS, PHP and React. This site has been built with React and uses Bootstrap.</p> <p style={{paddingBottom:"2px", paddingTop:"2px", marginTop:"2px",marginBottom:"2px"}}><b>Currently</b> I'm learning C# and getting familiar using Linux via a terminal. <b>In the upcoming spring 2021</b> I will be learning <i>at least</i> more about databases, more advanced C# and C/C++ while continuing to develope my current areas of knowledge.</p></div>
                <ReactTooltip id="games" className="tooltip-text" effect="solid">I'm a pretty good shot in CS:GO and quite alright in Dota 2!</ReactTooltip>
                <ReactTooltip id='kelmi'  className="tooltip-kelmi" place="right"  effect="solid"><img alt="Kelmi dog" style={{position:"absolute",maxHeight:"100%", top:"0",left:"0"}} src={require(`../assets/images/siteimages/kelmi.png`)}/></ReactTooltip>
                <ReactTooltip id="music" className="tooltip-text" effect="solid">I play guitar! And love to play other instruments too.</ReactTooltip>
        </ReadMore>
            
        </>
    );
}

export default About;