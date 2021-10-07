import React, { useEffect, useState } from 'react';
import data from '../assets/data/projects.json';
import useWindowDimensions from '../api/useWindowDimensions';
import { useLocation } from "react-router-dom";
import useSite from '../api/useSite';
import ProjectDescription from './ProjectDescription';
import ProjectScreenshots from './ProjectScreenshots';
import ProjectDemo from './ProjectDemo';
import ProjectVideo from './ProjectVideo';
import ProjectVideoEmbedded from './ProjectVideoEmbedded';
import { Link as L } from "react-router-dom";




const SingleView = () => {
    const {width} = useWindowDimensions();
    const {projectState, setProjectState} = useSite();
    const [tab, setTab] = useState("0")
    const id = useLocation().pathname.split("/projects/")[1];


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

    useEffect( () => {
        setTab("0");
    },[id])

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

    let pr = data[id];
    for (let i = 0; i < data.length; i++){
        if (resourceTitle(data[i].titleEN)===id){
            pr = data[i];
        }
    }


    return (
        
    <>
    {pr && (
        <div className="row px-0 mx-0">
            <div className="col-12 col-md-8 px-0 mx-0">
                <div className="container-fluid py-2 py-sm-4">
                    { width <= 576 && <div className="row">
                        <h4 className="col-12 py-3 px-2 project-title-small">{pr.title}</h4>
                    </div> }
                    <div className="row">
                        <div className="col-12 tabs px-1 px-sm-0 mx-0">

                            <button 
                                onClick={() => setTab("0")} 
                                className={tab==="0" ? "tab-button-active" : "tab-button"}
                            >
                                Description
                            </button>

                            {pr.images && 
                                <button 
                                    onClick={() => setTab("1")} 
                                    className={tab==="1" ? "tab-button-active" : "tab-button"}
                                >
                                    Screenshots
                                </button>
                            }

                            {pr.video && 
                                <button 
                                    onClick={() => setTab("2")} 
                                    className={tab==="2" ? "tab-button-active" : "tab-button"}
                                >
                                    Video
                                </button>
                            }

                            {pr.demo && 
                                <button 
                                onClick={() => setTab("3")} 
                                className={tab==="3" ? "tab-button-active" : "tab-button"}
                            >
                                Demo
                            </button>
                            }
                            {pr.videoEmbedded && 
                                <button 
                                onClick={() => setTab("4")} 
                                className={tab==="4" ? "tab-button-active" : "tab-button"}
                            >
                                Video
                            </button>
                            }
                            <div className="tab-filler"></div>
                           {width > 576 && <h4 className="tab-title px-2">{pr.title}</h4>}
                        </div>
                        

                    </div>
                    
                    <div className="row">
                        <div className="col-12 py-2  px-0 mx-0">
                            {tab === "0" && <ProjectDescription data={pr}/>}
                            {tab === "1" && <ProjectScreenshots data={pr}/>}
                            {tab === "2" && <ProjectVideo data={pr}/>}
                            {tab === "3" && ( pr.demo && <ProjectDemo data={pr}/> )}
                            {tab === "4" && <ProjectVideoEmbedded data={pr}/>}
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
                                borderImageSlice: 1,
                                fontWeight: pr!==item ? "initial" : "bold",
                            }}> <L className="singleViewListItem"  to={`/projects/${resource}`}>{item.title}</L> </li>
                        )
                    })}
                </ul>
            </div>
        }
        </div>
    )}
    </>
    );
}

export default SingleView;
