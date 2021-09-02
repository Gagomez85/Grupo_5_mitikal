const form = document.querySelector("#create-product");

// los inputs
const inputName = form.querySelector("#name");
const inputDescription = form.querySelector("#description");
const inputCategory = form.querySelector("#category");
const inputColor = form.querySelector("#color");
const inputSize = form.querySelector("#size");
const inputPrice = form.querySelector("#price");
const inputImage = form.querySelector("#image");

// los mensajes de error
const errorName = form.querySelector("#error-name");
const errorDescription = form.querySelector("#error-description");
const errorCategory = form.querySelector("#error-category");
const errorColor = form.querySelector("#error-color");
const errorSize = form.querySelector("#error-size");
const errorPrice = form.querySelector("#error-price");
const errorImage = form.querySelector("#error-image");

const inputArray = [
  inputName,
  inputDescription,
  inputCategory,
  inputColor,
  inputSize,
  inputPrice,
  inputImage,
];

const msgErrorsArray = [
  errorName,
  errorDescription,
  errorCategory,
  errorColor,
  errorSize,
  errorPrice,
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
    errorName.innerHTML = "Ingrese un nombre al producto, por favor !";

    hasErrors = true;
  }

  // Description
  if (!inputDescription.value || inputDescription.value.length < 3) {
    errorDescription.innerHTML =
      "Por favor ingrese una descripcion al producto.";

    hasErrors = true;
  }

  // Category
  if (!inputCategory.value || inputCategory.value.length < 3) {
    errorCategory.innerHTML = "Por favor ingrese una categoria al producto.";

    hasErrors = true;
  }

  // Color

  if (!inputColor.value || inputColor.value.length < 3) {
    errorColor.innerHTML = "Por favor ingrese un color al producto.";

    hasErrors = true;
  }

  // Size
  if (!inputSize.value || inputSize.value.length < 3) {
    errorSize.innerHTML = "Por favor ingrese un talle al producto.";

    hasErrors = true;
  }

  // Price
  if (!isNumeric(Number(inputPrice.value))) {
    errorPrice.innerHTML = "Por favor ingrese un precio al producto.";

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
