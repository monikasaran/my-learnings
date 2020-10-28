/**
 * Given an array sequence [A1 , A2 ...An], 
 * the task is to find the maximum possible sum of increasing subsequence S
 *  of length K such that Si1<=Si2<=Si3.........<=Sin.
 */



processData([8, 5, 9, 10, 5, 6, 19, 8], 3)

function processData(arr, k) {
    let sum = 0
    let found = []
    let idx = arr.length
    for (let i = 0; i < k; i++) {
        let subArr = arr.slice(k - i - 1, idx)
        let max = Math.max(...subArr)
        idx = arr.findIndex((x) => x === max)
        sum += max
        found.push(max)
    }
    console.log(found.reverse())
    console.log(sum)
}