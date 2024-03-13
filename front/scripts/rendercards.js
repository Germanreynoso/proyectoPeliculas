// const axios = require("axios");

// function renderizarTarjetas(peliculas) {
//     const actividadesContainer = document.getElementById("actividades-container");
//     actividadesContainer.innerHTML = '';

//     peliculas.forEach(movie => {
//         const card = document.createElement("div");
//         card.classList.add("cards");
//         const title = document.createElement("h4");
//         title.classList.add("title");
//         title.textContent = movie.title;
//         const image = document.createElement("img");
//         image.classList.add("logo");
//         image.src = movie.poster;
//         image.alt = movie.title + " Poster";
//         card.appendChild(title);
//         card.appendChild(image);
//         actividadesContainer.appendChild(card);
//     });
// }


// rendercards.js
function renderizarTarjetas(peliculas) {
  const actividadesContainer = document.getElementById("actividades-container");
  actividadesContainer.innerHTML = ''; // Limpia el contenedor antes de agregar las tarjetas

  peliculas.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("cards");
    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = movie.title;
    const image = document.createElement("img");
    image.classList.add("logo");
    image.src = movie.poster;
    image.alt = movie.title + " Poster";
    card.appendChild(title);
    card.appendChild(image);
    actividadesContainer.appendChild(card); // Agrega la tarjeta al contenedor
  });
}
