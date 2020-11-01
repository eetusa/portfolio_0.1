import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

const ProjectVideo = ({data}) => {
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <div className="row justify-content-center" ref={divRef}>
            <ReactPlayer url={`/assets/videos/${data.video}`} controls={true} width="90%" height="auto" loop={true}></ReactPlayer>
        </div>
    );
}

export default ProjectVideo;