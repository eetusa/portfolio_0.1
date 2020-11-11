import React, { useEffect } from "react";
import GridButton from "./GridButton";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import About from "./About";
import ProjectDisplay from "./ProjectDisplay";
import Contact from "./Contact";
import useWindowDimensions from "./useWindowDimensions";
import useSite from "./useSite";
import Home from "./Home";




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
      temp[0] = subtitle;
      setProjectState(temp);
    } else {
      let temp = [...projectState];
      temp[2] = false;
      setProjectState(temp)
    }
    resetY();
  }, [id.pathname])

  const resetY = () => {
    let temp = [...projectState];
    temp[3]=0;
    setProjectState(temp);
    window.scrollTo(0,0);
    document.getElementById("body").scrollTo(0,0);
  }

  const showTitle = {
      opacity: "0.8",
      fontSize:"50px", 
      position: "absolute", 
      bottom:"-70%",
      color: "rgb(0,0,0)",
      // transition: "all 0.5s ease-in-out",
  }

  const hideTitle = {
    opacity: "0.04",
    fontSize:"50px", 
    position: "absolute", 
    bottom:"-70%",
    color: "rgb(0,0,0)",
    // transition: "all 0.2s ease-in-out",
  }

  const showSubTitle = {
    opacity: "0.8",
    fontSize:"23px", 
    position: "absolute", 
    bottom:"-10%",
    left: "2%",
    color: "rgb(0,0,0)",
    // transition: "all 0.05s ease-in-out",

}

const hideSubTitle = {
  opacity: "0",
    fontSize:"23px", 
    position: "absolute", 
    bottom:"-10%",
    left: "2%",
    color: "rgb(0,0,0)",
    // transition: "all 0.2s ease-in-out",
}
  

  return (
    <div
      className="container justify-content-center"
      style={{ position: "relative" }}
    >
      <div className="row ">
        <div
          className="col-12 text-left d-flex align-items-center"
          style={{
            paddingRight: "1px",
            marginRight: "0px",
            textOverflow: "hidden",
            whiteSpace: "nowrap",
            overflow: "hidden",
            background: "rgb(230,230,230)",
            height: "20px",
            position: "relative",
            
          }}
        >
          <div className="my-auto display-4" 
            style={projectState[2] ? hideTitle : showTitle}
          >
            {title}
          </div>

            
            <div className="my-auto display-4" 
              style={projectState[2] ? showSubTitle : hideSubTitle}
            >
              <b>{projectState[0]}</b>
            </div>
            
          

          
          <div style={{paddingRight: width < 576 ? "7px" : "0px" ,textAlign: "right", color: "rgb(30,30,30)" }}>
            {/* FI | EN */}
          </div>
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
        <div style={{ position: "absolute", top: "18px", right: width < 576 ? "7px" : "0px" }}>
          <div style={{ position: "relative" }}>
            <GridButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
