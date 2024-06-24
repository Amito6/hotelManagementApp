/* All global variable declaration */

let userInfo;
let navBrand = document.querySelector(".navbar-brand");
let logoutBtn = document.querySelector(".logout-btn");



if(sessionStorage.getItem("__au__") == null){
    window.location = "../index.html"
}
userInfo = JSON.parse(sessionStorage.getItem("__au__"));
console.log(userInfo)
navBrand.innerHTML = userInfo.hotelName;
 

/* logout coding */

logoutBtn.onclick = () =>{
    logoutBtn.innerHTML = "Please wait";
    setTimeout(() => {
        logoutBtn.innerHTML = "Logout";
        sessionStorage.removeItem("__au__");
        window.location = "../index.html";
    }, 3000);
}