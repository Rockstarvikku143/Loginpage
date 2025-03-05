document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login Successful!");
    } else {
        alert("Invalid credentials. Try again.");
    }
});