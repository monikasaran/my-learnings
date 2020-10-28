const getName = function(hometown) {
    console.log(this.firstname, this.lastname, hometown)
}

const name = {
    firstname: 'Monika',
    lastname: 'Saran',
}

const name2 = {
    firstname: 'Anuj',
    lastname: 'Matwa',
}

//function borrowing
getName.call(name, 'Jodhpur')
getName.call(name2, 'Pali')

//only difference between call and apply is the way of passing arguments
getName.apply(name2, ['Pali'])

//returns a copy of the function
let getMyName = getName.bind(name, 'Pali')
getMyName()