// seleccionando el NAV. Creando el media query
const navContainer = document.querySelector(".nav-container");
const ulContainer = document.querySelector(".ul-container");
const resMobile = matchMedia("(max-width: 670px)");
// funcion
const displayNav = (mql) => {
  mql.matches
    ? (ulContainer.style.display = "none")
    : (ulContainer.style.display = "flex") &&
      imgBurger.setAttribute("src", "./media/Hamburger.svg");
};
// agregando el evento
resMobile.addListener(displayNav);
// llamando la función al iniciar la página
displayNav(resMobile);

//
//
//
//
//
//
//
//
//

// burger button

const burgerButton = document.querySelector(".burger-container");
const imgBurger = document.querySelector(".burger-container img");

console.log(imgBurger);
console.log(burgerButton);
const showNav = () => {
  ulContainer.style.display == "none"
    ? (ulContainer.style = "display:flex") &&
      imgBurger.setAttribute("src", "./media/cross.svg")
    : (ulContainer.style.display = "none") &&
      imgBurger.setAttribute("src", "./media/Hamburger.svg");
};
burgerButton.addEventListener("click", showNav);

//
//
//
//
//
//
//
//
//

const imgContainer = document.querySelectorAll(".img-container");
console.log(imgContainer);
const newCont = imgContainer.forEach((container) => {
  console.log(container);
});
