// Suma de números en un array

/* function sumadyv (arr) {
    debugger
    //Caso base
    if(arr.length === 1){
        return arr[0]
    }
    //Dividir
    const medio = Math.floor(arr.length/2)
    const izq = arr.slice(0, medio)
    const der = arr.slice(medio)

    //Conquistar
    const sumaIzq = sumadyv(izq)
    const sumaDer = sumadyv(der)

    //Combinar
    return sumaIzq + sumaDer

}
console.log( sumadyv([1,4,3,5,8,2]) ) */

//Búsqueda binaria

/* function busquedaBinaria(arr, target, inicio=0, fin=arr.length-1){

    //caso base
    if(inicio > fin){
        return -1
    }
    //Calcular el índice medio 
    const medio = Math.floor( (inicio+fin)/2 ) 

    //Si el elemento del medio es el que buscamos entonces lo devolvemos
    if( arr[medio] === target) return medio

    //Si el elemento del medio es mayor al target buscamos en la mitad izquierda
    if(arr[medio] > target){
        return busquedaBinaria(arr, target, inicio, medio-1)
    }else{
        return busquedaBinaria(arr, target, medio+1, fin)
    }

}
console.log( busquedaBinaria( [1,3,5,7,9], 7 ) ) //3 */


//Merge sort 
//Ordena una lista o arreglo, lo divide en partes pequeñas y luego las combina

//[4,2,1,3]

function mergeSort(arr){

    //caso base
    if(arr.length <= 1) return arr

    //divide el arreglo en dos mitades
    const medio = Math.floor(arr.length/2)
    const izq = mergeSort(arr.slice(0, medio))  //Llamada recursiva
    const der = mergeSort(arr.slice(medio))  //Llamada recursiva

    //conquista: unir ambas mitades ordenadas
    return merge(izq, der)

}

function merge (izq, der){

    const result = []
    let i = 0
    let j = 0

    while(i < izq.length && j < der.length){
        if(izq[i] < der[j]){
            result.push(izq[i])
            i++
        }else{
            result.push(der[j])
            j++
        }
    }

    return result.concat( izq.slice(i) ).concat( der.slice(j) )

}

console.log( mergeSort( [4,2,1,5] ) ) //[ 1, 2, 4, 5 ]