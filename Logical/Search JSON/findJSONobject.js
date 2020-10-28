const json = require('./test.json')

function traverse(obj, id) {
    let foundObj={}
    for (let k in obj) {
       if (obj[k] && typeof obj[k] === 'object') {
           let o = traverse(obj[k], id)
           if (o && (o.id === id)) {
                foundObj = o
            }
       } else {
           if (obj[k] === id) {
               foundObj = obj
           }
       }
   }
   return foundObj
}
console.log(traverse(json, 202))