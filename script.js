// pulling in all the dom element needed
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//  showing input error
function showError(input, message) {
    const formControl = input.parentElement;
    // console.log(formControl)
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small'); // update here 
    small.innerText = message;
}
// // showing input success 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// showing email validation
function validEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test (String(email).toLowerCase());
}

// adding the eventlistners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "username is required");

    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, "email is required");

    } else if(!validEmail(email.value)){
        showError(email, "email is not valid");

    }else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, "password is required");

    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, "password2 is required");

    } else {
        showSuccess(password2);
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
