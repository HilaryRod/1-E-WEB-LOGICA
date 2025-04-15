//Modulo fs(File System/sistema de archivos)
/*
-leer
-modificar
-copiar
-eliminar
-renombrar
*/
//Ej . fs.rename() -> fs.renameSync()

//importando el modulo fs
const fs=require("fs")

//PARA LEER ARCHIVOS
//parametros 1. ruta del archivo  2. set de caracteres 3. funcion que se ejecuta cuando se resuelve el llamado
/*fs.readFile("index.html","utf-8",(err,contenido)=>{
    if(err){
        throw err
    }else{
        console.log(contenido)
    }
})*/

//PARA RENOMBRAR ARCHIVOS
//pasos y argumentos
//1.Ubicacion del archivo 2. Nuevo nombre 3. funcion para capturar error
/*fs.rename("index.html","vista.html", err => {
    if(err){
        throw err
    }
})*/

//AGREGAR INFORMACION AL FINAL DEL ARCHIVO
/*fs.appendFile("vista.html","<h1>NODEJS</h1>",err => {
    if(err){
        throw err
    }
    console.log("El contenido se agrego")
})*/

//REMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
/*fs.writeFile("vista.html","El veloz murcielago hindu",err => {
    if(err){
        throw err
    }
    console.log("El contenido se remplazo")
})
*/

//ELIMINAR UN ARCHIVO 
/*fs.unlink("vista.html", err => {
    if(err){
        throw err
    }
    console.log("Archivo Eliminado")
})*/

// 📝 Reemplazar todo el contenido del archivo

/*fs.writeFile("vista.html","El velóz murciélago hindú", err => {
    if(err){
        throw err
    }}*/
