document.getElementById("cvBtn").addEventListener("click", function() {
    alert("Want To Download!");
});
document.getElementById("submit").addEventListener("click", function() {
    let email=document.getElementById("email");
    let password=document.getElementById("pass");
    if(email.value=="" && password.value==""){
        alert("Fill Detail");
    }
    else
    {
        alert("Logged in");
    }
});

