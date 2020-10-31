import React from "react";
import DisplayComponent from "./displayComponent";
import useSite from "./useSite";
import data from "./assets/data/sitedata.json";
import GridButton from "./GridButton";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import ProjectDisplay from "./ProjectDisplay";
import Contact from "./Contact";
// import style from './style.js'

const Content = () => {
  const { view } = useSite();
  const title = data[view].title;

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
            color: "rgba(255,255,255,0.5)",
            height: "20px",
            position: "relative",
          }}
        >
          <div className="my-auto display-4" style={{ position: "absolute" }}>
            {title}
          </div>
          <div></div>
          <div style={{ textAlign: "right", color: "rgb(30,30,30)" }}>
            FI | EN
          </div>
        </div>
      </div>

      {/* <DisplayComponent id={view} /> */}
      <Switch>
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

      {view === 1 && (
        <div style={{ position: "absolute", top: "20px", right: "0%" }}>
          <div style={{ position: "relative" }}>
            <GridButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
