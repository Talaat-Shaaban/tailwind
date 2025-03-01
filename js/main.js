const btn = document.querySelector("#btn");
const mobileMenu = document.querySelector("#mobile-menu");

btn.addEventListener("click",  () => {
  mobileMenu.classList.toggle("hidden");
});
