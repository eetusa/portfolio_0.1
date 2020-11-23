import { useContext } from 'react';
import {SiteContext} from './site-context'

const useSite = () =>{

    const[state, setState] = useContext(SiteContext);

    const setProjectState = (e) => {
        setState({...state, projectState: e});
    }

    return {
        setProjectState,
        projectState: state.projectState,

    }
}

export default useSite;