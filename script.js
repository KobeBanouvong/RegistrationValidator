const form  = document.getElementById('form');
const password1EL  = document.getElementById('password1');
const password2EL  = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

let MatchPasswords = false;

function validateForm(){
  isValid = form.checkValidity();
  if (!isValid){
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  if(password1EL.value === password2EL.value){
    MatchPasswords = true;
    password1EL.style.borderColor = 'green';
    password2EL.style.borderColor = 'green';
  }else{
    MatchPasswords = false;
    message.textContent = 'Make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1EL.style.borderColor = 'red';  
    password2EL.style.borderColor = 'red'; 
    return;
  }
  if(isValid && MatchPasswords){
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData(){
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value
  };
  console.log(user);
}

function processFormData(e){
  e.preventDefault();
  validateForm();
  if (isValid && MatchPasswords){
    storeFormData();
  }
}

//Event Listener
form.addEventListener('submit', processFormData);