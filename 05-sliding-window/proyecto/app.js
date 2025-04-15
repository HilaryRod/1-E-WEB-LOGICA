let palabras = []; // Almacena las palabras del texto

const buscar = () => {
  // Reiniciar variables en cada ejecución
  let longitudMax = 0;
  let palabrasMasLargas = [];

  // Limpiar resultado anterior
  document.getElementById('palabra').innerText = '';

  // Obtener el texto ingresado
  const texto = document.getElementById('text').value.trim();
  palabras = texto.split(/\s+/); // separa por cualquier cantidad de espacios
  console.log("Palabras:", palabras);//corrobora que si separo bien

  // Aplicando Sliding Window: usamos dos punteros (inicio, fin) para recorrer el array
  for (let i = 0; i< palabras.length; i++) {
    const palabraActual = palabras[i];

    if (palabraActual.length > longitudMax) {
      // Si encontramos una palabra más larga, reiniciamos el array
      longitudMax = palabraActual.length;
      palabrasMasLargas = [palabraActual];
    } else if (palabraActual.length === longitudMax) {
      // Si tiene la misma longitud, la añadimos
      palabrasMasLargas.push(palabraActual);
    }
  }

  // Quitar duplicados si existieran
  const unicas = [...new Set(palabrasMasLargas)];

  // Mostrar resultado
  document.getElementById('palabra').innerText =
    `La(s) palabra(s) más larga(s) es/son: ${unicas.join(', ')} con una longitud de: ${longitudMax}`;
}
