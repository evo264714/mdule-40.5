//* Step-1: Add click event handler with the submit button
addEventListener('click', function(){
    //* Step-2: get the email address inside of the email input field. Always remember to use .value to get text from an input field

const emailField = document.getElementById('user-email');
const email = emailField.value;
//* Step-3: Get password
//* A. Set an ID on the HTML element
//* B. Get the element
//* C. Get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

//! DO NOT VERIFY email password on the client side
//* Step-4: Varify email and password and check whether valid or invalid user
if(email === 'bank@bb.com' && password === 'secret'){
    console.log('Valid User');
}
else{
    alert('Invalid User');
}

});