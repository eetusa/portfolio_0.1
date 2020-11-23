import React from 'react';
import useWindowDimensions from '../api/useWindowDimensions';

const ProjectDemo = ({data}) => {
    const {width} = useWindowDimensions();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-2 text-muted">
                    {data.demotext && <>{data.demotext} </>}
                </div>
            </div>
            <div className="row" style={width >= 576 ? ( width >= 768 ? ( width >= 1200 ? {height:"600px"} : {height:"550px"}) : {height:"500px"} ) : {height:"400px"}}>
                <div className="col-12 my-2" style={{width:"100%",height:"auto",position:"relative",overflow:"hidden", marginBottom:"10px"}}>
                    <iframe scrolling="no" className="justify-content-center" style={{border:"0",height:"100%",left:"0",width:"100%", position:"absolute",top:"0"}} key="asd" title="vittu" src={data.demo} ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ProjectDemo;