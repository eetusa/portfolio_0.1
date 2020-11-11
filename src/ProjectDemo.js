import React from 'react';


const ProjectDemo = ({data}) => {


    return (
        <div style={{width:"100%",height:"auto",position:"relative",overflow:"hidden", marginBottom:"10px"}}>
            <iframe scrolling="no" className="justify-content-center" style={{border:"0",height:"100%",left:"0",width:"100%", position:"absolute",top:"0"}} key="asd" title="vittu" src={data.demo} ></iframe>
        </div>
    );
}

export default ProjectDemo;