const gallery = ["https://via.placeholder.com/160x90/0000FF/808080%20?Text=1" , "https://via.placeholder.com/160x90/FF0000/FFFFFF?Text=2", "https://via.placeholder.com/160x90/FFFF00/000000?Text=3"];
let counter = 0;
const previousB = document.querySelector('img + button');
const nextB = document.querySelector('img + button + button');
const img = document.querySelector('#slider'); 
img.src = gallery[counter];
previousB.addEventListener('click', event => {    
    --counter;
    if (counter === -1){
        counter = gallery.length -1;
    }
    img.src = gallery[counter];
})
nextB.addEventListener('click', event => {
    ++counter;
    if (counter === gallery.length){
        counter = 0;
    }
    img.src = gallery[counter];
})

