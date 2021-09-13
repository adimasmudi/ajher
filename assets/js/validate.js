
////////////////////////////////////////////////////
// login form
const loginForm = document.querySelector(".login-form");
const emailLoginInput = document.querySelector(".email-login-input");
const passwordLoginInput = document.querySelector(".password-login-input");

// function loginForm validation
export const checkEmail = function(){
    const cek=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const hasil = cek.test(emailLoginInput.value);
    return hasil;
}

export const checkNull = function(formField){
    if(formField.value === ''){
        return false;
    }
    return true;
}

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(checkEmail() && checkNull(passwordLoginInput)){
        document.querySelector(".email-error").classList.add('hidden-error');
        document.querySelector(".password-error").classList.add('hidden-error');
        location.href = 'dashboard/dashboard.html';
    }
    if(!checkEmail()){
        document.querySelector(".email-error").classList.remove('hidden-error');
    }
    if(!checkNull(passwordLoginInput)){
        document.querySelector(".password-error").classList.remove('hidden-error');
    }
})



/////////////////////////////////////////////////////////////////
// signup form

// element selection
const selectCountry = document.querySelector(".select-country");
const phoneNumber = document.querySelector(".phone-number-input");

const nameSignUp = document.querySelector(".name-signup");
const emailSignUp = document.querySelector(".email-signup");
const passwordSignup = document.querySelector(".password-signup");
const passwordConfirmSignup = document.querySelector(".password-confirm-signup");

const dateSignup = document.querySelector(".date-input");

export const selectValidate = function(){
    if(selectCountry.value === 'Select your country'){
        return false;
    }
    return true;
}

export const phoneNumberValidate = () => checkNull(phoneNumber) ? true : false;

export const nameSignupValidate = () => checkNull(nameSignUp) ? true : false;
export const emailSignupValidate = () => {
    const cek=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const hasil = cek.test(emailSignUp.value);
    return hasil;
}
export const passwordSignupValidate = () => checkNull(passwordSignup) ? true : false;
export const passwordConfirmValidate = () => passwordSignup.value === passwordConfirmSignup.value ? true : false;

export const dateValidate = () => checkNull(dateSignup) ? true : false;
