// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});


// Set current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
