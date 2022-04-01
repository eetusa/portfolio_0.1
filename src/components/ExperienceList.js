import React from "react";

const ExperienceList = (props) => {

    return(
        <div>
            <h3>Experience</h3>
            {props.children}
        </div>
    );
}

export default ExperienceList;