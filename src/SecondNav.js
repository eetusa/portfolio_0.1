import React from 'react';
import Link from './Link';
import useSite from './useSite';
import style from './style.js'



const SecondNav = () => {
    const {setProjectView} = useSite();

    const projects = [ ["Main"], ["Ball Physics Sim (JS)"], ["Calculator"], ["Ray Casting Tests(JS)"], ["Placeholder (XX)"], ["Placeholder (XX)"]];
    const Links = () => {
        return ( 
            <div style={style.firstNav}>
                
                {projects.map( (item, index) => {
                    
                    return (
                        <div style={{margin: "2px 10px"}} key={item[0]+index} onClick={() => setProjectView({index})}>
                            <Link value={item[0]}/>
                        </div>
                    )
                } )}
            </div>
        )
    }

    return (<Links />)

   
    

        // return (<div style={style.firstNav}>
        //     <div onClick={() => setView(0)}>
        //         <Link value="Main page"/>
        //     </div>
        //     <div onClick={() => setView(1)}>
        //         <Link value="Ball Physics Sim (JS)"/>
        //     </div>
        //     <div onClick={() => setView(2)}>
        //         <Link value="Calculator (JS)"/>
        //     </div>
        //     <div onClick={() => setView(2)}>
        //         <Link value="Ray Casting Fun (JS)"/>
        //     </div>
        //     <div onClick={() => setView(2)}>
        //         <Link value="Placeolder (XX)"/>
        //     </div>
        //     <div onClick={() => setView(2)}>
        //         <Link value="Placeolder (XX)"/>
        //     </div>
        // </div>)
    
}

export default SecondNav;