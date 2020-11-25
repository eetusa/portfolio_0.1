import React, { useEffect } from "react";
import GridButton from "../Projects/GridButton";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import About from "../pages/About";
import ProjectDisplay from "../Projects/ProjectDisplay";
import Contact from "../pages/Contact";
import useWindowDimensions from "../api/useWindowDimensions";
import useSite from "../api/useSite";
import Home from "../pages/Home";



const Content = () => {

  const {projectState, setProjectState} = useSite();
  const {width} = useWindowDimensions();
  const id = useLocation();
  let subtitle = "";
  let title = id.pathname.slice(1,2).toUpperCase()+id.pathname.slice(2);
  
  if (title.indexOf("/")>-1 && title.indexOf("/") !== title.length-1){
    subtitle=title.slice(title.indexOf("/")+1);
    title = title.slice(0,title.indexOf("/"));
  }
  
  useEffect(() => {
    if (subtitle!==""){
      let temp = [...projectState];
      if (temp[0] !== subtitle) {
        temp[0] = subtitle;
        temp[1] = true;
        setProjectState(temp);
      }
    } 
    resetY()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id.pathname])

  const resetY = () => {
  if (window.scrollY!==0) {
    window.scrollTo(0,0);
    document.getElementById("body").scrollTo(0,0);
  }
    
  }
  
  return (
    <div className="col-12 px-0 mx-0">
      <div
        className="container-fluid justify-content-center px-0 mx-0"
        style={{ position: "relative" }}
      >
        <div className="row mx-0 px-0 " style={{width:"100%"}}>
          <div
            className={
              width > 576 ? 
              "col-12 bar-title-container  mx-0 px-0" 
                : 
              "col-12 bar-title-container mx-0 px-0"}
          >
            <div 
              className={
                width>567 ? 
                "display-4 bar-title" : "display-4 bar-title bar-title-small"}
            >
              {title}
            </div>

    
                     
            {/* <div style={{paddingRight: width < 576 ? "7px" : "0px" ,textAlign: "right", color: "rgb(30,30,30)" }}>
              FI | EN
            </div> */}
          </div>
        </div>

        <Switch>
          <Route exact path="/"><Redirect to="/home"/></Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectDisplay />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        {id.pathname.indexOf("projects")>0 && (

        <div className="row mx-0 px-0">
                    
          <div className="col-12 px-0 mx-0" style={{ position: "absolute", top: "25px" }}>
              <div  style={{ position: "absolute", right: width < 576 ? "10px" : "0px" }} >
                <GridButton />
              </div>
          </div>
        </div>
        
          // <div className="row">
            
          //   <div className="col-12 px-0 mx-0" style={{ position: "relative" }}>
          //     <div 
          //        style={{ position: "absolute", top: "18px", right: width < 576 ? "0px" : "0px" }}
          //     >
          //     <GridButton />
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default Content;
