import photos from './photos.js';
import makeFigure from './figure.js';

// get the gallery container from the DOM
const gallery = document.querySelector('#gallery');

// for each photo create a figure element
for (let photo of photos) {
    const figure = makeFigure();

    const image = figure.querySelector('img');
    image.setAttribute('src', photo.url);

    const caption = figure.querySelector('figcaption');
    caption.innerHTML = photo.id;

    gallery.appendChild(figure);
}
