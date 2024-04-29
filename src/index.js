const loginForm = document.getElementById('login-form')
const loginFields = document.querySelectorAll('.login-field')
const loginErrors = document.querySelectorAll('.login-error')
const registerForm = document.getElementById('register-form')
const registerFields = document.querySelectorAll('.register-field')
const registerErrors = document.querySelectorAll('.register-error')
const loginLink = document.getElementById('login-link')
const registrationLink = document.getElementById('register-link')

loginForm.addEventListener('submit', (event) => {
  if (loginFields[0].value.includes('@') == false) {
    loginErrors[0].innerText = 'E-mail inválido'
    loginErrors[0].style.color = 'rgba(255, 0, 0, 0.877'
    loginFields[0].style.borderBottomColor = 'rgba(255, 0, 0, 0.877)'

    event.preventDefault()
  }

  if (loginFields[1].value === '' || loginFields[1] == null || loginFields[1].value.length < 6 || loginFields[1].value.length > 20) {
    loginErrors[1].innerText = 'Mínimo 6 caracteres e máximo 20'
    loginErrors[1].style.color = 'rgba(255, 0, 0, 0.877'
    loginFields[1].style.borderBottomColor = 'rgba(255, 0, 0, 0.877)'
    event.preventDefault()
  }
})

registerForm.addEventListener('submit', (event) => {
  if (registerFields[0].value === '' || registerFields[0].value == null) {
    registerErrors[0].innerText = 'Preenchimento obrigatório'
    registerErrors[0].style.color = 'rgba(255, 0, 0, 0.877'
    registerFields[0].style.borderBottomColor = 'rgba(255, 0, 0, 0.877)'
    event.preventDefault()
  }

  if (registerFields[1].value.includes('@') == false) {
    registerErrors[1].innerText = 'E-mail inválido'
    registerErrors[1].style.color = 'rgba(255, 0, 0, 0.877'
    registerFields[1].style.borderBottomColor = 'rgba(255, 0, 0, 0.877)'
    event.preventDefault()
  }

  if (registerFields[2].value === '' || registerFields[2] == null || registerFields[2].value.length < 6 || registerFields[2].value.length > 20) {
    registerErrors[2].innerText = 'Mínimo 6 caracteres e máximo 20'
    registerErrors[2].style.color = 'rgba(255, 0, 0, 0.877'
    registerFields[2].style.borderBottomColor = 'rgba(255, 0, 0, 0.877)'
    event.preventDefault()
  }
})

registrationLink.addEventListener('click', function () {
  document.getElementById('login').style.display = 'none'
  document.getElementById('registration').style.display = 'block'
})

loginLink.addEventListener('click', function () {
  document.getElementById('registration').style.display = 'none'
  document.getElementById('login').style.display = 'block'
})

