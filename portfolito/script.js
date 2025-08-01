// 🌟 Contact Form Function
function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (name && email && message) {
      formMessage.textContent = "Thank you for contacting me, " + name + "!";
      formMessage.style.color = "green";
    } else {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    }
  
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  
  // 🌟 Animate the H1 title
  window.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("header h1");
    h1.classList.add("animate-h1");
  });
  