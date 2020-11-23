import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBrand = ({handleLinkClick}) => {



    return (
        <NavbarBrand>
                    <NavLink  to="/home" id="brandLink"  style={{height:"30px", marginBottom:"3px", marginLeft:"10px",  display:"flex", flexDirection:"row", flexWrap:"nowrap",borderBottom:"1px solid rgba(0,0,0,0.13)"}} 
                    >
                    {/* <img height="100%" style={{borderRadius:"3px",marginLeft:"3px",marginRight: "3px"}} src={require(`../assets/images/siteimages/testlogo2.png`)} alt="logo" />
                    <div style={{fontSize: "10px", fontFamily: 'Oswald, sans-serif',color:"black", padding:"10px 0px"}}>PORTFOLIO</div> */}
                    S a l l i
                    </NavLink>
        </NavbarBrand>
    );
}

export default NavBrand;