import React from 'react';
import ImageGallery from 'react-image-gallery';

const ProjectScreenshots = ({data}) => {

    let images = [];
    if (data.images){
        for (let i = 0; i < data.images.length; i++) {
            images.push({
                original: require(`../assets/images/${data.images[i].img}`),
                thumbnail: require(`../assets/images/${data.images[i].img}`)
            })
        }
    }

    return (
        
        <div className="container px-0 mx-0">
            <div className="row px-0 mx-0" >
                <div className="col-12 px-0 mx-0">
                     <ImageGallery showPlayButton={false} showThumbnails={false} items={images} />
                </div>
            </div>
        </div>
        
    );
}

export default ProjectScreenshots;