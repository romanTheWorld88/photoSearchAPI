import { render } from "@testing-library/react";
import ImageShow from "./ImageShow";
import './ImageList.css';

// every one of our objects has an 'id', we will go over an array, each image 
// will be mapped to a new array with the image property
function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key = {image.id} image={image} />;
    });


  return <div className="image-list">ImageList: {renderedImages} </div>;
}

export default ImageList;
