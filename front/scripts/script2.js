// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Agregar un evento al botón de inicio
    var btnInicio = document.getElementById('btnInicio');

    if (btnInicio) {
        btnInicio.addEventListener('click', function () {
            // Redirige a la página de inicio (cambia 'index.html' si tu página de inicio tiene otro nombre)
            window.location.href = 'index.html';
        });
    }
});
