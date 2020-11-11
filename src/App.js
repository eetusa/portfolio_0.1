import React, { useEffect, useState } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Title from "./Title";
import style from "./style.js";
// import useSite from './useSite';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import useSite from "./useSite";
import useWindowDimensions from "./useWindowDimensions";
import { Nav, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Navbar as Nbar, NavDropdown } from "react-bootstrap";
import data from './assets/data/projects.json';



function App() {
  // const {view} = useSite();
  const lang = "EN";
  if (lang === "EN"){
    data.map ( (data )  => {
        return(
        data.title = data.titleEN,
        data.description = data.descriptionEN,
        data.body = data.bodyEN
        )
    })
} else {

}
  const {projectState, setProjectState} = useSite();
  const {width} = useWindowDimensions();
  const [navExpanded, setNavExpanded] = useState(false);

  const handleScroll = () => {
      let temp = [...projectState];
      temp[3] = document.getElementById("body").scrollTop;
      setProjectState(temp)
  }

  const handleTouch = () => {
    let temp = [...projectState];
    temp[3] = window.scrollY;
    setProjectState(temp)
  }

  const closeNav = () => {
    setNavExpanded(false);
  }

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  }



  const resetY = () => {
    let temp = [...projectState];
    temp[3]=0;
    setProjectState(temp);
    window.scrollTo(0,0);
    document.getElementById("body").scrollTo(0,0);
  }

  const handleLinkClick = (resource) => {
    closeNav();
    resetY();
    setProjectState[2]=false;

    if (resource!==undefined){
      let temp = [...projectState];
                      temp[0] = resource;
                      temp[1] = true;
                      temp[2] = true;
                      temp[3] = 0;
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
    
    <Router>
      <div id="body"  style={width > 576 ? style.bodyWrapper : style.bodyWrapperSmall} onTouchMove={(e) => handleTouch()} onScroll={(e) => handleScroll()}>
        <div className="container-fluid">
          {width > 576 &&
            <div className="row">
              <header style={style.headerWrapper}>
                
                <Title />
                <Navbar  />
                {projectState[3]>=92 &&
                  <div style={{height:"64px", display:"hidden"}}></div>
                }
              </header>
            </div>
          }
          {width <= 576 &&
          <div className="row">
            <div style={{height:"45px"}}></div>
            <div className="col-12 mx-0 p-0" style={{position:"fixed", height:"50px", zIndex:"9999"}}>
            <Nbar style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}onToggle={() => toggleNav()} className="p-0 " expanded={navExpanded} expand="lg" bg="light">
              <NavbarBrand>
                <NavLink onClick={() => handleLinkClick()} to="/home" id="brandLink"  style={{height:"30px", marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"nowrap", alignItems:"center"}} 
                >
                  <img height="100%" style={{marginRight: "3px"}} src={require(`./assets/images/testlogo.png`)} alt="logo" />
                  <div style={{fontSize: "12px", fontFamily: 'Oswald, sans-serif'}}>PORT<br></br>FOLIO</div>
                </NavLink>
              </NavbarBrand>
              <NavbarToggle style={{position:"relative", right:"10px"}}  aria-controls="responsive-navbar-nav" />
              <NavbarCollapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{'& div div': {margin:"10px"}}}>
                  <NavLink onClick={() => handleLinkClick()} style={{background: "rgba(0,0,0,0.05)", color:"rgb(0,0,0)", }} to="/about"><span className="mx-3">About</span></NavLink>
                  {/* <NavLink onClick={() => handleLinkClick()} to="/projects" href="projects"><span className="mx-3">Projects</span></NavLink> */}
                  <div style={{display:"flex"}}>
                    <NavLink onClick={() => handleLinkClick()} style={{background: "rgba(0,0,0,0.05)", color:"rgb(0,0,0)", paddingRight:"0px", marginRight:"0px" }} to="/projects"><span style={{marginLeft:"15px"}}>Projects</span></NavLink>
                    <NavDropdown title="" id="collasible-nav-dropdown" 
                      style={{
                        background: "rgba(0,0,0,0.05)", 
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
                                  color:"rgb(50,50,50)",
                                  background:"rgba(0,0,0,0)",
                                  width:"100%",
                                  borderLeft:0, 
                                  borderRight:0, 
                                  borderTop:0, 
                                  borderStyle: "solid",
                                  borderBottom: "1px solid",
                                  borderImage: 'linear-gradient(to right, rgba(255,0,0,0.5) 0%, rgba(255,0,0,0.3) 33%, rgba(255,0,0,0) 70%',
                                  borderImageSlice: 1
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
                  
                  <NavLink onClick={() => handleLinkClick()} style={{background: "rgba(0,0,0,0.05)", color:"rgb(0,0,0)", }} to="/contact"><span className="mx-3">Contact</span></NavLink>
                </Nav>
              </NavbarCollapse>
            </Nbar>
            </div>
          </div>
          }
          <div className="row">
            <Content />
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
