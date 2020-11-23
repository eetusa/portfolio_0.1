import React, {createContext, useState} from 'react';


const SiteContext = createContext([{}, () => {}]);
const SiteProvider = ({children}) => {
    
    const [state, setState] = useState({
        projectState: ["ray_casting_tests"],
    })
 


    return (
        <SiteContext.Provider value = {[state, setState]}>
            {children}
        </SiteContext.Provider>
    )
};

export {SiteContext, SiteProvider};