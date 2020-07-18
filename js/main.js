
// Burger menu 

let burgBtn = document.querySelector('.navbar-menu');
let dropMenu = document.querySelector('.drop-header');

function showDropmenu() {
    if (dropMenu.style.display === 'block') {
        dropMenu.style.display = 'none';
    } else {
        dropMenu.style.display = 'block';
    };
};

function onResizing() {
    let w = window.innerWidth;
    if (w > 992) {
        dropMenu.style.display = 'none';
    };
};

function onLoad() {
    dropMenu.style.display = 'none';    
};

burgBtn.addEventListener('click', showDropmenu);
window.addEventListener('resize', onResizing);
window.addEventListener('load', onLoad);

// Modal Form validation messages 

let sendBtn = document.querySelector('.send-btn');
let inpName = document.querySelector('.i-name');
let inpEmail = document.querySelector('.i-email');
let inpPhone = document.querySelector('.i-phone');
let sMessage = document.querySelectorAll('small');
let offBtn = document.querySelector('.off-btn');


function validateForm() {

    if (inpName.value == "" || inpName.value == null) {
        sMessage[0].innerHTML = `<span><i class="fas fa-pen"></i> Внесете Име и Презиме</span>`;
    }

    if (inpEmail.value.indexOf('@') == -1 || inpEmail.value == "" || inpEmail.value == null) {
        sMessage[1].innerHTML = `<span><i class="fas fa-pen"></i> Внесете Имеил Адреса</span>`;
    }

    if (inpPhone.value == "" || parseInt(inpPhone.value.length) < 9 || inpPhone.value == null) {
        sMessage[2].innerHTML = `<span><i class="fas fa-pen"></i> Внесете Телефонски Број</span>`;
    }

};

function inputNameValidate() {
    if (inpName.value) {
        sMessage[0].innerHTML = "";
    }
};

function inputEmailValidate() {
    if (inpEmail.value) {
        sMessage[1].innerHTML = "";
    }
};

function inputPhoneValidate() {
    if (inpPhone.value) {
        sMessage[2].innerHTML = "";
    }
};


function resetForm() {
    inpName.value = '';
    inpEmail.value = '';
    inpPhone.value = '';
    sMessage[0].innerHTML = "";
    sMessage[1].innerHTML = "";
    sMessage[2].innerHTML = "";
};

sendBtn.addEventListener('click', validateForm);
inpName.addEventListener('keyup', inputNameValidate);
inpEmail.addEventListener('keyup', inputEmailValidate);
inpPhone.addEventListener('keyup', inputPhoneValidate);
offBtn.addEventListener('reset', resetForm);



