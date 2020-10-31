import React from 'react';
import useSite from './useSite';
import GridView from './GridView';
import SingleView from './SingleView';



const ProjectDisplay = () => {
    const {projectStyle} = useSite();
    
    return (
        <div>
            {projectStyle === false && <GridView/>}
            {projectStyle && <SingleView/>}
        </div>
    );
}

export default ProjectDisplay;