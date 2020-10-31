import React from 'react';
import Link from './Link';
import style from './style.js'







const Navbar = () => {
        
        return(
           <div className="container" style={style.wholeNav}>
                <div className="row justify-content-center">

                    <Link value="About" target={0} />
                    <Link value="Projects" target={1} />
                    <Link value="Contact" target={2} />

                </div>
        
            </div>
        );
}

export default Navbar;