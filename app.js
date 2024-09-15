document.addEventListener("DOMContentLoaded" , () => {

const images = document.querySelectorAll("img");

for(const image of images){
   fetch("/api/cats?tags=tag1,tag2&skip=0&limit=10")
   .then(response => response.json())
   .then(data => {
    image.src = data.message
    image.width = 20;
    image.height = 20;
})


}


})


