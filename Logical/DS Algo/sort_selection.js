var arr = [65, 22, 1, 89, 54, 11, 34]

selectionSort(arr)
function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        console.log(arr)
        let min = Math.min(...arr.slice(i))
        let minIndex = arr.findIndex(x => x===min)
        //swap min with current
        if(min !== arr[i]) {
            let temp = arr[i]
            arr[i] = min
            arr[minIndex] = temp
        }
    }
    console.log(arr)
}