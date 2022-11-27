const galleryCaption = 'gallery__caption';
const galleryCaptionShadow = 'gallery__caption--shadow';
const galleryCaptionWhite = 'gallery__caption--white';
const galleryFigure = 'gallery__figure';
const galleryPhoto = 'gallery__photo';

export default function makeFigure() {
    const figure = document.createElement('figure');
    figure.classList.add(galleryFigure);
    figure.setAttribute('data-aos', 'fade-up');

    const image = document.createElement('img');
    image.classList.add(galleryPhoto);

    const figcaption = document.createElement('figcaption');
    figcaption.classList.add(galleryCaption, galleryCaptionShadow, galleryCaptionWhite);

    figure.appendChild(image);
    figure.appendChild(figcaption);

    return figure;
}