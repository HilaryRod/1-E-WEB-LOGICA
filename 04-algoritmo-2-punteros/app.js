//Algoritmo de los 2 punteros

//1. Encontrar la suma de un valor objetivo dentro de un array ordenado
/*function encontrarPar(arr, objetivo){

    let izquierda = 0
    let derecha = arr.length-1

    while(izquierda < derecha){
        let suma = arr[izquierda] + arr[derecha]
        if(suma == objetivo){
            return [ arr[izquierda], arr[derecha] ]
        }else if(suma < objetivo){
            izquierda++
        }else{
            derecha--
        }
    }

    return false
}

let arr = [15,7,11,2] 
let obj = 9

let result = encontrarPar(arr, obj)
console.log(result) 

2. Detectar si una palabra es palíndormo

function esPalindromo(arr) {
    
    let izq = 0
    let der = arr.length-1

    while(izq < der){
        if(arr[izq] !== arr[der]){
            return false
        }
        izq++
        der--
    }

    return true

}

 console.log( esPalindromo([1,2,3,4,3,2,1]) ) 
console.log( esPalindromo("computador") ) 
console.log( esPalindromo("aibofobia") )  */

//3. Encontrar usuarios duplicados en un array basado en el id del usuario
const listaInv = document.querySelector(".listaInv");
const inputNuevoInv = document.getElementById("nuevoInv");
const listaMesas=document.querySelector(".OrdenMesas");

const listaUsuarios = [
    { nombre: "Ana" },
    { nombre: "Carlos" },
    { nombre: "Carmen" },
    { nombre: "Daniel" },
    { nombre: "Elena" },
    { nombre: "Eduardo" },
    { nombre: "Fernando" }
];

const mostrarLista = () => {
    listaInv.innerHTML = ""; 
    listaUsuarios.forEach((usuario, index) => {
        listaInv.innerHTML += `<li>${index + 1}. ${usuario.nombre}</li>`;
    });
};

const AgregarInv = () => {
    const nuevoNombre = inputNuevoInv.value.trim();
    
    if (nuevoNombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Verificar si ya hay un invitado con ese nombre
    const yaExiste = listaUsuarios.some(usuario => usuario.nombre.toLowerCase() === nuevoNombre.toLowerCase());

    if (yaExiste) {
        alert("Este invitado ya está en la lista.");
    } else {
        listaUsuarios.push({ nombre: nuevoNombre });
        mostrarLista();
        mostrarParejas();
    }

    inputNuevoInv.value = ""; 
};
//agrupar con personas cuyo nombre inicia con la misma letra
const encontrarParParaCena = (usuarios) => {
    let grupos = {};  
    let parejas = [];

    // Agrupar personas por la primera letra de su nombre
    usuarios.forEach(usuario => {
        let inicial = usuario.nombre[0].toUpperCase();
        if (!grupos[inicial]) {
            grupos[inicial] = [];
        }
        grupos[inicial].push(usuario.nombre);
    });

    // Formar parejas de personas dentro de cada grupo
    Object.values(grupos).forEach(lista => {
        for (let i = 0; i < lista.length - 1; i += 2) {
            parejas.push([lista[i], lista[i + 1]]);
        }
    });

    return parejas.length > 0 ? parejas : false;
};
const mostrarParejas = () => {
    const parejas = encontrarParParaCena(listaUsuarios);
    listaMesas.innerHTML = "";

    if (parejas) {
        listaMesas.innerHTML = "<li><strong>Parejas para la cena:</strong></li>";
        parejas.forEach(par => {
            listaMesas.innerHTML += `<li>${par[0]} y ${par[1]}</li>`;
        });
    } else {
        listaMesas.innerHTML = "<li>No hay suficientes coincidencias para formar parejas.</li>";
    }
};

// Mostrar la lista 
mostrarLista();
mostrarParejas();
