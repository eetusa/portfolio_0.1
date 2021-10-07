import React from 'react';
import useWindowDimensions from '../api/useWindowDimensions';

const ProjectVideoEmbedded = ({data}) => {
    const {width} = useWindowDimensions();

    return (
        <div className="container">
            <div className="row" style={width >= 576 ? ( width >= 768 ? ( width >= 1200 ? {height:"600px"} : {height:"550px"}) : {height:"500px"} ) : {height:"400px"}}>
                <div className="col-12 my-2" style={{width:"100%",height:"auto",position:"relative",overflow:"hidden", marginBottom:"10px"}}>
                    <iframe scrolling="no" 
                    className="justify-content-center" 
                    style={{border:"0",height:"100%",left:"0",width:"100%", position:"absolute",top:"0"}} 
                    key="Key" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    frameBorder="0" 
                    allowFullScreen
                    src={data.videoEmbedded} ></iframe>
                    {/* <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/dchaSu_SMnc" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectVideoEmbedded;