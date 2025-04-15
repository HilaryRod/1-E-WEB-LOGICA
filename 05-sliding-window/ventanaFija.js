/* function maxSum (arr, k){
    let izq = 0
    let der = izq + k - 1

    let sum = 0

    for (let i = izq; i <= der; i++) {
        sum += arr[i]
    }

    console.log(sum)
}  */


    const array = [-4, -1, -3, 0, 5, 12]
    const k = 3
    
    function maxSum(arr, k) {
    
        let initialWindow = arr.slice(0,k)
        let sum = initialWindow.reduce( (acc,val)=>acc+val )
    
        let maxSum = sum
        for (let i = k; i < arr.length; i++) {
            sum += arr[i] - arr[i-k]
    
            //maxSum = maxSum > sum ? maxSum : sum
            maxSum = Math.max(maxSum, sum)
        }
    
        return maxSum
       
    }
    
    console.log( maxSum(array, k) ) 