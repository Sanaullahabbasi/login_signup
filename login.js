let loginBtn = document.getElementById("loginBtn");
let loginPass = document.getElementById("Password");
let showPassBtn = document.getElementById("show");
let bxIcon = document.querySelector(".bx");

const showPass = ()=>{
if(loginPass.type === "password"){
    loginPass.type = "text";
    console.log("password type changed");
    showPassBtn.classList.remove("bxs-hide");
    showPassBtn.classList.add("bxs-show");
}else{
    loginPass.type = "password";
    showPassBtn.classList.remove("bxs-show");
    showPassBtn.classList.add("bxs-hide");
}
    
}

showPassBtn && showPassBtn.addEventListener("click", showPass)

