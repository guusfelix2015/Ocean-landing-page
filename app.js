const menuItens = document.querySelectorAll('#menu a[href^="#"]');
const ul = document.getElementById("menu");
const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

menuItens.forEach(item => {
  item.addEventListener("click", scrollToOnClick);
});

function scrollToOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const toItem = document.querySelector(id).offsetTop;

  window.scroll({
    top: toItem - 90,
    behavior: "smooth",
  });
}

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
}

function removeActiveToggleMenu(event) {
  if (event.type === "click") {
    nav.classList.remove("active");
  }
}

ul.addEventListener("click", removeActiveToggleMenu);
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
