LCMofNnumbers([9001, 9011, 9013, 9049])

function LCMofNnumbers(arr) {
    let lcm = 1
    let divisor = 2
    let len = arr.length
    while (true) {
        let counter = 0
        let divisible = false
        for (let i = 0; i < len; i++) {
            if (arr[i] === 1) {
                counter++
            }
            if (arr[i] % divisor === 0) {
                divisible = true
                arr[i] = arr[i] / divisor
            }
        }

        if (divisible) {
            lcm *= divisor
        } else {
            divisor++
        }

        if (counter === len) {
            break
        } 
    }
    console.log('LCM is ', lcm)
}

findFactors(16)
function findFactors(n) {
    let factors = [1]
    let len = Math.floor(Math.sqrt(n))
    for(let i=2; i<=len; i++) {
      if(n%i === 0) {
        factors.push(i)
        factors.push(n/i)
      }
    }
    factors.push(n)
    factors.sort((a,b) => a-b)
    console.log('Factors of ', n, 'is ', factors)
  }