import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    const imagesArray = props.images.map((image)=>{
        return <ImageCard key = {image.id} image = {image} />
    });
    // console.log(imagesArray);
    return <div className = "image-list">{imagesArray}</div>
}

export default ImageList;