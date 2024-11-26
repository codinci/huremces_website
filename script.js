// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".client-slide");
const totalSlides = slides.length;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  const offset = -index * slideWidth;
  document.querySelector(
    ".client-slider"
  ).style.transform = `translateX(${offset}px)`;
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
  showSlide(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

window.addEventListener("resize", () => {
  showSlide(currentIndex); // Adjust the position on window resize
});


// Set current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
