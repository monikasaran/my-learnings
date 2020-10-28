for(var i=0; i<5; i++){
    // printVal(i)
}

function printVal(i) {
    setTimeout(function() {
        console.log(i)
    }, (i+1)*1000)
}


function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function curriedSum(a, b, c) {
    return a+b+c
}

let sum = curry(curriedSum)
console.log(sum(2,3,4))
console.log(sum(2)(3)(4))