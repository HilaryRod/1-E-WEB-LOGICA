import { registrarDestino, mostrarItinerario } from "./ModuloDestino.js";

// Función para iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
