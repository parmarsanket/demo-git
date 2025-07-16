document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Dummy check
  if (username === "admin" && password === "1234") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "Invalid username or password!";
  }
});
