document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".carousel-container img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 5000); // Change every 5 seconds
});


document.getElementById("yesBtn").addEventListener("click", function() {
    let response = document.getElementById("response");
    response.innerText = "LESSSSSS GOOOOOOOOO 😭🥰🤟🏻 aashvi i can't tell how grateful I am to have you frrr \n you the smartest prettiest girl I have ever met sachi main, I really want this to be the \n endgame🤞🏻, no matter what happens you can always count on me to listen and I want to \n listen sab chiz Teri kuch bhi andu gundu bolegi your voice is everything mer liye I want to \n know sab kuch tera EVERYTHING, once again Happy Valentine's Day😍🫶🏻😘";
    response.style.display = "block"; // Make sure it's visible

    document.querySelector(".carousel-container").style.display = "none";
    
    let gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");
    gifContainer.innerHTML = `<img src="/static/love.gif" alt="Love GIF" style="width: 100%; height: auto; display: block; margin: auto;">`;
    
    document.body.appendChild(gifContainer);

    let song = document.getElementById("loveSong");
    song.play();
});


document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * 80 + "vh";
    this.style.left = Math.random() * 80 + "vw";
});

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 500);

