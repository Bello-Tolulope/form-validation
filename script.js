// pulling in all the dom element needed
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = input.nextElementSibling; // update here 
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// adding the eventlistners
form.addEventListener(submit, function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "username is required");

    } else {
        showSuccess(username);
    }
});












// // showing input error
// function showError(input,_message){ 

//     const formControl =input.parentElement;
// }
// 
newFunction();

function newFunction() {
    
}
