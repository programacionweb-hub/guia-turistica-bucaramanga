// climaScript.js
async function obtenerClima() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=7.1254&longitude=-73.1198&hourly=temperature_2m';
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // Accede a la primer temperatura horaria disponible
        const tempActual = datos.hourly.temperature_2m[0];
        document.getElementById('temperature').innerText = `Temperatura actual: ${tempActual} °C`;
    } catch (error) {
        document.getElementById('temperature').innerText = 'Error cargando clima.';
        console.error(error);
    }
}

obtenerClima();
