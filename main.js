let div_expore = document.querySelector(".div_expore");
let accueil_vue = document.querySelector(".accueil-vue");
let retour = document.querySelector(".retour");
let btn_right = document.querySelector(".btn-right");
let btn_left = document.querySelector(".btn-left");
let slides = document.querySelectorAll(".slide");
let inds = document.querySelectorAll(".ind");
let DivSlides = document.querySelector(".slider");
let indicateur = document.querySelector(".indicateur");
let main = document.querySelector("main");
let activeSlide = 0;
let activeSlideAnimate = 0;
let colorBg = ["#861411", "#0C722F", "#C58200"];

div_expore.addEventListener("click", () => {
  accueil_vue.className += " hidden";
  retour.classList.remove("hidden");
  btn_left.classList.remove("hidden");
  btn_right.classList.remove("hidden");
  DivSlides.classList.remove("hidden");
  div_expore.classList += " hidden";
  indicateur.classList.remove("hidden");
});
retour.addEventListener("click", () => {
  accueil_vue.classList.remove("hidden");
  btn_left.classList += " hidden";
  btn_right.classList += " hidden";
  div_expore.classList.remove("hidden");
  DivSlides.classList += " hidden";
  retour.classList += " hidden";
  indicateur.classList.add("hidden");
});

// Navigation du slide
btn_left.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  changeSlide();
});
btn_right.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  changeSlide();
});

function changeSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  inds.forEach((ind) => ind.classList.remove("active"));
  slides[activeSlide].className += " active";
  inds[activeSlide].className += " active";
  main.style.backgroundColor = `${colorBg[activeSlide]}`;
}
// Modifier le background
