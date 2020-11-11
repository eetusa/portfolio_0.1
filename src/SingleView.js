import React, { useEffect, useState } from 'react';
import data from './assets/data/projects.json';
import useWindowDimensions from './useWindowDimensions';
import { useLocation } from "react-router-dom";
import useSite from './useSite';
import { Tab, Tabs } from 'react-bootstrap';
import ProjectDescription from './ProjectDescription';
import ProjectScreenshots from './ProjectScreenshots';
import ProjectDemo from './ProjectDemo';
import ProjectVideo from './ProjectVideo';
import { Link as L } from "react-router-dom";




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
        let temp = [...projectState];
        let change=false;

        if(projectState[1]===false){
            temp[1] = true;
            change=true;
        }
        if (projectState[2]===false){
            temp[2] = true;
            change=true;
        }
        if (change){
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 px-0 mx-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 py-4 py-md-0">
                                    <Tabs style={{display:"flex"}} defaultActiveKey="0" id="tabSreenshotDemo" transition={false} onSelect={(key) => {
                                            setTab(key);
                                        }
                                    }>
                                        <Tab eventKey="0" title="Description">
                                            
                                        </Tab>
                                        <Tab eventKey="1" title="Screenshots" disabled={pr.images ? false : true}>
                                                
                                        </Tab>
                                        {!pr.demo && 
                                            <Tab eventKey="2" title="Video" disabled={pr.video ? false : true}>
                                                
                                            </Tab>
                                        }
                                        {!pr.video && 
                                            <Tab eventKey="3" title="Demo" disabled={pr.demo ? false : true}>
                                                    
                                            </Tab>
                                        }
                                    </Tabs>
                                </div>
                                

                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <div className="row" style={width >= 576 ? ( width >= 768 ? ( width >= 1200 ? {height:"600px"} : {height:"550px"}) : {height:"500px"} ) : {height:"400px"}}>
                                    {tab === "0" && <ProjectDescription data={pr}/>}
                                    {tab === "1" && <ProjectScreenshots data={pr}/>}
                                    {tab === "2" && <ProjectVideo data={pr}/>}
                                    {tab === "3" && ( pr.demo && <ProjectDemo data={pr}/> )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {width > 768 && 
                        <div className="col-4" style={{marginTop: "41px"}}>
                            <ul >
                                {data.map( (item, index) => {
                                    const resource = resourceTitle(item.titleEN);
                                    return(
                                        <li key={index+Math.random()} className="list-group-item py-1" style={{
                                            borderLeft:0, 
                                            borderRight:0, 
                                            borderTop: "0",
                                            borderStyle: "solid",
                                            borderImage: pr!==item ? "black" : 'linear-gradient(to right, rgba(255,0,0,0.5) 0%, rgba(0,131,197,0) 80%)',
                                            borderImageSlice: 1
                                        }}> <L className="singleViewListItem" to={`/projects/${resource}`}>{item.title}</L> </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                    
                </div>
            </div>
        )}
        </div>
    );
}

export default SingleView;
