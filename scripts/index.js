import photos from './photos.js';
import buildImageCard from './figure.js';

// get the gallery container from the DOM
const gallery = document.querySelector('#gallery');

// for each photo create a figure element
for (let photo of photos) {
    const imageCard = buildImageCard();

    const imageElement = imageCard.querySelector('img');
    imageElement.setAttribute('src', photo.url);

    const cardTitle = imageCard.querySelector('.card__title');
    cardTitle.innerHTML = photo.id;

    const cardSubtitle = imageCard.querySelector('.card__subtitle');
    cardSubtitle.innerHTML = photo.collection;

    const metadataLink = imageCard.querySelector('.metadata__link');
    metadataLink.innerHTML = 'Suit Link';

    gallery.appendChild(imageCard);
}
