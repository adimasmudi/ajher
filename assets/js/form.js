import * as Validate from './validate.js';
// modal login and signup toggle


// select element
const selectCountry = document.querySelector('.select-country');
const optionSelect = document.querySelector('.option-select');
const valuePhone = document.querySelector('.value-phone');

// fetch from API
const getCountry = async function(){
    const res = await fetch("https://restcountries.com/v3/all" );
    const country = res.json();
    return country;
}

// put to select option
getCountry().then(a => {
    let html = ``;
    const countryList = a.map(c => c.name.common).sort();
    countryList.forEach(function(dat){
        html+=`<option value="${dat}">${dat}</option>`;
    });
    optionSelect.insertAdjacentHTML('afterend',html);
});

// change value phone calling codes
selectCountry.addEventListener('change',function(){
    getCountry().then(a => {
        const c = a.filter(b => b.name.common == selectCountry.value);
        // valuePhone.value = `+${c[0].callingCodes[0]}`;
        valuePhone.value = c[0].idd.root+c[0].idd.suffixes.join('');
    });
});

// login and signup toggle
const loginBox = document.querySelector('.login');
const signupBox = document.querySelector('.sign-up');

const loginToggleBtn = document.querySelector('.btn-login');
const signupToggleBtn = document.querySelector('.btn-signup');
const signupToggleText = document.querySelector('.text-signup');

const toggleBtnFunc = function (btn1, btn2, box1, box2) {
    btn1.classList.remove('btn-secondary');
    btn1.classList.add('btn-active');

    btn2.classList.add('btn-secondary');
    btn2.classList.remove('btn-active');

    box1.classList.remove('hidden');
    box2.classList.add('hidden');
};

loginToggleBtn.addEventListener('click', function () {
    toggleBtnFunc(loginToggleBtn, signupToggleBtn, loginBox, signupBox);
});

signupToggleBtn.addEventListener('click', function () {
    toggleBtnFunc(signupToggleBtn, loginToggleBtn, signupBox, loginBox);
});

signupToggleText.addEventListener('click', function () {
    toggleBtnFunc(signupToggleBtn, loginToggleBtn, signupBox, loginBox);
});
// signup modal
// selecting the elements
const form1 = document.querySelector('.signup-page-1');
const form2 = document.querySelector('.signup-page-2');
const form3 = document.querySelector('.signup-page-3');
const form4 = document.querySelector('.signup-page-4');

// selecting the buttons
// button next
const btnNext1 = document.querySelector('.to-next-page-1');
const btnNext2 = document.querySelector('.to-next-page-2');
const btnNext3 = document.querySelector('.to-next-page-3');

// button prev
const btnPrev2 = document.querySelector('.to-prev-page-2');
const btnPrev3 = document.querySelector('.to-prev-page-3');
const btnPrev4 = document.querySelector('.to-prev-page-4');

// progress signup
const progressSignup = document.querySelector('.progress-signup');

// step by step login-signup function
const stepFunction = function (form1, form2, value1, value2, width, classSelector,back=false) {
    form1.style.left = `${value1}px`;
    form2.style.left = `${value2}px`;
    form1.style.transition = '1s';
    form2.style.transition = '1s';
    progressSignup.style.width = `${width}%`;
    
    if(!back){
        setTimeout(function(){
            document.querySelector(classSelector).classList.remove('bg-secondary');
            document.querySelector(classSelector).classList.add('bg-primary');
        },1000);
    }else{
        document.querySelector(classSelector).classList.remove('bg-primary');
        document.querySelector(classSelector).classList.add('bg-secondary');
    }
    
};
let back;

const toggleError = function(func,className){
    
    if(!func){
        document.querySelector(className).classList.remove('hidden-error');
    }else{
        document.querySelector(className).classList.add('hidden-error');
    }
}
btnNext1.addEventListener('click', function (e) {
    if(Validate.selectValidate() && Validate.phoneNumberValidate()){
        stepFunction(form1, form2, -800, 0, 31, '.circle-2');
    }
    toggleError(Validate.selectValidate(),".select-error");
    toggleError(Validate.phoneNumberValidate(),".phone-number-error")

});

btnNext2.addEventListener('click', function () {
    
    if(Validate.nameSignupValidate() && Validate.emailSignupValidate() && Validate.passwordSignupValidate && Validate.passwordConfirmValidate()){
        stepFunction(form2, form3, -800, 0, 61, '.circle-3');
    }
    
    toggleError(Validate.nameSignupValidate(),".name-error");
    toggleError(Validate.emailSignupValidate(),".email-signup-error");
    toggleError(Validate.passwordSignupValidate(),'.password-signup-error');
    toggleError(Validate.passwordConfirmValidate(),'.password-confirm-error');
   
});

btnNext3.addEventListener('click', function () {
    
    if(Validate.dateValidate()){
        stepFunction(form3, form4, -800, 0, 91.5, '.circle-4');
    }
    toggleError(Validate.dateValidate(),".date-error");

    
    
});

btnPrev2.addEventListener('click', function () {
    stepFunction(form1, form2, 0, 800, 0, '.circle-2',back=true);
});

btnPrev3.addEventListener('click', function () {
    stepFunction(form2, form3, 0, 800, 31, '.circle-3',back=true);
});

btnPrev4.addEventListener('click', function () {
    stepFunction(form3, form4, 0, 800, 61, '.circle-4',back=true);
});

form4.addEventListener('submit',function(e){
    e.preventDefault();
    location.href = 'dashboard/dashboard.html';
})

