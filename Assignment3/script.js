const form = document.getElementById("loginForm");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

email.addEventListener("input", () => {
  if (email.value === "") {
    resetField(email, emailError);
  } else if (email.checkValidity()) {
    setSuccess(email, emailError);
  } else {
    setError(email, emailError);
  }
});

password.addEventListener("input", () => {
  if (password.value === "") {
    resetField(password, passwordError);
  } else if (password.value.length >= 6) {
    setSuccess(password, passwordError);
  } else {
    setError(password, passwordError);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.checkValidity() && password.value.length >= 6) {
    alert("Login Successfully!");
  } else {
    email.dispatchEvent(new Event("input"));
    password.dispatchEvent(new Event("input"));
  }
});

function setSuccess(input, errorEl) {
  input.classList.remove("error");
  input.classList.add("success");
  errorEl.style.display = "none";
}

function setError(input, errorEl) {
  input.classList.add("error");
  input.classList.remove("success");
  errorEl.style.display = "block";
}

function resetField(input, errorEl) {
  input.classList.remove("error", "success");
  errorEl.style.display = "none";
}
