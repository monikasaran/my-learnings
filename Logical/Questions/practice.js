var s = 'abcghykl'
var t = 'abcqqq###gl#hyu#kqq##l'

let count = 0
let len = t.length

for(let i=len; i>= 0;) {
    if(t[i] == '#') {
        ++count
        --i
    } else {
        if(count) {
            let temp = t.slice(i-count+1, i+count+1)
            t = t.replace(temp, '')
            i = i-count
        } else {
            --i
        }
        count = 0
    }
}

var s = 'monikasaranabcd'
var k = 2
var arr = new Array(s.length)
let sub = ''
let temp = s[0]
for(let i=1 ; i<s.length; i++) {
    if(Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i)) > k){
        temp = s[i]
    } else {
        temp += s[i]
        if(temp.length > sub.length) {
            sub = temp
        }
    }
}
console.log(sub);
