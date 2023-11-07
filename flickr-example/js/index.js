const API_KEY = 'Här ska din API-nyckel ligga';
const BASE_URL = 'https://api.flickr.com/services/rest';
const imageElem = document.querySelector('img');

async function getPhotos() {
    const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=cat&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json(); 

    console.log(data.photos.photo[0]);
    const image = data.photos.photo[0];
    console.log(image);

    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`;
    console.log(imageUrl);
    imageElem.src = imageUrl;
}

getPhotos();