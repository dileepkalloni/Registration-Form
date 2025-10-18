const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function checkFormValidity() {
  if (validateName() && validateEmail() && validatePassword()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

nameInput.addEventListener('input', () => {
  validateName();
  checkFormValidity();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  checkFormValidity();
});

passwordInput.addEventListener('input', () => {
  validatePassword();
  checkFormValidity();
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Registration Successful!");
  this.reset();
  submitBtn.disabled = true;
});
