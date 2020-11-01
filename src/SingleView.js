import React, { useEffect, useState } from 'react';
import data from './assets/data/projects.json';
import useWindowDimensions from './useWindowDimensions';
import Image from 'react-bootstrap/Image'
import { useLocation } from "react-router-dom";
import useSite from './useSite';
import { Tab, Tabs } from 'react-bootstrap';
import ProjectDescription from './ProjectDescription';
import ProjectScreenshots from './ProjectScreenshots';
import ProjectDemo from './ProjectDemo';
import ProjectVideo from './ProjectVideo';




const SingleView = () => {
    const {width} = useWindowDimensions();
    const {projectState, setProjectState} = useSite();
    const [tab, setTab] = useState("0")
    const lang = "EN";
    if (lang === "EN"){
        data.map ( (data )  => {
            return(
            data.title = data.titleEN,
            data.description = data.descriptionEN,
            data.body = data.bodyEN
            )
        })
    } else {

    }

    useEffect(() => {
        if(projectState[1]===false){
          let temp = [...projectState];
          temp[1] = true;
          setProjectState(temp);
        }
    })

    const resourceTitle = (e) => {
        if (e.indexOf(' ')===-1){
          return (e[0].toLowerCase()+e.slice(1));
        } else{
          let temp = e[0].toLowerCase();
          for (let i = 1; i < e.length; i++){
            if (e[i]===" "){
              temp += "_";
            } else if (e[i]==="."){
              temp += "-";
            } else{
              temp += e[i].toLowerCase();
            }
          }
          return temp;
        }
      }

    const id = useLocation().pathname.split("/projects/")[1];
    
    let pr = data[id];

    for (let i = 0; i < data.length; i++){
        if (resourceTitle(data[i].titleEN)===id){
            pr = data[i];
        }
    }



    return (
        
        <div>
        {pr && (
            <div className="container py-0 px-0">
                <div className="row">
                    <div className="col-12 m-0 p-0" style={{position:"relative", overflow:"hidden"}}>
                            <Image style={{width:"100%"}} 
                            src=
                                {
                                    width>=576 ? ( width>=768 ? ( width>=1200 ? require(`./assets/images/${pr.banner_100}`) 
                                        : require(`./assets/images/${pr.banner_150}`)) 
                                            : require(`./assets/images/${pr.banner}`)) 
                                                : require(`./assets/images/${pr.image}`)  
                                } 
                            alt=""></Image>
                            <div className="col-12"
                                style={{
                                    width:"100%",
                                    padding: "5px",
                                    
                                    position: "absolute", 
                                    bottom:"0",
                                    background: "rgba(0,0,0,0.7)",
                                    color:"white"
                            }}> 
                                {pr.title}
                            </div>
                            
                    </div>
                    
                </div>
                <div className="row">
                    <Tabs className="col-12" defaultActiveKey="0" id="tabSreenshotDemo" transition={false} onSelect={(key) => {
                            setTab(key);
                        }
                    }>
                        <Tab eventKey="0" title="Description">
                            
                        </Tab>
                        <Tab eventKey="1" title="Screenshots" disabled={pr.images ? false : true}>
                                
                        </Tab>
                        <Tab eventKey="2" title="Video" disabled={pr.video ? false : true}>
                                
                                </Tab>
                        <Tab eventKey="3" title="Demo (experimental)" disabled={pr.demo ? false : true}>
                                
                        </Tab>
                    </Tabs>
                    

                </div>
                <div className="row justify-content-center" style={width >= 576 ? ( width >= 768 ? ( width >= 1200 ? {height:"600px"} : {height:"550px"}) : {height:"500px"} ) : {height:"400px"}}>
                    {tab === "0" && <ProjectDescription data={pr}/>}
                    {tab === "1" && <ProjectScreenshots data={pr}/>}
                    {tab === "2" && <ProjectVideo data={pr}/>}
                    {tab === "3" && ( pr.demo && <ProjectDemo data={pr}/> )}
                </div>
            </div>
        )}
        </div>
    );
}

export default SingleView;
