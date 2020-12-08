// Function smooth scroll on button "Букирај не" click

let btnScroll = document.querySelector('.btn-eve');
let target= document.getElementById('host');
let root = document.documentElement;

function scrollDown() {
    let distance = target.offsetTop;
    root.scrollTo({
        top: distance,
        behavior: "smooth"
    });
};

btnScroll.addEventListener('click', scrollDown);

// Opening Modal for viewing large image 

let modalImg = document.getElementById("modalImage");
let enlargedImg = document.getElementById("imgShow");
let captionText = document.getElementById("caption");
let closeX = document.querySelector(".close-x");

let imagesOpeningModals = Array.from(document.querySelectorAll(".img-open-modal"));

// Handler functions (callbacks)

function openModalImage() {
    modalImg.style.display = "block";
    enlargedImg.src = this.src;
    captionText.innerHTML = this.alt;
}


function closeModalImage() {
    modalImg.style.display = "none";
}

// Event listeners 
imagesOpeningModals.forEach(imag => {imag.addEventListener("click", openModalImage)});
closeX.addEventListener("click", closeModalImage);
