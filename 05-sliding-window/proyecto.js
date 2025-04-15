/* 
Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
Devuelve la palabra más larga al final del proceso.
*/

function findLongestWord(text) {
    const words = text.split(" ")
    let longestWord = ''; 
    let aux;
    for (let i = 0 ; i < words.length; i++){
        aux = words[i]
        console.log(words[i].length)
        if(aux.length > longestWord.length){
            longestWord = aux;
        }
    }
    return longestWord;
}
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));