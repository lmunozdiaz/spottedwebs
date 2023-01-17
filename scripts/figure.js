const cardClass = 'card';
const cardImageClass = 'card__image';
const cardDetailsClass = 'card__details';
const cardHeaderClass = 'card__header';
const cardTitleClass = 'card__title';
const cardSubtitleClass = 'card__subtitle';
const cardMetadataClass = 'card__metadata';
const metadataLinkClass = 'metadata__link'
const metadataLikeClass = 'metadata__like';
const materialIconClass = 'material-icons';

export default function buildImageCard(imageUrl) {
    const card = document.createElement('div');
    card.classList.add(cardClass);

    const cardImage = document.createElement('div');
    cardImage.classList.add(cardImageClass);
    const image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    cardImage.appendChild(image);

    card.appendChild(cardImage);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add(cardDetailsClass);

    const cardHeader = document.createElement('header');
    cardHeader.classList.add(cardHeaderClass);
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add(cardTitleClass);
    const cardSubtitle = document.createElement('p');
    cardSubtitle.classList.add(cardSubtitleClass);
    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardSubtitle);

    cardDetails.appendChild(cardHeader);

    const cardMetadata = document.createElement('section');
    cardMetadata.classList.add(cardMetadataClass);
    const metadataLink = document.createElement('span');
    metadataLink.classList.add(metadataLinkClass);
    const metadataLike = document.createElement('span');
    metadataLike.classList.add(materialIconClass)
    metadataLike.innerHTML = 'thumb_up_off_alt';
    cardMetadata.appendChild(metadataLink);
    cardMetadata.appendChild(metadataLike);

    cardDetails.appendChild(cardMetadata);

    card.appendChild(cardDetails);

    return card;
}