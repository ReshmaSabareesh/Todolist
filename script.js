function validate(callback){
    let userid = document.getElementById("userid");
    let password = document.getElementById("password");
     if(userid.value != '' && password.value != '')
     {
        if (userid.value == "admin"){
            if(password.value == "12345"){
                alert("login credentials are valid");
                return true;
                callback();
            }
            else{
                alert("password is invalid");
                return false;
            }
        }
        else{
            alert("Email is invalid");
            return false;
        }
     }
     else{
         alert("please Enter valid Email-id & Password");
         return false;
    }

}

function callback() {
    
    window.location.href = "./todolist.html";
   

}

 