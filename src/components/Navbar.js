import React, { useEffect, useRef, useState } from "react";
import { Link as L, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const id = useLocation().pathname;
  const targetList=["home","about","projects","contact"];
  let target = "";
  for (let i = 0; i < targetList.length; i++){
    if (id.indexOf(targetList[i])>-1){
      target = targetList[i];
    }
  }
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

const handleScroll = () => {
  if (ref.current){
    setSticky(window.scrollY >= 100);
  }
}

// const handleTouch = () => {
//   if (ref.current){
//     setSticky(document.getElementById("body")?.scrollTop >= 95);
//   }
// }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{height: isSticky ? '65px' : '0px' , display:"hidden"}}></div>
        <div ref={ref} className={isSticky ? 'col-12 whole-nav-fixed' : 'col-12 whole-nav'}>

          <div style={{padding:"0",margin: "0 0px 0px 0px",width:"500px", display: "flex", justifyContent: "space-between", }}>
            <L 
              className={
                target==="about" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
              }
              
              to="/about"
            >
              About
            </L>

            <L 
              className={
                target==="projects" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
              } 
              
              to="/projects"
            >
              Projects
            </L>

            <L 
              className={
                target==="contact" ? "mainNavItem mainNavItemActive" : "mainNavItem" 
              }
              
              to="/contact"
            >
              Contact
            </L>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
