import React from "react";
import style from "./style.js";
import { Link as L } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container" style={style.wholeNav}>
        <L to="/about">About</L>
        <L to="/projects">Projects</L>
        <L to="/contact">Contact</L>
      
    </div>
  );
};

export default Navbar;
