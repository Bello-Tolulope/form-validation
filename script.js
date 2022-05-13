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

// checking required fields
function checkRequired(emailValid){
    emailValid.forEach(function(input){
        if (input.value.trim() ===""){
            showError(input,`${getFieldName(input)} is required`);

        } else{
            showSuccess(input);
        }
        
    });
}
//get fieldName

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// showing email validation

function validEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test (String(email).toLowerCase());
}

// adding the eventlistners

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
});












