//Móudlo fs (file system / sistema de archivos)
/* 
- leer
- modificar
- copiar
- eliminar
- renombrar
*/

//Ej.  fs.rename()   ->  fs.renameSync()

//Modo sync o síncrono

//Importando el módulo fs
const fs = require("fs")

// 📝 Para leer archivos
//1. ruta del archivo a leer
//2. set de caracteres
//3. función que se ejecuta después de resolver el llamado 
const archivo = fs.readFileSync("index.html", "utf-8")
console.log(archivo)
console.log("después del readFile")

// 📝 Para renombrar archivos
//1. ubicación del archivo a renombrar
//2. Nuevo nombre del archivo
//3. función para capturar el error
fs.renameSync("index.html","vista.html")
console.log("después del rename")

// 📝 Agregar información al final del archivo
//1. ubicación
//2. contenido a añadir
//3. función que captura el error
fs.appendFileSync("vista.html","<h1>NODEJS</h1>")
console.log("después del appendFile")

// 📝 Reemplazar todo el contenido del archivo

fs.writeFileSync("vista.html","El velóz murciélago hindú") 
console.log("después del writeFile")

// 📝 Eliminar un archivo
fs.unlinkSync("vista.html")
console.log("después del unlink")