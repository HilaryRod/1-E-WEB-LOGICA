//Recursión

//Cuenta regresiva
//5, 4, 3, 2, 1

/* function cuentaAtras (num) {
    
    //Caso base
    if(num === 0){
        return
    }
    console.log(num)
    //Llamada recursiva
    cuentaAtras (num-1)
}
cuentaAtras (5) */


//Factorial

/* function factorial (x) {
    
    //caso base
    if(x === 0){
        return 1
    }

    //llamada recursiva
    return x * factorial (x-1)
}
console.log( factorial(5) ) //120 */


//Encontrar numero par
// num % 2 == 0
//6-2-2-2 = 0
//7-2-2-2 = 1

/* function encontrarPar(num){

    //Caso base
    if(num === 0){
        return "par"
    }else if(num === 1){
        return "impar"
    }else if (num < 0) {
        return console.log('error')
    }else{
        //Llamada recursiva
        return encontrarPar(num-2)
    }

}

console.log( encontrarPar(17.6) ) */





// Backtracking

//Función que encuentre todas las combinaciones de un array
// [1 , 2 , 3] -> length:3

//[]
//[1]
//[1,2]
//[1,2,3]
//[1,3]

//1,1,2,3,5

function generarCombinaciones (arr, index=0, nuevaCadena=[]){
    console.log(nuevaCadena)

    for (let i = index; i < arr.length; i++) { //2
        nuevaCadena.push(arr[i])//1. Agregar elemento a nuevaCadena
        generarCombinaciones(arr, i + 1, nuevaCadena)//2. Llamada recursiva
        nuevaCadena.pop()//3. Backtracking eliminando el último elemento de nuevaCadena 
    }
}
generarCombinaciones([1 , 2 , 3])