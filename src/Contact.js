import React, { useEffect } from 'react';
import useSite from "./useSite";

const Contact = () => {
    const {projectState, setProjectState} = useSite();
    useEffect(() => {
        if (projectState[2]===true){
            let temp = [...projectState];
            temp[2] = false;
            setProjectState(temp);
        }
    })
    return (
        <div>Under construction. <br></br>You can catch me at eetu.salli@gmail.com.</div>
    );
}

export default Contact;