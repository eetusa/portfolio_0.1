import React from 'react';

const ProjectTagsSingleView = ({tags}) => {
    
    const TagList = () => {
        let tagslist = [];
        tagslist = tags.split(', ')
        return (
            <>
                {tagslist?.map((item,index) => {
                    return(
                        <span key = {index+""+item}>{item}</span>
                    )
                })}
            </>
        )
    }
    return (
        <div className="taggedWith">
            <span>Tagged with:</span>
            <TagList/>
        </div>
    );
}

export default ProjectTagsSingleView;