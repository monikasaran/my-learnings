// find the substring of length k with max number of vowels

function findSubstring(s, k) {
    let subString = s.substr(0,k)
    let regex = subString.match(/[aeiou]/gi)
    let pointer = regex ? regex.length : 0
    let result = subString
    let maxCount = pointer

    for (let i=1; i< s.length - 5; i++) {
        subString = s.substr(i,k)
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i-1])) {
            pointer--
        }
        if(['a', 'e', 'i', 'o', 'u'].includes(s[i+k-1])) {
            pointer++
        }
        if (pointer > maxCount) {
            maxCount = pointer
            result = subString
        }
    }
    if(maxCount) return result
    return 'Not found!'
}

console.log(findSubstring('caberqiitefg', 5))