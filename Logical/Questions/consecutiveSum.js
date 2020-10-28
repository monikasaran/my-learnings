//Find the set of arrays of consecutive numbers having sum equal to the input
/**
 * we know sum of n nos. starting from 1 is n(n+1)/2
 * then, sum of n nos. starting from x will be x(n-1) + n(n+1)/2
 * e.g
 * input = 171
 * output = [ 85, 86 ],
            [ 56, 57, 58 ],
            [ 26, 27, 28, 29, 30, 31 ],
            [ 15, 16, 17, 18, 19, 20, 21, 22, 23 ],
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
            
 * }
 */


processData([12, 18, 40, 171])

function processData(input) {
    //Enter your code here
    let resultMap = {}
    for (let j = 0; j < input.length; j++) {
        let num = input[j]
        let len = 0;
        let start = 0;
        let i = 1;
        let lenMap = {}
        while (true) {
            let sum = (i * (i + 1)) / 2
            if (sum > num)
                break
            let remaining = num - sum
            if (remaining > 0 && remaining % (i + 1) == 0) {
                len = i + 1
                start = remaining / (i + 1)
                lenMap[len] = start
            }
            i++
        }
        resultMap[num] = []
        Object.keys(lenMap).map(l => {
            let result = []
            for (i = 0; i < l; i++) {
                result.push(lenMap[l] + i)
            }
            resultMap[num].push(result)
        })
    }
    console.log(resultMap)
}