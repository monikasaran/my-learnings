/* Starting with a 1-indexed array of zeros of size n and a list of operations, 
for each operation add a value to each of the array element between two given indices, inclusive. 
Once all operations have been performed, return the maximum value in the array.
Example: 
n = 10
queries = [[1,5,3],[4,8,7],[7,9,4]]
add 3 from 1-5 indices
add 7 from 4-8 indices
add 4 from 7-9 indices
*/

var queries = [
    [1,5,3],
    [4,8,7],
    [7,9,4]
]
var n = 10
arrayManipulation(n, queries)
function arrayManipulation(n, queries) {
    let p, q, sum, max = 0, x = 0
    let a = []
    for (let i = 0; i < n; i++) {
        a[i] = 0
    }
    for (let i = 0; i < queries.length; i++) {
        p = queries[i][0]
        q = queries[i][1]
        sum = queries[i][2]
        a[p - 1] += sum;
        if (q <= n) a[q] -= sum
    }
    for (let i = 0; i < n; i++) {
        x = x + a[i]
        if (max < x) max = x
    }
    console.log(max)
}