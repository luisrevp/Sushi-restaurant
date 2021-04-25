// Creando enlaces para la galería

const getImages = document.querySelectorAll(".img-container");
const getIMG = document.querySelectorAll(".img-container > img");

getImages.forEach((imgCont, ind) => {
  let newEl = document.createElement("a");
  newEl.setAttribute("href", "#");
  newEl.textContent = "¡Pide acá!";
  newEl.style = `position: absolute; 
    display: block;
    opacity: 0;
    transition: opacity 0.5s; 
    color: #fff; 
    z-index: 10000;
    text-decoration: none;
    font-size: 2em;
    padding: 10px;
    background: rgba(100, 100, 100, 0.5);
    `;

  imgCont.insertBefore(newEl, getIMG[ind]);

  imgCont.addEventListener("mouseover", () => (newEl.style.opacity = "1"));
  imgCont.addEventListener("mouseout", () => (newEl.style.opacity = "0"));
});
