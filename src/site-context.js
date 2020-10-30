import React, {createContext, useState} from 'react';

const SiteContext = createContext([{}, () => {}]);

const SiteProvider = ({children}) => {
    const [state, setState] = useState({
        view: 1,
        projectView: 0,
        projectStyle: false,
    })

    return (
        <SiteContext.Provider value = {[state, setState]}>
            {children}
        </SiteContext.Provider>
    )
};

export {SiteContext, SiteProvider};