// Function smooth scroll 

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