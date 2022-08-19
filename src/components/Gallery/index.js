import React from "react";
import PhotoList from "../PhotoList";
// import Modal from "../Modal";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery(props) {

    const { currentCategory } = props;
    
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
           
            <PhotoList category={currentCategory.name}></PhotoList>
           
        </section>
    );
}

export default Gallery;