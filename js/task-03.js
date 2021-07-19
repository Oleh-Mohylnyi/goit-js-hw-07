const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('#gallery');

const galleryListItems = images.reduce(callback, '');

function callback(acc, { url, alt}) {
return acc + `
        <li >
        <img src=${url} alt=${alt} width="300">
        </li>
        `
};

galleryListRef.insertAdjacentHTML('afterbegin', galleryListItems);

galleryListRef.style.listStyle = "none";































// let imgCardList = '';
// const createLiEl = (imagesParameters) => {
//     const [{url, alt}] = imagesParameters;
//     for (let image of images) {
//         let imgCard = `
//         <li >
//         <img src=${image.url} alt=${image.alt} width = "100%">
//         </li>
//         `;
//         imgCardList = imgCardList + imgCard;
//     }
// };

// createLiEl(images);        
// const galleryEl = document.querySelector('#gallery');
// galleryEl.insertAdjacentHTML('afterbegin', imgCardList);
        
//         galleryEl.style.display = "grid";
//         galleryEl.style.gridTemplateColumns = "repeat(3, 1fr)";
//         galleryEl.style.gap = "30px";
//         galleryEl.style.listStyle = "none";
        