let img1 = new Image();
img1.src = "Images/Jimmyphoto.jpg";
let img2 = new Image();
img2.src = "Images/BackgroundImgcopy.png";


window.onload = function() {

    document.querySelector('.dropbtn').addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
        this.classList.toggle('x');
    });

    const typedEl = document.getElementById('typedText');
    if (typedEl) {
        const options = {
            strings: ['Hi, My Name is Jimmy.'],
            typeSpeed: 50
        };
        new Typed('#typedText', options);
    }
}


let images = Array.from(document.querySelectorAll('.photoImage'));
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex;

// Add an event listener to each image
images.forEach((image, index) => {
    image.addEventListener('click', function(event) {
        // Set the lightbox image src to the clicked image src
        lightboxImg.src = this.src;
        // Show the lightbox
        lightbox.classList.add('show');
        // Store the index of the current image
        currentImageIndex = index;
    });
});

lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxImg) {
        lightbox.classList.remove('show');
    }
});

document.addEventListener('keydown', function(event) {
    if (lightbox.classList.contains('show')) {
        if (event.key === 'ArrowRight') {
            // Move to next image, or loop back to start
            currentImageIndex = (currentImageIndex + 1) % images.length;
        } else if (event.key === 'ArrowLeft') {
            // Move to previous image, or loop around to end
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        // Set the lightbox image src to the new image
        lightboxImg.src = images[currentImageIndex].src;
    }
});

let lightboxLeft = document.getElementById('lightbox-left');
let lightboxRight = document.getElementById('lightbox-right');

lightboxLeft.addEventListener('click', function(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex].src;
});

lightboxRight.addEventListener('click', function(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex].src;
});

function changeImage(n) {
    let img = document.querySelector('.lightbox img');
    img.style.opacity = 0; // set opacity to 0 to fade out
    setTimeout(function() { // set a delay before changing the image source
      img.src = images[currentIndex];
      img.onload = function() { // wait for the new image to load before fading in
        img.style.opacity = 1;
      };
    }, 500); // delay should match the transition duration
  }






  

