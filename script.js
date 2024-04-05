document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("Username: " + username + ", Password: " + password);
});

document.getElementById("forgotPassword").addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Forgot Password clicked");
});

document.getElementById("createAccount").addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Create Account clicked");
});
