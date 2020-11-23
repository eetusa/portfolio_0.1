import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Navbar as Nbar, NavDropdown } from "react-bootstrap";
import data from '../assets/data/projects.json';
import useSite from "../api/useSite";
import { NavLink, useLocation } from "react-router-dom";
import NavBrand from "./NavBrand";


const NavbarSmallMedia = () => {
    const {projectState, setProjectState} = useSite();
    const [navExpanded, setNavExpanded] = useState(false);
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
    }, [id.pathname, projectState, subtitle, setProjectState])
  



    const closeNav = () => {
        setNavExpanded(false);
    }
    const toggleNav = () => {
        setNavExpanded(!navExpanded);
    }
     const handleLinkClick = (resource) => {
        closeNav();
        setProjectState[2]=false;

        if (resource!==undefined){
            let temp = [...projectState];
                            temp[0] = resource;
                            temp[1] = true;
                            temp[2] = true;
                            setProjectState(temp)
        }
    }
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

    return (
        <div className="row m-0 p-0"  style={{width:"100%"}}> 
            <div className="col-12 mx-0 p-0" style={{height:"45px"}}></div>
            <div className="col-12 mx-0 p-0" style={{position:"fixed", height:"50px", zIndex:"9999", width:"100vw"}}>
            <Nbar style={{background:"rgba(255,255,255)",borderBottom: "1px solid rgba(0,0,0,0.2)" }}onToggle={() => toggleNav()} className="p-0 " expanded={navExpanded} expand="lg">
                <NavBrand handleLinkClick={handleLinkClick}/>
                <NavbarToggle className="custom-toggler" style={{position:"relative", right:"10px", color:"white"}}  aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav" style={{background:"rgb(255,255,255)"}}>
                    <Nav className="mr-auto navbar-small" style={{'& div div': {margin:"10px"}}}>
                    <NavLink onClick={() => handleLinkClick()} style={{color:"rgb(0,0,0)" }} to="/about"><span className="mx-3 my-2">About</span></NavLink>
                    <div className="my-2" style={{display:"flex"}}>
                        <NavLink onClick={() => handleLinkClick()} style={{ color:"rgb(0,0,0)", paddingRight:"0px", marginRight:"0px" }} to="/projects"><span style={{marginLeft:"15px"}}>Projects</span></NavLink>
                        <NavDropdown title="" id="collasible-nav-dropdown" 
                        style={{
                            
                            paddingLeft:"5px",
                            paddingRight:"15px", 
                            width:"100%"
                        }}
                        
                        >
                            <div style={{
                            marginLeft:"5px", 
                            marginRight:"10px", 
                            marginTop:"5px", 
                            marginBottom:"5px", 
                            display: "flex", 
                            flexFlow: "column", 
                            width:"100%",
                            background:"rgba(0,0,0,0)",
                            position:"relative",
                            left:"-50px",
                            }}>
                            {data.map( (item, index) => {
                                const resource = resourceTitle(item.titleEN);
                               
                                return(
                                <NavLink 
                                    key = {index+Math.random()}
                                    style={{
                                    color:"rgb(0,0,0)",
                                    fontWeight: subtitle===resource ? "bold" : "normal",
                                    width:"100%",
                                    borderLeft:0, 
                                    borderRight:0, 
                                    borderTop:0, 
                                    borderStyle: "solid",
                                    borderBottom: "1px solid",
                                    borderImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.05) 33%, rgba(0,0,0,0) 70%',
                                    borderImageSlice: 1,
                                    marginTop:"10px",
                                    marginBottom:"10px"
                                    }} 
                                    onClick={() => handleLinkClick(resource)} 
                                    to={`/projects/${resource}`}>
                                    {item.title}
                                </NavLink>   
                                )
                            })}
                            
                            </div>
                        </NavDropdown>
                    </div>
                    
                    <NavLink onClick={() => handleLinkClick()} style={{ color:"rgb(0,0,0)", marginBottom:"10px"}} to="/contact"><span className="mx-3">Contact</span></NavLink>
                    </Nav>
                </NavbarCollapse>
            </Nbar>
        </div>
      </div>
    );
}

export default NavbarSmallMedia;