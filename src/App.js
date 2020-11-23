import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { BrowserRouter as Router } from "react-router-dom";
import useWindowDimensions from "./api/useWindowDimensions";
import data from './assets/data/projects.json';
// import NavbarSmallMedia from "./components/NavbarSmallMedia";
import NavbarSmallMedia2 from "./components/NavBarSmallMediaV2";
import NavBrand from "./components/NavBrand";



function App() {

  const {width} = useWindowDimensions();
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
  
  return (
    
    <Router>
        <div id="body" className={width > 576 ? "container px-0 mx-0 body-container" : "container-fluid px-0 mx-0 body-container-small"}>
          {width > 576 &&
            <div className="row">
              <header className="col-12">
                  <Title />
                  <Navbar  />
                </header>
            </div>
          }
          {width <= 576 &&
          <div className="row mx-0 px-0">
            <div className="col-12 mx-0 px-0" style={{position:"relative"}}>
              <NavBrand/>   
              <NavbarSmallMedia2 />
            </div>
          </div>
          }
          
          <div className="row m-0 p-0" style={{width: "100%"}}>
            <Content />
          </div>

        </div>
      
    </Router>
  );
}

export default App;
