import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import ProjectScreenshots from './ProjectScreenshots';
import useSite from './useSite';
import useWindowDimensions from "./useWindowDimensions";


const Home = () => {

    const [quoteSet, setQuoteSet] = useState([]);
    const [quote, setQuote] = useState("");
    const {projectState} = useSite();
    const {height, width} = useWindowDimensions();
    const [quoteVisible, setQuoteVisible] = useState(false);
    const [newQuote, setNewQuote] = useState(true);

    useEffect( () => {
        if(quoteSet.length === 0){
            fetch("https://type.fit/api/quotes")
            .then(resp => {
                return resp.json();
            }).then (json => {
                setQuoteSet(json);
                setQuote(json[Math.floor(Math.random()*(json.length-1))]);
            })
        }
        if (quoteVisible === true && projectState[3]/height < 0.7){   
            setQuoteVisible(false);
        }

        if (projectState[3]/height < 0.4 && newQuote===true){
            setNewQuote(false);
            setRandomQuote();
        }

        if (quoteVisible === false && projectState[3]/height > 0.8){
            setQuoteVisible(true);
            if (newQuote===false)setNewQuote(true);
        }
        console.log(quoteVisible)
    }, [projectState])

    const setRandomQuote = () => {
        setQuote(quoteSet[Math.floor(Math.random()*(quoteSet.length-1))])
    }

    
    
    return (
            <div className="row">
                <div 
                    className="col-12" 
                    style={{
                        minHeight: width > 576 ? `${height-165}px` : `${height-65}px`,
                        position: "relative",
                        opacity: 1,
                        overflow: "hidden"
                    }}
                >   
                    <div
                   
                        style={{
                            position:"absolute",
                            top:"20%"
                        }}
                    >   <div className="display-4">
                        Home again.
                        </div>
                        <p className="text-muted">
                        Welcome to my portfolio 
                        </p>
                        <div style={{
                            width:"150px",
                            height: width > 576 ? "500px" :"600px",
                            background: "red",
                            marginLeft:"5px"
                        }}></div>
                    </div>
                </div>
               
                {width < 576 &&
                
                
                    <div
                    
                        className="col-12"
                        style={{
                            minHeight: `${height-45}px`,
                            position: "relative",
                            opacity: 1,
                    }}
                    >
                        
                            <div
                                
                                style={{
                                    
                                    position:"absolute",
                                    top:"40%",
                                    right:"4%",
                                    width:"95%"
                                }}
                            >

                                <blockquote className={quoteVisible ? "quote text-right" : (newQuote===false ? "quote quotesuperhidden text-right" : "quote quotehidden text-right")}onClick={() => setRandomQuote()}>
                                    <p>{quote?.text}</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title={quote?.author}>{quote?.author}</cite></footer>
                                </blockquote>
                                
                            </div>
                        
                    </div>
                
                }
                
            </div>

    );
}

export default Home;