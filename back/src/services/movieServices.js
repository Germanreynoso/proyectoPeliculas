const Movie = require('../models/users');

// Define la función getAllMovies de forma asíncrona
const getAllMovies = async () => {
  try {
    // Utiliza el método find() del modelo Movie para obtener todas las películas
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw error;
  }
};

// Exporta la función getAllMovies para que esté disponible para otros módulos
module.exports = { getAllMovies };
