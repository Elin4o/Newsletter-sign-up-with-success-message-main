const successDiv = document.querySelector('.success');
const signUpContainer = document.querySelector('.container');
const validationMessage = document.querySelector('.validation-message');
const emailAddress = document.querySelector('.email-address');

const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#button');
const dismissButton = document.querySelector('#dismiss-button');

submitButton.addEventListener('click', () => {
    ValidateEmail(emailInput.value);
    emailInput.value = "";
});

dismissButton.addEventListener('click', () => {
  signUpContainer.style = "display:flex";
  successDiv.style = "display:none";
});

function ValidateEmail(input){
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (input.match(validRegex)) {
      console.log(input)
      emailAddress.textContent = input;
      successDiv.style = "display:flex;"
      signUpContainer.style = "display:none";
    } 
    else if(input === ""){
        validationMessage.textContent = "Email is empty";
        validationMessage.style = "color:var(--color-primary)";
        emailInput.style = `
        background-color: hsla(4, 100%, 67%, 0.3);
        border:1px solid var(--color-primary);
        color:var(--color-charcoal-gray)`;
    }     
    else {
      validationMessage.textContent = "Valid email required";
      validationMessage.style = "color:var(--color-primary)";
      emailInput.style = `
        background-color: hsla(4, 100%, 67%, 0.3);
        border:1px solid var(--color-primary);
        color:var(--color-charcoal-gray)`;
    }
}