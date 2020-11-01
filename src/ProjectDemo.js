import React from 'react';


const ProjectDemo = ({data}) => {


    return (
        <div style={{width:"100%",height:"auto",paddingTop:"56,25%",position:"relative",overflow:"hidden"}}>
            <iframe style={{border:"0",height:"100%",left:"0",width:"110%", position:"absolute",top:"0"}} key="asd" title="vittu" src={data.demo} ></iframe>
        </div>
    );
}

export default ProjectDemo;