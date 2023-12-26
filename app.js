const signup = () => {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("number");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let userNameError = document.getElementById("userNameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let passwordError = document.getElementById("passwordError");
  let cPasswordError = document.getElementById("cPasswordError");

  if (firstName.value === "") {
    firstNameError.innerHTML = `
  <p class="err">*first name is required</p>`;
  } else if (lastName.value === "") {
    lastNameError.innerHTML = `
  <p class="err">*last name is required</p>`;
  } else if (name.value === "") {
    userNameError.innerHTML = `
  <p class="err">*user name is required</p>`;
  } else if (email.value === "") {
    emailError.innerHTML = `
  <p class="err">*email is required</p>`;
  } else if (phoneNumber.value === "") {
    phoneError.innerHTML = `
  <p class="err">*Phone number is required</p>`;
  } else if (password.value === "" && confirmPassword.value === "") {
    passwordError.innerHTML = `
  <p class="err">*password is required</p>`;
    cPasswordError = `
  <p class="err">*password is required</p>`;
  } else if (password.value !== confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  } else {
    console.log("Registered")
//     Swal.fire({
//       icon: "success",
//       title: `registered sucessfully <br/> Thank You ${name.value.toUpperCase()}`,
//       showConfirmButton: false,
//       timer: 2000,
//     });
    
//     var obj = {
//       name: name.value,
//       email: email.value,
//       phoneNumber: phoneNumber.value,
//       password: password.value,
//       confirmPassword: confirmPassword.value,
//     };
    
//       userData.push(obj);
// console.log(userData)
 
//     localStorage.setItem("userData", JSON.stringify(userData));
//     setTimeout(() => {
//       window.location.href = "./blog.html";
//     }, 2000);
  }
}

let registrBtn = document.getElementById("registrBtn");
registrBtn && registrBtn.addEventListener("click", signup)

const checkPassword = ()=> {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var cPasswordError = document.getElementById("cPasswordError");
  if (password.value === confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="succes">*password matched</p>`;
  } else {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  }
}
let cPassword = document.getElementById("confirmPassword");
cPassword && cPassword.addEventListener("keyup", checkPassword)

function redirect() {
  window.location.href = "./index.html";
}
function logout() {
  setTimeout(redirect, 2000);
}

function login() {
  event.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var loginData = JSON.parse(localStorage.getItem("userData"));
  for (var i = 0; i < loginData.length; i++) {
    console.log(loginData[i].email);
    if (email.value !== loginData[i].email) {
      emailError.innerHTML = `
    <p class="err">*this email is not registered</p>`;
    } else if (password.value !== loginData[i].password) {
      passwordError.innerHTML = `
    <p class="err">*password is wrong</p>`;
    } else {
      setTimeout(() => {
        window.location.href = "./blog.html";
      }, 2000);
    }
  }
}
