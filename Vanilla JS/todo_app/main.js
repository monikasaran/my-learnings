const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('change', filterTodo)

function addTodo(event) {
    event.preventDefault()
    //create outer div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //create li inside div
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)  

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check" />'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)  

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash" />'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)  

    todoList.appendChild(todoDiv)
    //clear input
    todoInput.value = ''
}

function deleteCheck(e) {
    const item = e.target 
    const todo = item.parentElement

    if (item.classList[0] === 'trash-btn') {
        todo.classList.add("fall")
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    } if (item.classList[0] === 'complete-btn') {
        todo.classList.toggle("completed")
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
        }
    })
}