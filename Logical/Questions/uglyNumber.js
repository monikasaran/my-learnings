/**
 * Ugly numbers are numbers whose only prime factors are 2, 3 or 5. 
 * The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. 
 * By convention, 1 is included.

Given a number n, the task is to find n’th Ugly number.
 */

uglyNumbers(150)

function uglyNumbers(n) {
    let ugly = [1]
    let i2 = 0,
        i3 = 0,
        i5 = 0
    let next_2 = ugly[i2] * 2
    let next_3 = ugly[i3] * 3
    let next_5 = ugly[i5] * 5
    let next_ugly
    for (let i = 1; i < n; i++) {
        next_ugly = Math.min(next_2, next_3, next_5)
        ugly[i] = next_ugly
        if (next_ugly === next_2) {
            ++i2
            next_2 = ugly[i2] * 2
        }
        if (next_ugly === next_3) {
            ++i3
            next_3 = ugly[i3] * 3
        }
        if (next_ugly === next_5) {
            ++i5
            next_5 = ugly[i5] * 5
        }
    }
    console.log(ugly)
    console.log(next_ugly)
}