const form = document.querySelector("#register-form");

// los inputs
const inputName = form.querySelector("#name");
const inputEmail = form.querySelector("#email");
const inputTel = form.querySelector("#tel");
const inputPassword1 = form.querySelector("#password1");
const inputImage = form.querySelector("#file-upload");

// los mensajes de error
const errorName = form.querySelector("#error-name");
const errorEmail = form.querySelector("#error-email");
const errorTel = form.querySelector("#error-tel");
const errorPassword1 = form.querySelector("#error-password1");
const errorImage = form.querySelector("#error-image");

const inputArray = [
  inputName,
  inputEmail,
  inputTel,
  inputPassword1,
  inputImage,
];

const msgErrorsArray = [
  errorName,
  errorEmail,
  errorTel,
  errorPassword1,
  errorImage,
];

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

  // name
  if (!inputName.value) {
    errorName.innerHTML = "Ingrese su nombre, por favor !";

    hasErrors = true;
  }

  // Email
  if (!inputEmail.value || inputEmail.value.length < 3) {
    errorEmail.innerHTML = "Por favor escriba un mail !!!!";

    hasErrors = true;
  }

  // Telefono
  if (!isNumeric(Number(inputTel.value))) {
    errorTel.innerHTML =
      "Por favor ingrese un numero de celular o fijo, gracias";

    hasErrors = true;
  }

  // Password1
  if (!inputPassword1.value || inputPassword1.value.length < 4) {
    errorPassword1.innerHTML = "Por favor ingrese un password !!!!";

    hasErrors = true;
  }

  // image
  if (!inputImage.value) {
    errorImage.innerHTML = "Por favor ingrese una imágen";

    hasErrors = true;
  }
}
inputArray.forEach((input) => {
  input.addEventListener("blur", (event) => validateForm(event));
});

form.addEventListener("submit", (event) => validateForm(event));
