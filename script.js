const btn = document.getElementById("notifyBtn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    msg.style.color = "orange";
    msg.textContent = "Please enter your email.";
    return;
  }

  if (!regex.test(email)) {
    msg.style.color = "red";
    msg.textContent = "Invalid email format.";
    return;
  }

  msg.style.color = "#c8a951";
  msg.textContent = "Thank you! You will be notified at launch.";
  document.getElementById("email").value = "";
});
