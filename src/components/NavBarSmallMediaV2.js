import React, { useEffect, useState } from "react";
import useSite from "../api/useSite";
import { useLocation } from "react-router-dom";
import HamburgerButtonSVG from "./HamburgerButtonSVG";
import NavMenuSideBar from "./NavMenuSideBar";


const NavbarSmallMedia2 = () => {
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

    useEffect( () => {
        if (navExpanded){
            if (!(document.getElementsByTagName("BODY")[0].className==='fixed')){
                document.getElementsByTagName("BODY")[0].className = 'fixed'
            }
        } else {
            if (document.getElementsByTagName("BODY")[0].className==='fixed'){
                document.getElementsByTagName("BODY")[0].classList.remove('fixed');
            }
        }
    })

    const style = {
        wrapper: {
            position: "absolute",
            top: "0",
            width:"100%"
        },
        hamburgerWrapper: {
            position:"fixed",
            right:"35px",
            top:"5px",
            zIndex:"999"
        }
    }

    const handleClick = () => {
        setNavExpanded(!navExpanded);
    }

    return (
        <div style={style.wrapper}> 
            <div style={style.hamburgerWrapper} onClick={() => handleClick()}>
                <HamburgerButtonSVG navExpanded={navExpanded} />
            </div>
            <div onClick={() => handleClick()} className={navExpanded ? "side-nav-background side-nav-background-show" : "side-nav-background side-nav-background-hide"}></div>
                <div className={navExpanded===true ? "side-nav side-nav-show" : "side-nav side-nav-hide"}>
                    <NavMenuSideBar navExpanded={navExpanded} setNavExpanded={setNavExpanded} />
                </div>
        </div>
    );
}

// jokuehto ? jotaintapahtuu1 : jotaintapahtuu2

export default NavbarSmallMedia2;