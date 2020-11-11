import React from 'react';
import { Image } from 'react-bootstrap';
import useWindowDimensions from './useWindowDimensions';
import parse from 'html-react-parser';


const ProjectDescription = ({data}) => {
    // const divRef = useRef(null);
    const {width} = useWindowDimensions();  
    // useEffect(() => {
    //     divRef.current.scrollIntoView({ behavior: 'smooth' });
    // });
    return (
        <div className="container">
            {parse(data.body)}
            
            <div className="row">
                <div className="col-12 my-2">
                    <div style={{position:"relative"}}>
                            <Image style={{width:"100%"}} 
                            src=
                                {
                                    width>=576 ? ( width>=768 ? ( width>=1200 ? require(`./assets/images/${data.image}`) 
                                        : require(`./assets/images/${data.image}`)) 
                                            : require(`./assets/images/${data.image}`)) 
                                                : require(`./assets/images/${data.image}`)  
                                } 
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