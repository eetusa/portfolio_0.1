import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useSite from '../api/useSite';
import data from '../assets/data/projects.json';


const NavMenuSideBar = ({navExpanded, setNavExpanded}) => {
    const {projectState, setProjectState} = useSite();
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
    const handleLinkClick = (resource) => {
        setProjectState[2]=false;
        if (resource!==undefined){
            let temp = [...projectState];
                            temp[0] = resource;
                            temp[1] = true;
                            temp[2] = true;
                            setProjectState(temp)
        }
        closeNav();
    }
    const closeNav = () => {
        setNavExpanded(false);
    }
    const toggleNav = () => {
        setNavExpanded(!navExpanded);
    }
    return (
        <Navbar 
        style={{background:"rgba(255,255,255)", marginTop:"35px"}}
        onToggle={() => toggleNav()} 
        className="p-0 " 
        expanded={navExpanded} 
        expand="lg">
                    <Nav className="mr-auto navbar-small" style={{'& div div': {margin:"10px"}}}>
                    <NavLink 
                        onClick={() => handleLinkClick()} 
                        style={{color:"rgb(0,0,0)", fontWeight: title==="About" ? "bold" : "normal", }} 
                        to="/about">
                            <span className="mx-3 my-2">About</span>
                    </NavLink>
                    <div className="my-2" style={{display:"flex"}}>
                        <NavLink 
                            onClick={() => handleLinkClick()} 
                            style={{ color:"rgb(0,0,0)", 
                                paddingRight:"0px", 
                                marginRight:"0px", 
                                fontWeight: title==="Projects" ? "bold" : "normal",
                            }} 
                            to="/projects"><span style={{marginLeft:"15px"}}>Projects</span>
                        </NavLink>
                        <div
                        style={{
                            marginTop: "15px",
                            paddingLeft:"5px",
                            paddingRight:"15px", 
                            width:"100%"
                        }}
                        
                        >
                            <div style={{
                            marginLeft:"5px", 
                            marginRight:"10px", 
                            marginTop:"10px", 
                            marginBottom:"0px", 
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
                                    color:"rgba(0,0,0,0.8)",
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
                        </div>
                    </div>
                    
                    <NavLink 
                        onClick={() => handleLinkClick()} 
                        style={{ color:"rgb(0,0,0)", marginBottom:"10px", fontWeight: title==="Contact" ? "bold" : "normal"    }} 
                        to="/contact">
                            <span className="mx-3">Contact</span>
                    </NavLink>
                    </Nav>
            </Navbar>
    );
}

export default NavMenuSideBar;