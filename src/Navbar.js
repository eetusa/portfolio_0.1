import React, { useState } from "react";
import style from "./style.js";
import { Link as L, useLocation } from "react-router-dom";
import useSite from "./useSite.js";

const Navbar = () => {
  const {projectState, setProjectState} = useSite();
  const {view, setView} = useSite();

  const id = useLocation().pathname;
  const targetList=["home","about","projects","contact"];
  let target = "";
  for (let i = 0; i < targetList.length; i++){
    if (id.indexOf(targetList[i])>-1){
      target = targetList[i];
    }
  }
  

  const resetY = () => {
    let temp = [...projectState];
    temp[3]=0;
    setProjectState(temp);
    window.scrollTo(0,0);
    document.getElementById("body").scrollTo(0,0);
  }


  return (
    <div className="container" style={projectState[3]<92 ? style.wholeNav : style.wholeNavFixed}>
      <div style={{padding:"0",margin: "0 0px 0px 0px",width:"500px", display: "flex", justifyContent: "space-evenly", }}>
        <L 
          className={
            target==="about" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
          }
          onClick={() => resetY()} 
          to="/about"
        >
          About
        </L>

        <L 
          className={
            target==="projects" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
          } 
          onClick={() => resetY()} 
          to="/projects"
        >
          Projects
        </L>

        <L 
          className={
            target==="contact" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
          }
          onClick={() => resetY()} 
          to="/contact"
        >
          Contact
        </L>
      </div>
    </div>
  );
};

export default Navbar;
