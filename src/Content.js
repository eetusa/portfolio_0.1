import React from "react";
import GridButton from "./GridButton";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import About from "./About";
import ProjectDisplay from "./ProjectDisplay";
import Contact from "./Contact";
import data from "./assets/data/projects.json";

const Content = () => {

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

  const id = useLocation();
  let title = id.pathname.slice(1,2).toUpperCase()+id.pathname.slice(2);
  if (title.indexOf("/")>-1){
    title = title.slice(0,title.indexOf("/"));
  }
  

  

  return (
    <div
      className="container-fluid justify-content-center"
      style={{ position: "relative" }}
    >
      <div className="row ">
        <div
          className="col-12 text-left d-flex align-items-center justify-content-between"
          style={{
            paddingRight: "1px",
            marginRight: "0px",
            textOverflow: "hidden",
            whiteSpace: "nowrap",
            overflow: "hidden",
            background: "rgb(230,230,230)",
            color: "rgba(100,100,100,0.7)",
            height: "20px",
            position: "relative",
          }}
        >
          <div className="my-auto display-4" style={{ fontSize:"50px", position: "absolute", bottom:"-70%" }}>
            {title}
          </div>
          <div></div>
          <div style={{ textAlign: "right", color: "rgb(30,30,30)" }}>
            FI | EN
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/"><Redirect to="/home"/></Route>
        <Route path="/home">Home.</Route>
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
        <div style={{ position: "absolute", top: "18px", right: "0%" }}>
          <div style={{ position: "relative" }}>
            <GridButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
