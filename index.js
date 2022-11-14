const form = document.getElementById('form'),
  password = document.querySelector('input[type="password"]'),
  confirm_password = document.querySelector('.confirm-password')

function check() {
  let message = document.querySelector('.message')
  if (password.value === confirm_password.value) {
    message.textContent = 'Password matched'
    message.style.color = 'green'
  } else {
    message.textContent = 'Password not matched'
    message.style.color = 'red'
  }
}

form.addEventListener('submit', (e) => e.preventDefault())
