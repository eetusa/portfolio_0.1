import React, { useEffect, useRef } from 'react';

const ProjectDescription = ({data}) => {
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });
    return (
        <div ref={divRef}>
            {data.body}
        </div>
    );
}

export default ProjectDescription;