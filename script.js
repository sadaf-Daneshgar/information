const images = [
    './image/karbala-(3).jpg',
    './image/abas.webp',
    './image/haram.jpg',
    './image/اصغر.jpg',
    './image/اصغر2.jpg',
    './image/images.jpeg',
    './image/nody-عکس-از-بین-الحرمین-در-روز-1662749110.jpg'
]

let currentImageIndex = 0;

function changeImage (){
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('#image img').src = images[currentImageIndex];
}

setInterval(changeImage, 2000);
