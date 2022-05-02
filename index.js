
var usernameValue= document.getElementById("username").value;
var passwordValue= document.getElementById("password").value;
var submitbtn= document.getElementById("submit");

function validate(usernameValue,passwordValue) {
    if (usernameValue == "admin" && passwordValue == "123") {
        alert("Login successful");
    }
    else{
        alert("Login failed");
    }
}

submitbtn.addEventListener("click",validate());