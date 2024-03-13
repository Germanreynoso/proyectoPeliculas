const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/server");
const conDb = require('./src/config/conDb'); 
const express = require('express');
const mongoose = require('mongoose');
//const app = express();


// Llamar a la función de conexión a la base de datos
conDb()
  .then(() => {
    // Si la conexión es exitosa, iniciar el servidor de Express
    app.listen(3001, () => {
      console.log("Servidor escuchando en el puerto 3001");
    });
  })
  .catch((err) => {
    // Si hay un error en la conexión, mostrar un mensaje de error
    console.error("Error al conectar a la base de datos:", err);
  });
