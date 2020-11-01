import React, { useEffect, useRef } from 'react';
import ImageGallery from 'react-image-gallery';



// require(`./assets/images/${pr.banner_150}

const ProjectScreenshots = ({data}) => {
    const divRef = useRef(null);


    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });
    
    let images = [];
    if (data.images){
        for (let i = 0; i < data.images.length; i++) {
            images.push({
                original: require(`./assets/images/${data.images[i].img}`),
                thumbnail: require(`./assets/images/${data.images[i].img}`)
            })
        }
    }
    

    
    // images = [
    //     {
    //       original: require(`./assets/images/${data.image}`),
    //       thumbnail: require(`./assets/images/${data.image}`),
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1015/1000/600/',
    //       thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1019/1000/600/',
    //       thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    //   ];
    return (
        <div ref={divRef}>
            {data.images && <ImageGallery showPlayButton={false} showThumbnails={false} items={images} />}
        </div>
    );
}

export default ProjectScreenshots;