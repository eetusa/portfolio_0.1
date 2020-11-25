import React from 'react';
import { Image } from 'react-bootstrap';
import parse from 'html-react-parser';
import ProjectTagsSingleView from './ProjectTagsSingleView';
import ReadMore from '../components/ReadMore';


const ProjectDescription = ({data}) => {
    if (data.readmoreimg){

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 py-1 px-0 project-description order-3 order-sm-1">
                    {parse(data.body)}
                    {data.readmore && 
                    <ReadMore images={data.readmoreimages}>
                        {parse(data.readmore)}
                    </ReadMore>
                }
                </div>

                
            
                <div className="col-12 my-2 mx-0 px-0 order-2">
                    <ProjectTagsSingleView tags={data.tags} />
                </div>
            
            
            
                <div className="col-12 mx-0 px-0 order-1 order-sm-3">
                    <div style={{position:"relative"}}>
                            <Image style={{width:"100%"}} 
                            src=
                                {require(`../assets/images/${data.image}`)} 
                            alt=""></Image>
                            <div className="col-12 m-0"
                                style={{
                                    width:"100%",
                                    left:"0",
                                    position: "absolute", 
                                    bottom:"0",
                                    background: "rgba(0,0,0,0.7)",
                                    color:"white"
                            }}> 
                                {data.title}
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;