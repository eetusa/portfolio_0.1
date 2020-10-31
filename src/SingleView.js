import React from 'react';
import data from './assets/data/projects.json';
import useSite from './useSite';
import useWindowDimensions from './useWindowDimensions';
import Image from 'react-bootstrap/Image'


const SingleView = () => {
    const {projectView} = useSite();
    const {width} = useWindowDimensions();
    const lang = "EN";
    const index = projectView;

    const pr = data[index];

    if (lang === "EN"){
        data.map ( (data )  => {
            return(
            data.title = data.titleEN,
            data.description = data.descriptionEN
            )
        })
    } else {

    }

    return (
        <div className="container py-4 px-0">
            <div className="row">
                <div className="col-12 m-0 p-0" style={{position:"relative"}}>
                        <Image fluid src={ width>=576 ?  require(`./assets/images/${pr.banner}`) : require(`./assets/images/${pr.image}`)  } alt=""></Image>
                        <div 
                            style={{
                                width: "100%",
                                padding: "10px",
                                position: "absolute", 
                                bottom:"0",
                                background: "rgba(0,0,0,0.25)",
                                color:"white"
                        }}> {pr.title}</div>
                        
                </div>
            </div>
        </div>
    );
}

export default SingleView;