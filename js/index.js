/* All Global variable declarations */

let allUserInfo = [];

let regForm = document.querySelector(".reg-form");
let loginForm = document.querySelector(".login-from");
let allInput = regForm.querySelectorAll("input");
let allLoginInput = loginForm.querySelectorAll("input");
let regBtn = regForm.querySelector("button")
let loginBtn = loginForm.querySelector("button")

/* Getting data from local Storage */

if(localStorage.getItem("allUserInfo") != null){
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"));
}

console.log(allUserInfo);
/* Regsitration form coding */
regForm.onsubmit = (e) =>{
    e.preventDefault();
    let checkEmail = allUserInfo.find((data)=>{
        return data.email == allInput[3].value
    })
    if(checkEmail == undefined){
        let data = {};
        for(let el of allInput){
            let key = el.name
            data[key] = el.value
        }
        regBtn.innerText = "Processing";
        setTimeout(()=>{
            regForm.reset("");
            regBtn.innerText = "Register";
            allUserInfo.push(data);
            localStorage.setItem("allUserInfo",JSON.stringify(allUserInfo));
            swal("Good Job !", "Registration Success", "success");
        },2000)
        
    }
    else{
        swal("Failed !","Email already Registered, Please login !" , "error" )
    }
   
}

/* Login Form coding */
loginForm.onsubmit = (e) =>{
    e.preventDefault();
    if(allLoginInput[0].value != ""){
        if(allLoginInput[1].value != ""){
            /* check email in your database */
            let checkEmail = allUserInfo.find((data)=>{
                return data.email == allLoginInput[0].value
            });
            if(checkEmail != undefined){
                /* match Password */
                if(checkEmail.password == allLoginInput[1].value){
                    loginBtn.innerText = "Please Wait...";
                    setTimeout(()=>{
                        loginForm.reset("");
                        loginBtn.innerText = "Login";
                        window.location = "/profile/profile.html";
                        checkEmail.password = null
                        sessionStorage.setItem("__au__",JSON.stringify(checkEmail))
                    },2000)
                }
                else{
                    swal("Warning","Wrong Password","warning")
                }
            }
            else{
                swal("Warning","Wrong Email", "warning")
            }
        }
        else{
            swal("Warning","Password is empty", "warning")
        }
    }
    else{
        swal("Warning","Email is empty", "warning")
    }
}
