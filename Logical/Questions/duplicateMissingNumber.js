

var arr = [10,10,2,3,10,5,6,7,8,9] //missing 9
var duplicate = []
var missing = []
let k =0;
for(let i=0; i<arr.length;) {
  k++
  if (arr[i] === i+1)
    i++
  else{
    if (arr[i] !== arr[arr[i]-1]){
      let a = arr[i]
      arr[i] = arr[a-1]
      arr[a-1] = a
    } else {
      i++;
    }
  }
}
for(let i=0; i<arr.length; i++) {
  if(arr[i] !== i+1){
    console.log('Missing number', i+1)
    console.log('Duplicate', arr[i])
  }
}



