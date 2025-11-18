// formScript.js
const formAgregarNegocio = document.getElementById('formAgregarNegocio');
const mensajeExito = document.getElementById('mensajeExito');

formAgregarNegocio.addEventListener('submit', function(e) {
    e.preventDefault();
    // Muestra mensaje de éxito
    mensajeExito.classList.remove('d-none');
    // Limpia inputs
    formAgregarNegocio.reset();
});
