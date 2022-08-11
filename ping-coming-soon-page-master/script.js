const btn = document.getElementById('btn');
const form = document.getElementById('form');
const emailEl = document.getElementById('email');

function validateEmail (e) {
    let valid = false;
    const email = emailEl.value.trim();
    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    if (!isEmailValid(email)) {
        alertEl = emailEl.nextElementSibling;
        alertEl.style.display = "block";
    } else {
        alertEl.style.display = "none";
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isEmailValid = validateEmail();

    let isFormValid = isEmailValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});

btn.addEventListener('click', function(e) {validateEmail(e);})