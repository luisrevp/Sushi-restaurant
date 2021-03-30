let contImagenes = document.getElementsByClassName("img-container");
let texto = document.createElement("p");
let imagen = document.querySelectorAll(".imagen");

texto.innerHTML = "ORDENA YA!";
texto.style="position: absolute; color: #fff;top: 50%;bottom: 50%;left: 50%;right: 50%;z-index: 50;"
console.log(texto);
console.log(contImagenes);
console.log(imagen);

// contImagenes[0].insertBefore(texto, imagen[0]);
