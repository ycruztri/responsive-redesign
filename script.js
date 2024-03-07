let idx = 0; 
let imgs = document.getElementsByClassName("slideshowImg"); 
// displayImg()

function displayImg(){
    for(i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
    }
    imgs[idx].style.display = "block";
}

function nextImg(){
    idx = (idx + 1) % imgs.length; 
    displayImg(); 
}

function playSlideshow(){
    displayImg(); 
    setInterval(nextImg, 2500);
}

document.addEventListener("DOMContentLoaded", function() {
    playSlideshow();
    
});
