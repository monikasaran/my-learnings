arr = [1,1,5,7,1,0,1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    
    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  
    console.log('Lookup:', sumsLookup)
    sumsLookup[arr[i]] = 1;
  }
  
  return output;
}
console.log(findSumPairs(arr, 6));