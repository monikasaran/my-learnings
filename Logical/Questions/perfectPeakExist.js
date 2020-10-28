// You need to check that whether there exist a element which 
//is strictly greater than all the elements on left of it and 
//strictly smaller than all the elements on right of it.
// If it exists return 1 else return 0

    A =[5, 1, 4, 3, 6, 8, 10, 7, 9]
    console.log(perfectPeak(A));
    
    function perfectPeak(A){
      let leftArr = maxArr(A)
        let rigthArr = minArr(A)
      console.log('minArray', rigthArr)
      console.log('maxArray', leftArr)
    
      for(let i=0; i<A.length; i++){
        if(rigthArr[i] === leftArr[i])
          return 1
      }
      return 0
    }

    function minArr(A){
      let len = A.length
      let min = A[len-1]
      let arr = []
      for(let i=len-1; i>=0; i--){
        if(min > A[i]){
            min = A[i]
        }
        arr[i] = min
      }
      return arr
    }
    
    function maxArr(A){
      let len = A.length
      let max = A[0]
      let arr = []
      for(let i=0; i<len; i++){
        if(max < A[i]){
            max = A[i]
        }
        arr[i] = max
      }
      return arr
    }