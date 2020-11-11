import { useContext } from 'react';
import {SiteContext} from './site-context'

const useSite = () =>{


    

    const[state, setState] = useContext(SiteContext);

    const setView = (e) => {
        setState({...state, view: e})
    }

    const setProjectView = (e) => {
        setState({...state, projectView: e})
    }

    const setProjectStyle = (e) => {
        setState({...state, projectStyle: e})
    };

    const setProjectState = (e) => {
        setState({...state, projectState: e});
    }


    return {
        setProjectState,
        projectState: state.projectState,
        setView,
        view: state.view,
        setProjectView,
        projectView: state.projectView,
        setProjectStyle,
        projectStyle: state.projectStyle
    }
}

export default useSite;