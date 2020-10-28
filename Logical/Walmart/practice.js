function fabonacci(n) {
    let a = 0
    let b = 1
    let fab = [a,b]
    while(n) {
        --n
        let temp = b
        b = a + b
        a = temp
        fab.push(b)
    }
    console.log(fab)
}
fabonacci(10)

function fab(n) {
    let a = 0
    let b = 1
    let fab = [a,b]
    function fabon(n, a, b) {
        if(n) {
            let temp = b
            b = a + b
            a = temp
            fab.push(b)
            fabon(n-1, a, b)
        }
    }
    fabon(n,a,b) 
    console.log(fab)

}


fab(10)