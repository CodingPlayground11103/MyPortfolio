const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about-content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .about-btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".skills-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".tools-card", {
  duration: 1000,
  interval: 500,
});
