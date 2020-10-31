import React from "react";
import Link from "./Link";
import style from "./style.js";
import { Link as L } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container" style={style.wholeNav}>
      <div className="row justify-content-center">
        {/* <Link value="About" target={0} />
                    <Link value="Projects" target={1} />
                    <Link value="Contact" target={2} /> */}
        <L to="/about">About</L>
        <L to="/projects">Projects</L>
        <L to="/contact">Contact</L>
      </div>
    </div>
  );
};

export default Navbar;
