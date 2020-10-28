
function onButtonClick() {
    return fetch('url', {method: 'post', body: {'name': 'random'}})
    .then(data=> {
        data.json()
        return [2,3,4,4,5]
    }).catch(data => [])
}

async function findDuplicate() {
    try{
        let response = await onButtonClick()
        let arrMap = {}
        let foundIndex
        for(let i=0; i< response.length; i++) {
            if(arrMap[response[i]]){
                foundIndex = arrMap[response[i]]
                break
            } else {
                arrMap[response[i]] = i
            }
        }
        // console.log(foundIndex)
        let labelEl = document.getElementsByName('labelName')
        labelEl.innerText = foundIndex
    } catch(e) {
        console.log(e)
    }
}


findDuplicate()


