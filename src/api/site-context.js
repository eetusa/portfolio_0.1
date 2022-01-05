import React, {createContext, useState} from 'react';


const SiteContext = createContext([{}, () => {}]);
const SiteProvider = ({children}) => {
    
    const [state, setState] = useState({
        projectState: ["destructible_cube_world", {value: "newest", label: "Newest"}],
    })
 


    return (
        <SiteContext.Provider value = {[state, setState]}>
            {children}
        </SiteContext.Provider>
    )
};

export {SiteContext, SiteProvider};