import React from 'react';
import data from './assets/data/sitedata.json'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const About = () => {
    const a = data[0];
    const lang = "EN";
    let name, hobbies, age, city, country, experience;

    const countAge = () => {
        const bday= new Date(Date.parse(a.birth));
        let ageDifMs = Date.now() - bday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    if (lang==="EN"){
        name="Name: ";

        hobbies = () => {
            return(<div>
            <small>I've been around computers near-literally my whole life, having various hobbies and interests involving them. I've always been an avid PC gamer, going through fpses, morpgs and mobas. I've also played guitar for the better part of my life. Movies and series definitely also list in my interests.</small></div>
            )
        }
        age="Age: ";
        city="City: ";
        country="Country: ";
        a.country = a.countryEN;
        a.hobbies = a.hobbiesEN;
        experience = () => {
            return(
                <p className="lead">
                <b>My first touch with programming</b> was with CoolBasic as a kid, but had a long hiatus since. My return to the field was taking programming studies while studying to be a classroom teacher at Rauma, Finland. That is when I found myself loving it. After rekindling the passion I've studied Python, Java, JavaScript, PHP, HTML and CSS. Currently I'm learning React and Bootstrap, both of which are used in this site. I started studies with programming as my major in 2020.<br></br><br></br>
                
                <b>My strengths</b> are self-learning, finding information, learning fast, applying learnt things in creative ways and always aiming for understanding rather than remembering. Most of my journey as a programmer has been self-learning or remote learning. I also have a strong background in mathematic which I think is an advantage.</p>
            )
        }
    }

    return (
        <div className="row text-muted">
            <div className="container-fluid m-0 p-0">
            <div className="row justify-content-center">
                <div className="col-sm-12 order-md-2 col-md-6 col-lg-5 my-2">
                    <Card className="bg-light" key ="1" >
                        <Card.Body >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 bg-secondary">
                                <Image src={require(`./assets/images/${a.image}`)} alt="" fluid />
                            </div>
                            <div className="col-md-7 col-sm-12 bg-light">
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
                <div className="blockquote col-sm-12 order-md-1 col-md-6 col-lg-7 my-2 ">
                    {experience()}
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;