import React from 'react';
import useSite from './useSite';
import data from './assets/data/projects.json';
import Card from 'react-bootstrap/Card';



const ProjectDisplay = () => {
    const {projectStyle} = useSite();
    const lang = "EN";

    if (lang === "EN"){
        data.map ( (data )  => {
            return(
            data.title = data.titleEN,
            data.description = data.descriptionEN
            )
        })
    } else {

    }




    const ProjectShow = () => {
        if (projectStyle === false){
            return (
                <div className="container" id ="grid" style={{position:"relative"}}>

                    

                    <div className="row py-4 py-sm-0 justify-content-center">
                        { data.map ( (data) => {
                            return(
                                <Card 
                                    className="col-sm-6 col-md-4 col-lg-3 m-2 p-0" 
                                    style={{boxShadow:
                                        "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
                                        
                                    }} 
                                    key = {data.id}
                                >
                                    <img className="card-img-top" src={require(`./assets/images/${data.image}`)}  alt=""></img>
                                    <Card.Body > 
                                        
                                        <Card.Title style={{borderTop: "",borderBottom: "2px solid rgba(0,0,0,0.1)", padding:"5px"}}>{data.title}</Card.Title>
                                        <Card.Text className="h-20">
                                            {data.description}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            
            )
        } else {
            return(
                <div  className="container" id ="grid" style={{position:"relative"}}>
                    yksittäisnäkymä
                          
                      
                  
                </div>
            )
        }
    }
    
    return (
        <ProjectShow/>
    );
}

export default ProjectDisplay;