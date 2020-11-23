import React from 'react';
import ReactPlayer from 'react-player';

const ProjectVideo = ({data}) => {


    return (
        <div className="container-fluid">
            <div className="row justify-content-center py-4">
                <div className="col-12 px-0 mx-0">
                    <ReactPlayer url={`/assets/videos/${data.video}`} controls={true} width="100%" height="auto" loop={true}></ReactPlayer>
                </div>
            </div>
        </div>
    );
}

export default ProjectVideo;