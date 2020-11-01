import React, { useRef, useState } from 'react';
import data from './assets/data/sitedata.json'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import { Overlay } from 'react-bootstrap';



const About = () => {
    
    const a = data[0];
    const lang = "EN";
    let name, hobbies, age, city, country, experience;
    const [show, setShow] = useState(false);
    const target = useRef(null);



    // add effects to text
    const BeutifyAbout = ({str}) => {
        // add class text-warning
        const redLight = "python javascript java php html css react bootstrap";
        const redLights  = redLight.split(" ");
        let tempstr = str.replace(/[,.]/g,'');
        let temp = (tempstr.split(" "));
        let result = str;
        for (let i = 0; i < temp.length; i++){
            if ( redLights.includes( temp[i].toLowerCase() ) ){
                result = result.replace(temp[i], `<strong><span class="text-danger">${temp[i]}</span></strong>`);

            }
        }
        return <p>{parse(result)}</p>;
    }

    

    const countAge = () => {
        const bday= new Date(Date.parse(a.birth));
        let ageDifMs = Date.now() - bday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    if (lang==="EN"){
        name="Name: ";

        hobbies = () => {
            return(
                <div>
                    <h5>Hobbies</h5><small>I've been around computers near-literally my whole life, having various hobbies and interests involving them. I've always been an avid<span style={{color: "rgb(245, 119, 134)"}} ref={target} onMouseLeave={() => {setShow(false)}} onMouseEnter={() => {setShow(true)}}> PC gamer</span>, going through fpses, morpgs and mobas. I've also played guitar for the better part of my life. Movies and series definitely also list in my interests. Horror movies in particular do rock my boat.</small>

                    <Overlay target={target.current} show={show} placement="top">
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                            <div
                                {...props}
                                style={{
                                    width:"200px",
                                backgroundColor: 'rgba(245, 119, 134, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                                }}
                            >
                                For example, I love Dota2, CS:GO and The Witcher 3!
                            </div>
                        )}
                    </Overlay>
                    
            
                </div>
            )
        }
        age="Age: ";
        city="City: ";
        country="Country: ";
        a.country = a.countryEN;
        a.hobbies = a.hobbiesEN;
        
        experience = () => {
            return(
                <div className="lead">
                    <BeutifyAbout 
                    str="<b>My first touch with programming</b> was with CoolBasic as a kid, but had a long hiatus since. My return to the field was when I took programming studies while studying to be a classroom teacher at Rauma, Finland. That is when I found myself loving the problem solving, the never-ending learning. After rekindling the passion I've studied Python, Java, JavaScript, PHP, HTML and CSS. Currently I'm learning React and Bootstrap. I started studies with programming as a major in 2020.<br><br>
                    
                    <b>My strengths</b>, I think, are self-learning, finding information, learning fast, applying learnt things in creative ways and always aiming for understanding rather than remembering. Most of my journey as a programmer has been self-learning or remote learning, so I feel pretty comfortable charging the unknown. I also have a strong background in mathematic which helps in certain tasks.<br><br>

                    <b>Things I want to improve upon</b> are being more organized in my programming projects and working as a team.<br><br>
                    
                    <b>My future is open</b> and I still don't know what I exactly want from my career as a programmer. I'm looking forward to continuing to grow as coder and develope a more coherent view of the sub-categories in the field." />
                </div>
            )
        }
    }

    return (
        <div className="row text-muted">
            <div className="container-fluid m-0 p-0">
            <div className="row justify-content-center">
                <div className="col-sm-12 order-md-2 col-md-6 col-lg-5 my-2">
                    <div className="col-12">
                    <Card className="bg-light" key ="1" >
                        <Card.Body >
                    <div className="container">
                        <div className="row">
                            <div className="col-5 bg-secondary">
                                <Image src={require(`./assets/images/${a.image}`)} alt="" fluid />
                            </div>
                            <div className="col-7 bg-light">
                                <div>{name + a.name}</div>
                                <div>{age + countAge()}</div>
                                <div>{city + a.home}</div>
                                <div>{country + a.country}</div>

                            </div>
                        </div>
                        <div className="row my-2 py-1">
                            <div className="col-auto">
                            {hobbies()}
                            </div>
                        </div>
                    </div>
                    </Card.Body>
                    </Card> 
                    </div>
                </div>
                <div className="blockquote col-sm-12 order-md-1 col-md-6 col-lg-7 my-2  ">
                    <div className="col-12">
                        {experience()}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;