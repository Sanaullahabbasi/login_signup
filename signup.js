let signupBtn = document.getElementById("signupBtn");
let regEmail = document.getElementById("regEmail");
let regPassword = document.getElementById("regPassword");
let regConPass = document.getElementById("regConPass");
let showRegPass = document.getElementById("showPass");
let  = document.getElementById("showConfirm");
let bxIcon = document.querySelector(".bx");

const showAllPass = ()=>{
if(regPassword.type === "password"){
    regPassword.type = "text";
    regConPass.type = "text";
    console.log("password type changed");
    showRegPass.classList.remove("bxs-hide");
    showRegPass.classList.add("bxs-show");
    showConfirm.classList.remove("bxs-hide");
    showConfirm.classList.add("bxs-show");
}else{
    regPassword.type = "password";
    regConPass.type = "password";
    showRegPass.classList.remove("bxs-show");
    showRegPass.classList.add("bxs-hide");
    showConfirm.classList.remove("bxs-show");
    showConfirm.classList.add("bxs-hide");
}
    
}

showRegPass && showRegPass.addEventListener("click", showAllPass) || 
showConfirm && showConfirm.addEventListener("click", showAllPass)

