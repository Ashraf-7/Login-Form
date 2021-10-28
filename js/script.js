function changeColor(id) {
  document.body.style.backgroundColor = document.getElementById(id).innerHTML;
}

let usernameInput = document.querySelector("[name='username']");
let passwordInput = document.querySelector("[name='password']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let passwordValid = false;
  if(usernameInput.value !== "" && usernameInput.value.length <= 10) {
    userValid = true;
  }
  if(passwordInput.value !== "") {
    passwordValid = true;
  }

  if(userValid === false || passwordValid === false) {
    e.preventDefault();
  }
}