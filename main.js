const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("primary-nav");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");


const toggleNavMobile = (e) => {
  navMenu.classList.toggle("nav-is-open");
  navMenu.classList.contains("nav-is-open")
  ? navBtn.setAttribute("aria-expanded", "true")
  : navBtn.setAttribute("aria-expanded", "false");

    if (navMenu.classList.contains("nav-is-open")) {
    iconHamburger.style.display = "none"
    iconClose.style.display = "block"
  } else {
    iconHamburger.style.display = "block"
    iconClose.style.display = "none"
  }
}

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleNavMobile();
});