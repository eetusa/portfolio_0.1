import React, { useRef, useState } from 'react';

const ReadMore = (props) => {
    let pchildren;
    if (props.children.props === undefined) {
        pchildren = props.children;
    } else if (props.children.props.children!==undefined) {
        pchildren = props.children?.props?.children;
    }
    
    
    


    // const Readme = ({children}) => {
        
    //     return (
    //         <div className="read-more-content">
    //             {children.map( (item, index) => {
    //                 if (item.type===undefined || item.type==="p"){
    //                 return <React.Fragment key={index}>{item}</React.Fragment>;
    //                 } else if (item.type==="br") {
    //                     return <br key={index}></br>;
    //                 } else if (item.type==="img") {
                        
    //                     return (
    //                         <div key={index} style={{width:"80%"}}>
    //                         <img width="100%" alt={item.props.alt}  src={require(`../assets/images/${item.props.src}`)}></img>
    //                         <p style={{float:"right"}}><i>{item.props.alt}</i></p>
    //                         </div>
    //                     )
    //                 } else if (item.type==="ul") {
    //                     return(
    //                         <ul key={''+item+index}>
    //                             {item.props.children.map((item, index) => {
                                
    //                                 return (
    //                                     <React.Fragment key={''+index+item}>{item}</React.Fragment>
    //                                 )
    //                             })}
    //                         </ul>
    //                     )
    //                 } else {
    //                     return <React.Fragment>{item}</React.Fragment>;
    //                 }
    //             })}
    //          </div>
    //         )
        

    // }

    const Readme = ({children}) => {
        return (
            <div className="read-more-content">
                {children.map( (item, index) => {
                    if (item.type!=="img"){
                        return <React.Fragment key={index}>{item}</React.Fragment>;
                    } else { 
                        return (
                            <div key={index} style={{width:"100%"}}>
                            <img width="100%" alt={item.props.alt}  src={require(`../assets/images/${item.props.src}`)}></img>
                            <p style={{float:"right"}}><i>{item.props.alt}</i></p>
                            </div>
                        )
                    }
                })}
             </div>
            )
        

    }
   
    const [readMoreExpanded, setReadMoreExpanded] = useState(false);
    return (
        <>
            
            <div className="row px-0 mx-0 py-4" >
                <div 
                    className={readMoreExpanded ? 
                        "col-12 read-more-content-wrapper read-more-show" 
                        : "col-12 read-more-content-wrapper read-more-hide"}
                >
                    <Readme children={pchildren}></Readme>
                </div>
                <div className="col-12 text-center">
                    <button 
                        onClick={() => { 
                                setReadMoreExpanded(!readMoreExpanded)
                            }
                        }
                        className="read-more-button">{readMoreExpanded && "That's enough"} {!readMoreExpanded && "Read more"} 
                    </button> 
                </div>
            </div>
    </>
    );
}

export default ReadMore;