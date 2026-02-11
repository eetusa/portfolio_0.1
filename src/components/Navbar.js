import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link as L, useLocation } from "react-router-dom";

const NavHoverLink = ({ to, label, isActive }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setHovered(true), []);
    const handleMouseLeave = useCallback(() => setHovered(false), []);

    return (
        <L
            className={isActive ? "mainNavItem mainNavItemActive" : "mainNavItem"}
            to={to}
            style={{
                background: isHovered ? "rgba(0,0,0,0.03)" : "transparent",
                transition: isHovered ? "background 0.15s ease" : "background 0.25s ease-in",
                width: "auto",
                padding: "5px 10px",
                margin: "-5px -10px"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label}
        </L>
    );
};

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const id = useLocation().pathname;
  const targetList=["home","blog","career","projects","contact"];
  let target = "";
  for (let i = 0; i < targetList.length; i++){
    if (id.indexOf(targetList[i])>-1){
      target = targetList[i];
    }
  }
  const placeholderRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

const handleScroll = () => {
  if (placeholderRef.current){
    const rect = placeholderRef.current.getBoundingClientRect();
    setSticky(rect.top <= 0);
  }
}

  return (
    <div className="container">
      <div className="row">
        <div ref={placeholderRef} className="col-12" style={{height: isSticky ? '65px' : '0px' , display:"hidden"}}></div>
        <div ref={navRef} className={isSticky ? 'col-12 whole-nav-fixed' : 'col-12 whole-nav'}>

          <div style={{padding:"0",margin: "0 0px 0px 0px",width:"500px", display: "flex", justifyContent: "space-between"}}>
            <NavHoverLink to="/career" label="Career" isActive={target === "career"} />
            <NavHoverLink to="/projects" label="Projects" isActive={target === "projects"} />
            <NavHoverLink to="/contact" label="Contact" isActive={target === "contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
