var arr = [65, 22, 1, 89, 54, 11, 34]

console.log(mergeSort(arr))

function mergeSort(arr) {
    let mid = Math.floor(arr.length / 2)
    if (mid) {
        let left = arr.slice(0, mid)
        let right = arr.slice(mid, arr.length)

        left = mergeSort(left)
        right = mergeSort(right)

        let merged = []
        let p1 = 0
        let p2 = 0
        while (p1 !== left.length && p2 !== right.length) {
            if (left[p1] < right[p2]) {
                merged.push(left[p1])
                    ++p1
            } else {
                merged.push(right[p2])
                    ++p2
            }
        }
        if (p1 !== left.length) {
            merged = [...merged, ...left.slice(p1, left.length)]
        }
        if (p2 !== right.length) {
            merged = [...merged, ...right.slice(p2, right.length)]
        }

        return merged
    }
    return arr
}