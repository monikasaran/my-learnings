var arr = [65, 22, 1, 89, 54, 11, 34]

bubbleSort(arr)
function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++){
        let flag = false
        for(let j=0; j<arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                //if array is already sorted
                flag = true
            }
        }
        if(!flag) break
    }
    console.log(arr)
}