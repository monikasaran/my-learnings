console.log(isBalanced('({})))'))

function isBalanced(s) {
    let stack = []
    let bktMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    if(s.length%2 !== 0) return 'NO'
    for(let i=0 ; i<s.length; i++) {
        let isOpeningBracket = s[i] === '(' || s[i] === '{' || s[i] === '[' 
        let isClosingBracket = s[i] === ')' || s[i] === '}' || s[i] === ']' 
        if(isOpeningBracket) {
            stack.push(s[i])
        } else if(isClosingBracket) {
            let sym = stack[stack.length-1]
            if(sym === bktMap[s[i]]) {
                stack.pop()
            } else {
                return 'NO'
            }
        }
    }
    return stack.length ? 'NO' : 'YES'
}