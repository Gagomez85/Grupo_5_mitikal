const form = document.querySelector("#form-create")

// los inputs
const inputName = form.querySelector('name')
const inputEmail = form.querySelector('email')
const inputTel = form.querySelector('tel')
const inputPassword1 = form.querySelector('password1')
const inputImage = form.querySelector('image')

// los mensajes de error
const errorName = form.querySelector('.error.name.msg')
const errorEmail = form.querySelector('.error.email.msg')
const errorTel = form.querySelector('.error.tel.msg')
const errorPassword1 = form.querySelector('.error.password1.msg')
const errorImage = form.querySelector('.error.image.msg')

const inputArray = [
  inputName,
  inputEmail,
  inputTel,
  inputPassword1,
  inputImage
]

const msgErrorsArray = [
  errorName,
  errorEmail,
  errorTel,
  errorPassword1,
  errorImage
]

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// resetea errores
function resetErrors() {
  msgErrorsArray.forEach((msg) => {
    msg.innerHTML = ""
  })
}

// valida el formulario
function validateForm(e) {
  let hasErrors = false

  resetErrors()

  // name
  if (!inputName.value) || inputName.value.length < 3) {
    hasErrors = true
    errorName.innerHTML = "Ingrese su nombre, por favor !!
    inputName.focus()
  }

  // Email
  if (!inputEmail.value) || inputEmail.value.length < 3) {
    errorEmail.innerHTML = "Por favor escriba un mail !!!!"

    if (!hasErrors) {
      inputEmail.focus()
    }

    hasErrors = true
  }

  // Telefono
  if (!isNumeric(!inputTel.value) {
    errorTel.innerHTML = "Por favor ingrese un numero de celular o fijo, gracias"

    if (!hasErrors) {
      inputTel.focus()
    }

    hasErrors = true
  }

  // Password1
  if (!inputPassword1.value) || inputPassword1.value.length > 4){
    errorPassword1.innerHTML = "Por favor ingrese un password !!!!"

    if (!hasErrors) {
      inputPassword1.focus()
    }

    hasErrors = true
  }

  // image
  if (!inputImage.value) {
    errorImage.innerHTML = "Por favor ingrese una imágen"

    if (!hasErrors) {
      inputImage.focus()
    }

    hasErrors = true
  }

  if (hasErrors) {
    e.preventDefault()
  }
}

inputArray.forEach(input => {
  input.addEventListener("blur", validateForm)
})

form.addEventListener("submit", validateForm)
