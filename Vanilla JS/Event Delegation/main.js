function buttonClicked(e) {
    const removeButton = e.target
    removeButton.parentNode.removeChild(removeButton)
    const button1 = createNewButton('Button 1')
    const button2 = createNewButton('Button 2')
    const el = document.getElementById('root')
    el.appendChild(button1)
    el.appendChild(button2)
}

function createNewButton(name) {
    const newButton = document.createElement("button")
    newButton.innerText = name
    return newButton
}