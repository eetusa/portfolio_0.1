import React from "react";

const ExperienceList = (props) => {

    return(
        <ul className="experience-list">
            {props.children}
        </ul>
    );
}

export default ExperienceList;
