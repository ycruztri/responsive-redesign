let idx = 0; 
let imgs = document.getElementsByClassName("slideshowImg"); 
// displayImg()

function displayImg(){
    for(i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
    }
    imgs[idx].style.display = "block";
}

function prevImg(){
    idx = (idx - 1) % imgs.length; 
    displayImg(); 
}

function nextImg(){
    idx = (idx + 1) % imgs.length; 
    displayImg(); 
}

document.addEventListener("DOMContentLoaded", function() {
    displayImg();
});
