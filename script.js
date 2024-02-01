"use-strict";

const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirm-pass");
const message = document.querySelector(".message");

const validate_password = function () {
  if (password.value == confirmPassword.value) {
    message.innerText = "*Matching";
    password.classList.add("match");
    confirmPassword.classList.add("match");
  } else {
    message.innerText = "*Not Matching";
    password.classList.add("error");
    confirmPassword.classList.add("error");
  }
};
