
//equal the height(sum) of stacks by popping element

var h1 = [3,2,1,1,1]
var h2 = [4,3,2]
var h3 = [1,1,4,1]
equalStacks(h1, h2, h3)

function equalStacks(h1, h2, h3) {
    // Write your code here
    h1 = h1.reverse()
    h2 = h2.reverse()
    h3 = h3.reverse()
    let height1 = h1.reduce((a,b) => a+b)
    let height2 = h2.reduce((a,b) => a+b)
    let height3 = h3.reduce((a,b) => a+b)

    while (h1.length && h2.length && h3.length) {
        m = Math.min(height1, height2, height3)
        while(height1 > m) height1 -= h1.pop()
        while(height2 > m) height2 -= h2.pop()
        while(height3 > m) height3 -= h3.pop()
        if(height1 ===  height2 && height2 == height3) {
          console.log(height1)
          break
        }
    }
    console.log(h1, h2, h3)
    console.log(height1, height2, height3)
}