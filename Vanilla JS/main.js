var w = [3,2,4,5,1]
var b = [5,1,7,2,9]
const W = 10

var B = [...Array(w.length)].map(x=>Array(W+1).fill(null))    

for(let i=0; i<=W; i++) {
    B[0][i] = 0
}

for(let i=1; i<w.length; i++) {
    B[i][0] = 0
    for(let j=1; j<=W; j++){
        if(w[i] <= j && B[i-1][j-w[i]] + b[i] > B[i-1][j]){
            B[i][j] = B[i-1][j-w[i]] + b[i]
        } else {
            B[i][j] = B[i-1][j]
        }
    }
}

console.log(B);

