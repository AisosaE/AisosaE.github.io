document.addEventListener("DOMContentLoaded" , () => {

const images = document.querySelectorAll("img");

for(const image of images){
   fetch("https://cataas.com/cat")
   .then(response => response.json())
   .then(data => {
    image.src = data.message
    image.width = 20;
    image.height = 20;
})


}


})


