let allUserInfo = [];

let regForm = document.querySelector(".reg-form");
let allInput = regForm.querySelectorAll("input");


if(localStorage.getItem("allUserInfo") != null){
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"));
}


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
        regForm.reset("");
        allUserInfo.push(data);
        localStorage.setItem("allUserInfo",JSON.stringify(allUserInfo));
        swal("Good Job !", "Registration Success", "success")
    }
    else{
        swal("Failed !","Email already Registered, Please login !" , "error" )
    }
   
}