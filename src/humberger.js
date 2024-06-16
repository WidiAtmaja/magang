// JavaScript to handle scroll event and toggle class
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollOffset = 50; // Adjust this value based on when you want the color to change
  if (window.scrollY > scrollOffset) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
