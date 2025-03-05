document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Account Created Successfully!");
        document.getElementById("signup-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});