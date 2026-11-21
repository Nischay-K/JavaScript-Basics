var nameError = document.querySelector("#name-error");
var phoneError = document.querySelector("#phone-error");
var emailError = document.querySelector("#email-error");
var messageError = document.querySelector("#message-error");
var submitError = document.querySelector("#submit-error");


function validateName(){
    var name = document.querySelector("#contact-name").value;
    if(name.length === 0){
        nameError.textContent = "*Name is Required!";
        return false;
    }
    if(!name.match(/^[A-Za-z ]*\s{1}[A-Za-z]*$/)){
        nameError.textContent = "*Write full name!";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.querySelector("#contact-phone").value;
    if(phone.length === 0){
        phoneError.textContent = "*Phone number is Required!";
        return false;
    }
    if(phone.length !== 10){
        phoneError.textContent = "*Phone number should be 10 digits!";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.textContent = "*Only digits please!";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail(){
    var email = document.querySelector("#contact-email").value;
    if(email.length === 0){
        emailError.textContent ="*Email is Required!";
        return false;
    }
    if(email.match( /^[A-Za-z]\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = "*Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.querySelector("#contact-message").value;
    var required = 50;
    var left = required - message.length;
    if(left > 0){
        messageError.textContent = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
   if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = "block";
    submitError.textContent = "*Please fill the form to submit!";
    setTimeout(function(){
        submitError.style.display = "none";
    },3000);
    return false;
   } 
}