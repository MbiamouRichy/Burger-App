let div_expore = document.querySelector(".div_expore");
let accueil_vue = document.querySelector(".accueil-vue");
let retour = document.querySelector(".retour");
let btn_right = document.querySelector(".btn-right");
let btn_left = document.querySelector(".btn-left");

div_expore.addEventListener("click", () => {
  accueil_vue.className += " hidden";
  retour.classList.remove("hidden");
  div_expore.classList.add("hidden");
  btn_left.classList.remove("hidden");
  btn_right.classList.remove("hidden");
});
retour.addEventListener("click", () => {
  accueil_vue.classList.remove("hidden");
  retour.classList.add("hidden");
  btn_left.classList.add("hidden");
  btn_right.classList.add("hidden");
  div_expore.classList.remove("hidden");
});
