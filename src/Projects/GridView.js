import React, { useState } from "react";
import datax from "../assets/data/projects.json";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useWindowDimensions from "../api/useWindowDimensions";
import OrderByDropDown from "../components/OrderByDropDown";

const GridView = () => {
  const {width} = useWindowDimensions();
  const [sortState, setSortState] = useState({value: "newest", label: "Newest"})
  const lang = "EN";

  let data = [...datax];

  if (lang === "EN") {
    data.map((data) => {
      const year = data.date.substring(0,4);
      let month = data.date.substring(5,7);
      if (month[0] === "0"){
        month = month[1];
      }
      const displaydate = month + "/" + year;
      return (
        (data.title = data.titleEN), (data.description = data.descriptionEN, data.displaydate = displaydate)
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

  const orderArrayalphabetically = (array) => {
    array.sort(function (a,b) {
      if (a.title > b.title) {
        return 1;
      }
      if (b.title > a.title){
        return -1;
      }
      return 0;
    });
  }

  const orderArrayFromNewest = (array) => {
    array.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })
  }

  const orderArrayFromOldest = (array) => {
    array.sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    })
  }
 
  if (sortState.value==="newest"){
      orderArrayFromNewest(data);
  }
  if (sortState.value==="oldest"){
      orderArrayFromOldest(data);
  }
  if (sortState.value==="title"){
      orderArrayalphabetically(data);
  }
  
  


  return (
    
      <div className="row px-0 mx-0" style={{width:"100%"}}>
        <div className="col-12 px-1 mx-0" style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
          Order: <OrderByDropDown sortState = {sortState} setSortState={setSortState} array={data} />
        </div>
        {data.map((data) => {
          const resource = resourceTitle(data.titleEN);
    
          
          return (
            <div key={data.id} className="col-12 col-sm-4 col-md-4 col-lg-3 p-0">
              
              <Card
                
                style={{
                   boxShadow: width > 576 ?  "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)" : "0",
    
                  borderBottom: width > 576 ? "2px solid rgb(230,230,230) " : "1px solid black",
                  borderTop: width > 576 ? "0" : "1px solid black",
                  borderLeft: width > 576 ? "0 " : "",
                  borderRight: width > 576 ? "2px solid rgb(230,230,230) " : "",
                  borderRadius: width > 576 ? "4px" : "0px",
                  margin: width > 576 ? "5px" : "0px",
                 
               }}
              ><Link className="router-link" to={`/projects/${resource}`}>
                <img
                  className="card-img-top"
                  style={{borderRadius: width > 576 ? "4px" : "0px",}}
                  src={require(`../assets/images/${data.image}`)}
                  alt=""
                ></img></Link>
                <Card.Body style={{background:"rgb(250,250,250)"}}>
                  <Card.Title
                    style={{
                      borderTop: "",
                      borderBottom: "2px solid rgba(0,0,0,0.1)",
                      padding: "5px",
                    }}
                  >
                    <Link className="router-link" to={`/projects/${resource}`}>{data.title} <span>{data.displaydate}</span></Link>
                  </Card.Title>

                  <Card.Text className="h-20 text-muted">{data.description}</Card.Text>
                </Card.Body>
              </Card>
            
            </div>
          );
        })}
      </div>
      
    
  );
};

export default GridView;
