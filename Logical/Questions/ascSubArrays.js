/* Count the number of asc subArray possible from a given set of Array of size n
Sub array length can be from 1 to n
e.g 
[3,4,1,5,6,7,8]
ascending sub arrays are:
[3], [3,4], [4], [1],
[1,5], [1,5,6], [1,5,6,7], [1,5,6,7,8],
[5], [5,6], [5,6,7], [5,6,7,8],
[6], [6,7], [6,7,8]
[7], [7,8], [8]
Total Subarray = 18
*/

let a = [3,4,1,5,6,7,8]

let count = 0
let subArray = []
for(var i=0; i<a.length-1;i++) {
    subArray.push(a[i])
  if(a[i]>a[i+1]){
    let n = subArray.length
    let sum = n*(n+1)/2
    count+=sum
    subArray = []
  } 
}
subArray.push(a[i])
let n = subArray.length
let sum = n*(n+1)/2
count+=sum

console.log(count)
