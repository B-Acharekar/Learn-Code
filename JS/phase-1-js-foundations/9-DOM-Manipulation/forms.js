const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passInput.value;

  // 🔎 Basic validation
  if (!name || !email || !password) {
    return showError("All fields are required.");
  }

  if (!validateEmail(email)) {
    return showError("Invalid email format.");
  }

  if (password.length < 6) {
    return showError("Password must be at least 6 characters.");
  }

  // ✅ All good
  errorMsg.textContent = "";
  console.log("🎉 Form submitted:", { name, email, password });
  alert("Form submitted successfully!");
  form.reset();
});

function showError(message) {
  errorMsg.textContent = message;
}

function validateEmail(email) {
  // Basic email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
