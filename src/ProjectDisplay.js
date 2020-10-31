import React from 'react';
import useSite from './useSite';
import GridView from './GridView';
import SingleView from './SingleView';



const ProjectDisplay = () => {
    const {projectStyle} = useSite();
    
    return projectStyle ? <SingleView/> : <GridView/>
    
}

export default ProjectDisplay;