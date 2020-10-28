//callback hell
function getUsername(getAgeCallback) {
    getAgeCallback({name: 'Monika'}, getDepartment)
}

function getAge(data, getDepartmentCallback) {
    data = {...data, age: 20}
    getDepartmentCallback(data, printDetails)
}

function getDepartment(data, printDetailsCallback) {
    data = {...data, department: 'IT'}
    printDetailsCallback(data)
}

function printDetails(data){
    console.log(data)
}

getUsername(getAge)



// convert to promise
function getUsername1() {
    return new Promise((resolve, reject) => {
        return resolve({name: 'Monika'})
    })
}

function getAge1(data) {
    data = {...data, age: 20}
    return new Promise((resolve, reject) => {
        return resolve(data)
    })
}

function getDepartment1(data) {
    data = {...data, department: 'IT'}
    return new Promise((resolve, reject) => {
        return resolve(data)
    })
}

function printDetails1(data){
    console.log(data)
}

getUsername1()
    .then(data =>  getAge1(data))
    .then(data => getDepartment1(data)) 
    .then(data => printDetails1(data))



//convert to async await
async function getData() {
    let data = await getUsername1()
    data = await getAge1(data)
    data = await getDepartment1(data)
    data = await printDetails1(data)
}
getData()
