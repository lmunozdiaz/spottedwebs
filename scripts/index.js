import photos from './photos.js';

// get the gallery container from the DOM
const gallery = document.querySelector('#gallery');

// for each photo create a figure element
for (let photo of photos) {
    const galleryFigure = createFigure();

    const figureImageElement = galleryFigure.querySelector('img');
    figureImageElement.setAttribute('src', photo.url);

    const figureCaptionElement = galleryFigure.querySelector('figcaption');
    figureCaptionElement.innerHTML = photo.id;

    // add the new figure to the DOM
    gallery.appendChild(galleryFigure);
}

/**
 * 
 * @returns A prepared figure containing an img and figcaption element,
 * each with their appropriate class names.
 */
function createFigure() {
    // class names
    const galleryPhoto = 'gallery__photo';
    const galleryCaption = 'gallery__caption';
    const galleryCaptionShadow = 'gallery__caption--shadow';

    // construct the figure!

    const figure = document.createElement('figure');

    // create the img element
    const image = document.createElement('img');
    image.classList.add(galleryPhoto);
    
    // create the figcaption element
    const figcaption = document.createElement('figcaption');
    figcaption.classList.add(galleryCaption, galleryCaptionShadow);

    // attach the img and figcaption to the figure
    figure.appendChild(image);
    figure.appendChild(figcaption);``

    // Done!
    return figure;
}
