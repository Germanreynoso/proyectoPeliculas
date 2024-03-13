// const axios = require("axios");
// const renderCards = require("./rendercards");

// axios.get("http://localhost:3001/movies")
//   .then(response => {
//     renderCards(response.data);
//   })
//   .catch(error => {
//     console.error("Error al obtener las películas:", error);
//   });
// function renderizarTarjetas(peliculas) {
//     const actividadesContainer = document.getElementById("actividades-container");
//     actividadesContainer.innerHTML = '';
// }
// index.js
const axios = require("axios");
const renderizarTarjetas = require("./rendercards"); // Asegúrate de que la ruta sea correcta

axios.get("http://localhost:3001/movies")
  .then(response => {
    renderizarTarjetas(response.data); // Pasa los datos de las películas a la función
  })
  .catch(error => {
    console.error("Error al obtener las películas:", error);
  });
