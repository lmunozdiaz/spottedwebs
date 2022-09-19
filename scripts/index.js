"use strict"

// build the gallery
createGallery();

function createGallery() {
    // the number of images in the folder
    const numberOfImages = 23;

    // get the gallery element (parent)
    const gallery = document.querySelector('#gallery');

    // iterate through the images and add them to the DOM
    for (let i = 1; i <= numberOfImages; i++) {
        // create the img element
        const image = document.createElement('img');
        // build the image URL and set the src attribute
        let imageUrl = 'images/' + i + '.png';
        image.setAttribute('src', imageUrl);
        // add the newly created img element to the gallery
        gallery.appendChild(image)
    }
}
