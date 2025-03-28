export let destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte),
    });
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    //se quito el if y se metio a una constante para reducir lineas, ya que son pocos los destinos
    const costosBase = { Paris: 500, Londres: 400, "New York": 600 };
    const costoTransporte = { Avión: 200, Tren: 100 };

    return (costosBase[destino] || 0) + (costoTransporte[transporte] || 0);
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    //se usa el forEach para actualizar
    destinos.forEach(({ destino, fecha, transporte, costo }) => {
        console.log(`📍 Destino: ${destino}\n📅 Fecha: ${fecha}\n🚆 Transporte: ${transporte}\n💰 Costo: $${costo}`);
        console.log("---------------------------");
    });
};
