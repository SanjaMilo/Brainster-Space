
// SubHeader drops down on click on the Space-Blog anchor tag

let blogBtn1 =  document.querySelector('.blog-btn1');
let subHeader = document.querySelector('.header-2');
let blogBtn2 = document.querySelector('.blog-btn2');

let burgFiltBtn = document.querySelector('.navbar-menu-2');
let dropFiltMenu = document.querySelector('.header-2-drop');

function openSubheader() {
    if (subHeader.style.display === 'block') {
        subHeader.style.display = 'none';
    } else {
        subHeader.style.display = 'block';
    };
};

// blogBtn1.addEventListener('click', openSubheader);
blogBtn2.addEventListener('click', openSubheader);

// Burger menu for filter buttons on mobile devices 

function showDropFiltmenu() {
    if (dropFiltMenu.style.display === 'block') {
        dropFiltMenu.style.display = 'none';
    } else {
        dropFiltMenu.style.display = 'block';
    };
};

function onResizing() {
    let w = window.innerWidth;
    if (w > 768) {
        dropFiltMenu.style.display = 'none';
    };
    if (w < 769) {
        subHeader.style.display = 'none';
        blogBtn2.removeEventListener('click', openSubheader);
    };
    
};

burgFiltBtn.addEventListener('click', showDropFiltmenu);
window.addEventListener('resize', onResizing);


// Creating cards and filtering 

class Card {
    constructor (_id, _href, _img, _title, _text, _category) {
        this.id = _id;
        this.href = _href;
        this.img = _img;
        this.title = _title;
        this.text = _text;
        this.category = _category;
    }
};

let cardsRow = document.querySelector('.cards-row');
let buttonsFiltering = Array.from(document.querySelectorAll('.filter-btn'));

let arrAllCards = [];
let arrCareerCards = [];
let arrTechnoCards = [];
let arrDataSciCards = [];
let arrMarketingCards = [];
let arrDesignCards = [];
let arrImpactCards = [];

let cardCareer1 = new Card(1, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/web.jpg", "Deep Dive семинари кои ќе овозможуваат брз кариерен напредок", `Нов продукт од Brainster во Brainster Space. Интензивни дводневни
семинари кои ќе ти помогнат
од Mid level брзо да го постигнеш твојот Senior напредок.`, "КАРИЕРА");

let cardCareer2 = new Card(2, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/hand.jpg", "Ако не те бива за програмирање дали можеш да имаш кариера во Tech?", `Tech индустијата е најпосакувана област за работа, заради големата
побарувачка, секојдневните промени и поголемиот инкам.`, "КАРИЕРА");

arrAllCards.push(cardCareer1);
arrAllCards.push(cardCareer2);

arrCareerCards.push(cardCareer1);
arrCareerCards.push(cardCareer2);

let cardTechno1 = new Card(3, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/OFIS LEASURE.jpg", "Што значи денес, твојата канцеларија да е smart?", `На отворањето на Brainster Space, добивме супер подарок - smart home
уред. Голем дел од нас беа збунети за тоа што се' можеме да добиеме од него.`, "ТЕХНОЛОГИЈА");

arrAllCards.push(cardTechno1);

arrTechnoCards.push(cardTechno1);

let cardDataSci1 = new Card(4, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/Data Science.jpg", "Како до кариера во Data Science?", `Од искуството на студентите на нашата академија, решивме да ви
помогнеме со неколку tips за потребните skills за да започнете да работите Data Science.`, "DATA SCIENCE");

arrAllCards.push(cardDataSci1);

arrDataSciCards.push(cardDataSci1);

let cardMarketing1 = new Card(5, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/instruktori.jpg", "Интервју со Николај Ванчев, арт директор во Tank, Estonia.", `Николај Ванчев е Creative director во TANK (Естонија). Неговата успешна
12 годишна кариера како арт директор тој ја гради во реномирани агенции...`, "МАРКЕТИНГ");

arrAllCards.push(cardMarketing1);

arrMarketingCards.push(cardMarketing1);

let cardDesign1 = new Card(6, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg", `Зошто дизајн, накратко со Дијана Димитриевска<br>
#SpaceFamily`, `Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на
Академијата за графички дизајн во Brainster.`, "ДИЗАЈН");

let cardDesign2 = new Card(7, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/engineer.jpg", "Што е потребно за добар мобилен дизајн", `UX/UI дизајнерите се дигитални продукт дизајнери. Нивната задача е да
создадат корисен, релевантен и едноставен за корисниците продукт.`, "ДИЗАЈН");

arrAllCards.push(cardDesign1);
arrAllCards.push(cardDesign2);

arrDesignCards.push(cardDesign1);
arrDesignCards.push(cardDesign2);

let cardImpact1 = new Card(8, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/Team-Picture-1200x600.jpg", `Македонско-американска компанија Upshift доби инвестиција од 3,7
милиони...`, `Он-дименд платформата за работа се шири со нова рунда финансирање
предводена од Recruit која е најголемата HR Tech компанија во светот...`, "IMPACT");

let cardImpact2 = new Card(9, "https://brainster.co/", "./assets/images/Space_Blog_Kartici/20191128_141433810_iOS-1200x600.jpg", `Локалната апликација Challenger и нејзиниот имапакт.<br>
#SpaceFamily`, `Мисијата на Challenger е создавање на општествено одговорна заедница
која создава позитивна промена преку развивање на подобри индивидуални навики...`, "IMPACT");

arrAllCards.push(cardImpact1);
arrAllCards.push(cardImpact2);

arrImpactCards.push(cardImpact1);
arrImpactCards.push(cardImpact2);

function createCards(obj, container) {
    container.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
    <a href="${obj.href}" target="blank" class="a-card">
        <div class="card h-100">
            <img src="${obj.img}" class="card-img-top zoom-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${obj.title}</h5>
                <p class="card-text">${obj.text}</p>
            </div>
            <div class="card-footer">
                <button class="rounded-btn" type="button">${obj.category}</button>
                <button href="#" class="btn round-arrow">
                    <span><i class="fas fa-arrow-right"></i></span>
                </button>
            </div>
        </div>
    </a>
</div>`
};

// Filtering cards by category 

function filterCards(e) {
    cardsRow.innerHTML = "";
    if (e.currentTarget.innerText === "СИТЕ") {
        arrAllCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        }); 
    } else if (e.currentTarget.innerText === "КАРИЕРА") {
        arrCareerCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    } else if (e.currentTarget.innerText === "ТЕХНОЛОГИЈА") {
        arrTechnoCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    } else if (e.currentTarget.innerText === "DATA SCIENCE") {
        arrDataSciCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    } else if (e.currentTarget.innerText === "МАРКЕТИНГ") {
        arrMarketingCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    } else if (e.currentTarget.innerText === "ДИЗАЈН") {
        arrDesignCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    } else if (e.currentTarget.innerText === "IMPACT") {
        arrImpactCards.forEach(function(elem) {
            createCards(elem, cardsRow);
        });
    };
};

// Adding event listeners on filtering buttons and handler function filterCards
buttonsFiltering.forEach(function(btn) {
    btn.addEventListener('click', filterCards);
});

// Loading all cards on Page load
window.addEventListener('load', function() {
    arrAllCards.forEach(function(elem) {
        createCards(elem, cardsRow);
    });
});


