// CONSTANTES DECLARADAS

const navContainer = document.querySelector(".nav-container");
const ulContainer = document.querySelector(".ul-container");
const imgBurger = document.querySelector(".burger-container img");
const burgerButton = document.querySelector(".burger-container");

// función el cual oculta o muestra la barra de navegación
// Realizando nuestro "match media" o media query
const resMobile = matchMedia("(max-width: 670px)");
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
