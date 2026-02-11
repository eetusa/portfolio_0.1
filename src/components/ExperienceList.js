import React from "react";

const ExperienceList = (props) => {

    return(
        <div className="experience-list">
            {props.children}
        </div>
    );
}

export default ExperienceList;