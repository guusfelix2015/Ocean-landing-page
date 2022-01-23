const menuItens = document.querySelectorAll(
  '.nav-container ul li a[href^="#"]'
);

menuItens.forEach(item => {
  item.addEventListener("click", scrollToOnClick);
});

function scrollToOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const toItem = document.querySelector(id).offsetTop;

  window.scroll({
    top: toItem - 50,
    behavior: "smooth",
  });
}
