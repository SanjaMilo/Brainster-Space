// Home page buttons in Section 2, Academies and For Companies 

let acadBtn = document.querySelector('.btn-edu-left');
let compBtn = document.querySelector('.btn-edu-right');

let pAcad = document.querySelector('p.academies');
let hAcad = document.querySelector('h2.academies');
let imgAcad = document.querySelector('img.academies');

let pComp = document.querySelector('p.companies');
let hComp = document.querySelector('h2.companies');
let imgComp = document.querySelector('img.companies');

function showCompanies() {
    pAcad.style.display = 'none';
    hAcad.style.display = 'none';
    imgAcad.style.display = 'none';
    pComp.style.display = 'block';
    hComp.style.display = 'block';
    imgComp.style.display = 'block';
}

function showAcademies() {
    pAcad.style.display = 'block';
    hAcad.style.display = 'block';
    imgAcad.style.display = 'block';
    pComp.style.display = 'none';
    hComp.style.display = 'none';
    imgComp.style.display = 'none';
}

acadBtn.addEventListener('click', showAcademies);
compBtn.addEventListener('click', showCompanies);

// Coworking button sold out message

let coW = document.querySelector('.btn-coo');

function soldOutMessage() {
    let soldBtn = document.querySelector('.rounded-btn');
    let pCoo = document.querySelector('.cooworking');
    let pMes = document.querySelector('.p-message');

    soldBtn.style.display = 'inline-block';
    pCoo.style.textDecoration = 'line-through';
    pMes.style.display = 'block';
}

coW.addEventListener('click', soldOutMessage);



class Card {
    constructor (_id, _href, _img, _title, _text) {
        this.id = _id;
        this.href = _href;
        this.img = _img;
        this.title = _title;
        this.text = _text;
    }
};

// Section 3 - Cards (three cards row)

let cardArray3 = [];

let card1 = new Card(1, "https://brainster.co/courses?type=course", "./assets/images/Nastani/IMG_7481A.jpg", "Codeworks", `Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да
научат што е ново во tech заедницата. Настан кој ги поврзува mid programerite со IT
компаниите. <br>
Deep Dive Intensive Seminar <br>
Екслузивни семинари кои комбинираат три различни техники на учење.`);

let card2 = new Card(2, "https://brainster.co/courses?type=deepdive", "./assets/images/Nastani/instruktori.jpg", "Deep Dive into Marketing", `Deep Dive into Marketing се серија од интензивни семинари кои се
наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени,
предизвици и идните трендови во областа на маркетингот.`);

let card3 = new Card(3, "https://brainster.co/courses?type=course", "./assets/images/Nastani/Hristijan-Nosecka-1024x536.jpg", "Deep Dive into Data Science", `Deep Dive into Data Science се серија од интензивни семинари кои се
наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени,
предизвици и идните трендови во областа на Data Science.`);

cardArray3.push(card1);
cardArray3.push(card2);
cardArray3.push(card3);

let rowCards3 = document.querySelector('.three-card-row');

function createCard(elem) {
 for (let i = 0; i < elem.length; i++) {
     rowCards3.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
     <a href="${elem[i].href}" target="_blank" class="a-card">
         <div class="card h-100">
             <img src="${elem[i].img}" class="card-img-top zoom-img" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${elem[i].title}</h5>
                 <p class="card-text">${elem[i].text}</p>
             </div>
             <div class="card-footer">
                 <button href="#" class="btn round-arrow"><span><i
                             class="fas fa-arrow-right"></i></span></button>
             </div>
         </div>
     </a>
 </div>`
 };

};

createCard(cardArray3);

// Section 1 - Cards (six cards row)

let cardArray4 = [];
let cardArray2 = [];

let card11 = new Card(1, "https://brainster.co/", "./assets/images/Za_Nas/edukacija1.jpg", "Едукација", `Научи практични вештини за трансформација во кариерата. Нашата
специјалност е да ти помогнеме да го најдеш правилниот skill set кој ке одговори на
реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани
обуки кои одговараат на реалните потреби на денешницата.`);

let card22 = new Card(2, "calendar.html", "./assets/images/Za_Nas/nastani.jpg", "Настани", `Специјално курирани и организирани настани кои ги поврзуваат правите
таленти со иновативните компании. Идеата е да нашата tech заедница расте, се инспирира и
креира преку овие настани.`);

let card33 = new Card(3, "https://partners.brainster.co/", "./assets/images/Za_Nas/coworking.jpg", "Coworking", `Биди дел од tech заедницата на иноватори, креативци и претприемачи.
Резервирај стоп во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе
одлучи секој месец со кого да ги дели своите канцеларии.`);

let card44 = new Card(4, "eventsspace.html", "./assets/images/Za_Nas/prostor za nastani.jpg", "Простор за настани", `Имаш идеја за обука или настан од tech областа? Ние имаме простор за
реализација Нашиот тим внимателно ги одбира и курира сите настани.`);

let card55 = new Card(5, `data-toggle="modal" data-target="#staticBackdrop"`, "./assets/images/Za_Nas/partnerstva so tech komp.jpg", "Партнерства со Tech Компании", `Целта и идеата е креирање на tech задница која ќе се негува, расте и
креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech
талентите со компаниите`);

let card66 = new Card(6, `data-toggle="modal" data-target="#staticBackdrop"`, "./assets/images/Za_Nas/IMG_7397.jpg", "Иновации за компании", `Нов концепт кој ќе им помогне на компаниите да преминат од стариот во
новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.`);

cardArray4.push(card11);
cardArray4.push(card22);
cardArray4.push(card33);
cardArray4.push(card44);

cardArray2.push(card55);
cardArray2.push(card66);


let rowCards6 = document.querySelector('.six-card-row');

function createFourCards(el) {
    for (let i = 0; i < el.length; i++) {
        rowCards6.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
        <a href="${el[i].href}" target="blank" class="a-card">
            <div class="card h-100">
                <img src="${el[i].img}" class="card-img-top zoom-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el[i].title}</h5>
                    <p class="card-text">${el[i].text}</p>
                </div>
                <div class="card-footer">
                    <button href="#" class="btn round-arrow"><span><i
                                class="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
        </a>
    </div>`
    }
};

createFourCards(cardArray4);

function createTwoCards(el) {
    for (let i = 0; i < el.length; i++) {
        rowCards6.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
        <a href="#" class="a-card" ${el[i].href}>
            <div class="card h-100">
                <img src="${el[i].img}" class="card-img-top zoom-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el[i].title}</h5>
                    <p class="card-text">${el[i].text}
                    </p>
                </div>
                <div class="card-footer">
                    <button href="#" class="btn round-arrow"><span><i
                                class="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
        </a>
    </div>`
    }
};

createTwoCards(cardArray2);

























