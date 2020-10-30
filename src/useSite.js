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

    return {
        setView,
        view: state.view,
        setProjectView,
        projectView: state.projectView,
        setProjectStyle,
        projectStyle: state.projectStyle
    }
}

export default useSite;