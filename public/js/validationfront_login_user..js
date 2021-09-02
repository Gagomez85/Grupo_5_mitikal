const form = document.querySelector("#login-form");

// los inputs

const inputEmail = form.querySelector("#email");
const inputPassword = form.querySelector("#password");

// los mensajes de error

const errorEmail = form.querySelector("#error-email");
const errorPassword = form.querySelector("#error-password");

const inputArray = [inputEmail, inputPassword];

const msgErrorsArray = [errorEmail, errorPassword];

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// resetea errores
function resetErrors() {
  msgErrorsArray.forEach((msg) => {
    msg.innerHTML = "";
  });
}

// valida el formulario
function validateForm(e) {
  let hasErrors = false;

  resetErrors();

  // Email
  if (!inputEmail.value || inputEmail.value.length < 3) {
    errorEmail.innerHTML = "Por favor escriba un mail !!!!";

    hasErrors = true;
  }

  // Password
  if (!inputPassword.value || inputPassword.value.length < 4) {
    errorPassword.innerHTML = "Por favor ingrese un password !!!!";

    hasErrors = true;
  }
}
inputArray.forEach((input) => {
  input.addEventListener("blur", (event) => validateForm(event));
});

form.addEventListener("submit", (event) => validateForm(event));
