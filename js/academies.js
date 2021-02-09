// Creating cards for academies

let rowCards = document.querySelector('.r-cards');
let cardArray = [];

class Card {
    constructor (_href, _id, _title, _spot, _signup, _offer, _partners) {
        this.href = _href;
        this.id = _id;
        this.title = _title;
        this.spot = _spot;
        this.signup = _signup;
        this.offer = _offer;
        this.partners = _partners;
    }
};

let card1 = new Card(`"https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design"`, "first-img", "Академија за графички дизајн", 4, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

let card2 = new Card(`https://marketpreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=mkt`, "second-img", "Академија за дигитален маркетинг", 5, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

let card3 = new Card(`https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=frontend`, "third-img", `Академија за <br>Front - end програмирање`, 3, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

let card4 = new Card(`https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=fullstack`, "forth-img", `Академија за <br>Full - stack програмирање`, 4, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

let card5 = new Card(`https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science`, "fifth-img", "Академија за Data science", 6, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

let card6 = new Card(`https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa`, "sixth-img", "Академија за Software testing", 3, "26.08.2019", "Стани дизајнер за 7 месеци", 5);

cardArray.push(card1);
cardArray.push(card2);
cardArray.push(card3);
cardArray.push(card4);
cardArray.push(card5);
cardArray.push(card6);

function createCard(obj, container) {
    container.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <a href="${obj.href}" target="_blank" class="a-card">
        <div class="img-card" id="${obj.id}">
        </div>
        <div class="h-academy">
            <h2>${obj.title}</h2>
        </div>
        <div class="card-academy-content">
            <div class="icon-text">
                <i class="far fa-user"></i>
                <p>Слободни места: ${obj.spot}</p>
            </div>
            <div class="icon-text">
                <i class="far fa-calendar-alt"></i>
                <p>Уписи до ${obj.signup}</p>
            </div>
            <div class="icon-text">
                <i class="far fa-clock"></i>
                <p>${obj.offer}</p>
            </div>
            <div class="icon-text">
                <i class="far fa-handshake"></i>
                <p>Партнери за вработување: ${obj.partners}</p>
            </div>
            <div class="hidden">
                <p>Повеќе</p>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    </a>
</div>`
};

cardArray.forEach(function(elem) {
    createCard(elem, rowCards);
});




