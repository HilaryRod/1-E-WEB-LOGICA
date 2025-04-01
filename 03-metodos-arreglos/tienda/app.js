const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const container = document.querySelector(".container");

// Función para mostrar productos con precios menores a 100
const mostrarProductosMenor100 = () => {
    container.innerHTML = "";
    const menoresDe100 = productos.filter(pro => pro.precio < 100);
    menoresDe100.forEach(({ nombre, precio }) => {
        container.innerHTML += `<li>${nombre} - Precio: $${precio}</li>`;
    });
};

// Función para buscar productos por nombre
const buscarProducto = () => {
    const inputProducto = document.getElementById("inputProducto").value.trim().toLowerCase();
    console.log(inputProducto);
    if (!inputProducto) {
        alert("Debes escribir el nombre del producto que quieres buscar");
        return;
    }
    const productosEncontrados = productos.filter(({ nombre }) =>
        nombre.toLowerCase().includes(inputProducto)
    );

    document.getElementById("inputProducto").value = "";
    if (productosEncontrados.length > 0) {
        container.innerHTML = "";
        productosEncontrados.forEach(({ nombre, precio }) => {
            container.innerHTML += `<li>${nombre} - Precio: $${precio}</li>`;
           
        });
    } else {
        alert("Producto no encontrado")
    }
};

// Función para ordenar productos alfabéticamente por su nombre
const mostrarProductosOrdenados = () => {
    container.innerHTML = "";
    const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    productosOrdenados.forEach(({ nombre, precio }) => {
        container.innerHTML += `<li>${nombre} - Precio: $${precio}</li>`;
    });
};

// Función para mostrar solo los nombres de los productos
const mostrarNombres = () => {
    container.innerHTML = "";
    const nombres = productos.map(pro => pro.nombre);
    nombres.forEach(nombre => {
        container.innerHTML += `<li>${nombre}</li>`;
    });
};

// Función para mostrar los precios de los productos
const mostrarPrecio = () => {
    container.innerHTML = "";
    productos.forEach(({ precio }) => {
        container.innerHTML += `<p>$${precio}</p>`;
    });
};

// Función para mostrar todos los productos con su nombre y precio
const mostrarProductos = () => {
    container.innerHTML = "";
    productos.forEach(({ nombre, precio }) => {
        container.innerHTML += `<li>${nombre} - Precio: $${precio}</li>`;
    });
};

// Llamada a la función para mostrar los productos
mostrarProductos();
//filtrar por categoria

const filtrarPorCategoria = (categoria) => {
    // Filtrar los productos de la categoría seleccionada
    const productosCategoria = productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());

    // Limpiar el contenedor antes de agregar resultados
    container.innerHTML = "";

    // Si no se encuentran productos en la categoría, mostrar un mensaje
    if (productosCategoria.length === 0) {
        container.innerHTML = `<li>No hay productos en la categoría "${categoria}"</li>`;
        return;
    }

    // Mostrar los productos de la categoría
    productosCategoria.forEach(({ nombre, precio }) => {
        container.innerHTML += `<li>${nombre} - Precio: $${precio}</li>`;
    });

    // Usar `reduce` para calcular el precio total de los productos en esa categoría
    const precioTotal = productosCategoria.reduce((total, producto) => total + producto.precio, 0);

    // Mostrar el precio total de la categoría
    container.innerHTML += `<li><strong>Precio Total de la categoría "${categoria}": $${precioTotal}</strong></li>`;
};

// Función para manejar la búsqueda de categoría (esto se ejecutará cuando el usuario seleccione una categoría del select)
const buscarCategoria = () => {
    const categoriaSeleccionada = document.getElementById("categoriaSelect").value.trim();

    // Verifica si se ha seleccionado una categoría
    if (!categoriaSeleccionada) {
        alert("Debes seleccionar una categoría para buscar");
        return;
    }

    // Llamar a la función para filtrar por categoría
    filtrarPorCategoria(categoriaSeleccionada);
};