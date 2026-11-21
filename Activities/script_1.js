let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailGroup = email.parentElement;
  let passwordGroup = password.parentElement;

  emailGroup.classList.remove("error", "success");
  passwordGroup.classList.remove("error", "success");

  // Select small elements inside the respective group
  let emailError = emailGroup.querySelector("small");
  let passwordError = passwordGroup.querySelector("small");

  emailError.textContent = "";
  passwordError.textContent = "";
  document.querySelector("#resultMessage").textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let isValid = true;

  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Email field is incorrect!";
    emailGroup.classList.add("error");
    isValid = false;
  } else {
    emailGroup.classList.add("success");
  }

  if (!passwordRegex.test(password.value)) {
    passwordError.textContent = "Password field is incorrect!";
    passwordGroup.classList.add("error");
    isValid = false;
  } else {
    passwordGroup.classList.add("success");
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is correct! Good luck 🚀";
  }
});
