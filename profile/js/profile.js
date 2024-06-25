/* All global variable declaration */

let userInfo;
let user;
let allBookingData = [];
let navBrand = document.querySelector(".navbar-brand");
let logoutBtn = document.querySelector(".logout-btn");
let bookingForm = document.querySelector(".booking-from");
let allBInput = bookingForm.querySelectorAll("input");
let bTextarea = bookingForm.querySelector("textarea");
let bCloseBtn = document.querySelector(".b-modal-close-btn");



if(sessionStorage.getItem("__au__") == null){
    window.location = "../index.html"
}
userInfo = JSON.parse(sessionStorage.getItem("__au__"));
navBrand.innerHTML = userInfo.hotelName; 
user = userInfo.email.split("@")[0];
 

/* logout coding */

logoutBtn.onclick = () =>{
    logoutBtn.innerHTML = "Please wait";
    setTimeout(() => {
        logoutBtn.innerHTML = "Logout";
        sessionStorage.removeItem("__au__");
        window.location = "../index.html";
    }, 3000);
}

/* Start booking coding */

bookingForm.onsubmit = (e) =>{
    e.preventDefault();
    let data = {notice : bTextarea.value};
    for(let el of allBInput){
        key = el.name;
        data[key] = el.value;
    }
    allBookingData.push(data);
    localStorage.setItem(user+"_allBData",JSON.stringify(allBookingData));
    swal("Good Job","Booking Success","success")
    bookingForm.reset("");
    bCloseBtn.click();

}