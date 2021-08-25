const form = document.querySelector("#form-create")

// los inputs
const inputName = form.querySelector('#name')
const inputEmail = form.querySelector('#email')
const inputTel = form.querySelector('#tel')
const inputPassword1 = form.querySelector('#password1')
const inputImage = form.querySelector('#image')

// los mensajes de error
const errorName = form.querySelector('.msg-error')
const errorEmail = form.querySelector('.msg-error')
const errorTel = form.querySelector('.msg-error')
const errorPassword1 = form.querySelector('.msg-error')
const errorImage = form.querySelector('.msg-error')

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
  if (!inputName.value) {
    errorName.innerHTML = "Ingrese su nombre, por favor !"
    
    if (!hasErrors) {
      inputName.focus()
    }

    hasErrors = true
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
