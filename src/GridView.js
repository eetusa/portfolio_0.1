import React, { useEffect } from "react";
import data from "./assets/data/projects.json";
import Card from "react-bootstrap/Card";
import useSite from "./useSite";
import { Link } from "react-router-dom";
import useWindowDimensions from "./useWindowDimensions";

const GridView = () => {
  const { projectState, setProjectState } = useSite();
  const {width} = useWindowDimensions();
  useEffect(() => {

    let temp = [...projectState];
    let change=false;

    if(projectState[1]===true){
      temp[1] = false;
      change=true;
    }

    if(projectState[2]===true){
      temp[2]=false;
      change=true;
    }

    if(change){
      setProjectState(temp);
    }
  })

  const lang = "EN";

  if (lang === "EN") {
    data.map((data) => {
      return (
        (data.title = data.titleEN), (data.description = data.descriptionEN)
      );
    });
  } else {
  }


 

  const resourceTitle = (e) => {
    if (e.indexOf(' ')===-1){
      return (e[0].toLowerCase()+e.slice(1));
    } else{
      let temp = e[0].toLowerCase();
      for (let i = 1; i < e.length; i++){
        if (e[i]===" "){
          temp += "_";
        } else if (e[i]==="."){
          temp += "-";
        } else{
          temp += e[i].toLowerCase();
        }
      }
      return temp;
    }
  }

  return (
    
      <div className="row py-4 py-sm-0 justify-content-center">
        {data.map((data) => {
          const resource = resourceTitle(data.titleEN);
    
          
          return (
            <Card
              className="col-12 col-sm-4 col-md-4 col-lg-3 m-sm-2 p-0"
              style={{
                boxShadow: width > 576 ?  "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)" : "0",
                borderBottom: width > 576 ? "0" : "1px solid rgb(200,200,200)",
                borderRadius: width > 576 ? "4px" : "0px",
            }}
              key={data.id}
            >
              <img
                className="card-img-top"
                style={{borderRadius: width > 576 ? "4px" : "0px",}}
                src={require(`./assets/images/${data.image}`)}
                alt=""
              ></img>
              <Card.Body>
                <Card.Title
                  style={{
                    borderTop: "",
                    borderBottom: "2px solid rgba(0,0,0,0.1)",
                    padding: "5px",
                  }}
                  onClick={() => {
                    let temp = [...projectState];
                    
                    temp[0] = resource;
                    temp[1] = true;
                    temp[2] = true;
                    temp[3] = 0;
                    setProjectState(temp)
                    window.scrollTo(0,0);
                  }}
                >
                  <Link to={`/projects/${resource}`}>{data.title}</Link>
                </Card.Title>

                <Card.Text className="h-20">{data.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      
    
  );
};

export default GridView;
