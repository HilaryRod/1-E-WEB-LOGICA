
//reduce()
/* const precios = [2,5,6,8,1,12]

const suma = precios.reduce( (acum, element) => acum + element, 0 )

console.log(`Total:  &${suma}`) */

/* const sumas = precios.reduce( function () {

} ) */

//every 

/* const precios = [2,5,6,8,1,12]
const pares = precios.every( element => element % 2 === 0 )

console.log(pares) */

//includes()

/* const frutas = ['pera','piña','manzana','fresa']
const incluyeManzana = frutas.includes("manzana")

console.log(incluyeManzana) // true */

//some()
/* const precios = [2,5,6,8,1,12]
const pares = precios.some( element => element % 2 === 0 )

console.log(pares) */

//Array de objetos de películas

const peliculas = [
    {
        id: 0,
        nombre: "StarWars",
        clasificacion: "",
        generos: ["suspenso","romance","comedio","terror"],
        director: {
            nombre: "Pepe",
            lugarNacimiento: "",
            edad: "",
            hermanos: ["pepe2","maria","simon"]
        },
        imagen: ""
    },
    {
        id: 0,
        nombre: "StarWars",
        clasificacion: "",
        generos: ["suspenso","romance","comedio","terror"],
        director: {
            nombre: "Pepe",
            lugarNacimiento: "",
            edad: "",
            hermanos: ["pepe2","maria","simon"]
        }
    },
    {
        id: 0,
        nombre: "StarWars",
        clasificacion: "",
        generos: ["suspenso","romance","comedio","terror"],
        director: {
            nombre: "Pepe",
            lugarNacimiento: "",
            edad: "",
            hermanos: ["pepe2","maria","simon"]
        }
    }
]
console.log(peliculas[0].director.hermanos[1])