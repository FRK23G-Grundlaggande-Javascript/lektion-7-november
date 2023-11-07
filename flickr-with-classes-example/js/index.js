const API_KEY = '19d3e6e0acfe9c438f368e2c2bab1c5d';
const BASE_URL = 'https://api.flickr.com/services/rest';
const imageElem = document.querySelector('img');

class Image {
    constructor(photo) { // Varje klass har en konstruktor som initierar alla egenskaper
        this.photo = photo;
    }

    getImageUrl() {
        const imageUrl = `https://farm${this.photo.farm}.staticflickr.com/${this.photo.server}/${this.photo.id}_${this.photo.secret}_c.jpg`; 
        return imageUrl;
    }
}

async function getPhotos() {
    const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=cat&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json(); 

    console.log(data.photos.photo[0]);
    //const image = data.photos.photo[0];
    const image = new Image(data.photos.photo[0]);
    console.log(image.getImageUrl());

    imageElem.src = image.getImageUrl();
}

getPhotos();