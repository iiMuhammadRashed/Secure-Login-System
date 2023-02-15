var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var usersData = [];

if (localStorage.getItem("UsersData") !== null) {
  usersData = JSON.parse(localStorage.getItem("UsersData"));
}

var nameValidate;
var usedNameValidate;
var emailValidate;
var usedEmailValidate;
var passwordValidate;

document.querySelector("#userName").addEventListener("input", function () {
  if (userNameValidate()) {
    nameValidate = true;
    document
      .querySelector(".registerSection .nameError p")
      .classList.replace("d-block", "d-none");
  } else {
    nameValidate = false;
    document
      .querySelector(".registerSection .nameError p")
      .classList.replace("d-none", "d-block");
  }
  if (usedName()) {
    usedNameValidate = false;
    document
      .querySelector(".registerSection .repeatNameError p")
      .classList.replace("d-none", "d-block");
  } else {
    usedNameValidate = true;
    document
      .querySelector(".registerSection .repeatNameError p")
      .classList.replace("d-block", "d-none");
  }
});
document.querySelector("#userEmail").addEventListener("input", function () {
  if (userEmailValidate()) {
    emailValidate = true;
    document
      .querySelector(".registerSection .emailError p")
      .classList.replace("d-block", "d-none");
  } else {
    emailValidate = false;
    document
      .querySelector(".registerSection .emailError p")
      .classList.replace("d-none", "d-block");
  }
  if (usedEmail()) {
    usedEmailValidate = false;
    document
      .querySelector(".registerSection .repeatEmailError p")
      .classList.replace("d-none", "d-block");
  } else {
    usedEmailValidate = true;
    document
      .querySelector(".registerSection .repeatEmailError p")
      .classList.replace("d-block", "d-none");
  }
});
document.querySelector("#userPassword").addEventListener("input", function () {
  if (userPasswordValidate()) {
    passwordValidate = true;
    document
      .querySelector(".registerSection .wrongPassword p")
      .classList.replace("d-block", "d-none");
  } else {
    passwordValidate = false;
    document
      .querySelector(".registerSection .wrongPassword p")
      .classList.replace("d-none", "d-block");
  }
});

document
  .querySelector(".registerSection #RegisterBtn")
  .addEventListener("click", function () {
    getUsersData();
  });

function getUsersData() {
  if (
    nameValidate &&
    usedNameValidate &&
    emailValidate &&
    usedEmailValidate &&
    passwordValidate
  ) {
    var userInfo = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    usersData.push(userInfo);
    localStorage.setItem("UsersData", JSON.stringify(usersData));
    document
      .querySelector(".registerSection")
      .classList.replace("d-block", "d-none");
    document.querySelector("#card").classList.replace("d-none", "d-block");
  }
}

function userNameValidate() {
  RegExp = /^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
  return RegExp.test(userName.value);
}
function usedName() {
  for (var i = 0; i < usersData.length; i++) {
    if (usersData[i].name == userName.value) {
      return usersData[i].name == userName.value;
    }
  }
}
function userEmailValidate() {
  RegExp =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return RegExp.test(userEmail.value);
}
function usedEmail() {
  for (var i = 0; i < usersData.length; i++) {
    if (usersData[i].email == userEmail.value) {
      return usersData[i].email == userEmail.value;
    }
  }
}
function userPasswordValidate() {
  RegExp = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  return RegExp.test(userPassword.value);
}
document
  .querySelector(".alreadyHaveAccount span")
  .addEventListener("click", function () {
    document
      .querySelector(".registerSection")
      .classList.replace("d-block", "d-none");
    document
      .querySelector(".loginSection")
      .classList.replace("d-none", "d-block");
  });
document
  .querySelector(".dontHaveAccount span")
  .addEventListener("click", function () {
    document
      .querySelector(".loginSection")
      .classList.replace("d-block", "d-none");
    document
      .querySelector(".registerSection")
      .classList.replace("d-none", "d-block");
  });
document.querySelector("#contBtn").addEventListener("click", function () {
  document.querySelector("#card").classList.replace("d-block", "d-none");
  document
    .querySelector(".loginSection")
    .classList.replace("d-none", "d-block");
});

var loginUserEmail = document.querySelector("#loginUserEmail");
var loginUserPassword = document.querySelector("#loginUserPassword");

document.querySelector("#loginBtn").addEventListener("click", function () {
  loginCheck();
});

var emailLoginCheck;
var passwordLoginCheck;

function loginCheck() {
  if (checkEmail()) {
    emailLoginCheck = true;
    document
      .querySelector(".loginSection .emailError p")
      .classList.replace("d-block", "d-none");
  } else {
    emailLoginCheck = false;
    document
      .querySelector(".loginSection .emailError p")
      .classList.replace("d-none", "d-block");
  }
  if (checkPassword()) {
    passwordLoginCheck = true;
    document
      .querySelector(".loginSection .wrongPassword p")
      .classList.replace("d-block", "d-none");
  } else {
    passwordLoginCheck = false;
    document
      .querySelector(".loginSection .wrongPassword p")
      .classList.replace("d-none", "d-block");
  }
  if (emailLoginCheck && passwordLoginCheck) {
    document
      .querySelector(".loginSection")
      .classList.replace("d-block", "d-none");
    document
      .querySelector(".welcomeMessage")
      .classList.replace("d-none", "d-flex");
      console.log(sessionStorage.getItem("UserName"));
    document.querySelector(
      ".welcomeCaption h1"
    ).innerHTML = `Welcome , ${sessionStorage.getItem("UserName")}`;
  }
}

function checkEmail() {
  for (var i = 0; i < usersData.length; i++) {
    if (usersData[i].email == loginUserEmail.value) {
      sessionStorage.setItem("UserName", usersData[i].name);
      console.log(usersData[i].email == loginUserEmail.value);
      return usersData[i].email == loginUserEmail.value;
    }
  }
}
function checkPassword() {
  for (var i = 0; i < usersData.length; i++) {
    if (usersData[i].password == loginUserPassword.value) {
      console.log(usersData[i].password == loginUserPassword.value);
      return usersData[i].password == loginUserPassword.value;
    }
  }
}
document.querySelector("#logoutBtn").addEventListener("click", function () {
  logoutButton();
});
function logoutButton() {
  document
    .querySelector(".welcomeMessage")
    .classList.replace("d-flex", "d-none");
  document
    .querySelector(".loginSection")
    .classList.replace("d-none", "d-block");
  sessionStorage.setItem("UserName", "");
}
