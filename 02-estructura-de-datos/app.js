//crea arreglo vacio
const listaDeCompras=[];
//al implementar set no se agregara ningun producto repetido

//funcion para agregar producto y que no permite agregar duplicados
const agregarProducto = (producto) => {
    const existeProducto = listaDeCompras.some(item => item.nombre === producto.nombre);
    if (existeProducto) {
        console.log(`El producto "${producto.nombre}" ya existe en la lista.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto.nombre}" agregado con éxito.`);
    }
};
//funcion eliminar producto de la lista
/*const eliminarProducto= (nombreProducto) => {
    listaDeCompras.forEach((item) => {
        if (item.nombre === nombreProducto) {
            listaDeCompras.delete(item);
            console.log("Producto eliminado con exito")
            mostrarLista();
        } 
    } ) ;
};*/
// Función para eliminar producto de la lista
const eliminarProducto = (nombreProducto) => {
    const posicionEliminar = listaDeCompras.findIndex(item => item.nombre === nombreProducto);
    if (posicionEliminar !== -1) {
        listaDeCompras.splice(posicionEliminar, 1);
        console.log(`Producto "${nombreProducto}" eliminado con éxito.`);
        mostrarLista();
    } else {
        console.log(`El producto "${nombreProducto}" no se encuentra en la lista.`);
    }
};

/*const eliminarProducto=producto=>{
    let posicionEliminar=listaDeCompras.findIndex(producto)
    listaDeCompras(posicionEliminar)='undefined'
}
//funcion mostrar lista*/

const mostrarLista = () => {
    listaDeCompras.forEach( item => console.log(item) )
}

agregarProducto({
    nombre: "manzana",
    precio: 50,
    peso: 0.5,
    disponible: true
})
agregarProducto({
    nombre: "piña",
    precio: 50,
    peso: 0.5,
    disponible: true
})
agregarProducto({
    nombre: "piña",
    precio: 50,
    peso: 0.5,
    disponible: true
})

//eliminarProducto();

mostrarLista()
eliminarProducto("manzana");
