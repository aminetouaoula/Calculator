const input = document.querySelector('[ name="text"]')
const addButton = document.querySelector('.add_button')
let main_toDoListe = document.querySelector(".main_toDoListe")
let Todo = ''
let ul = document.createElement("ul")
main_toDoListe.append(ul)

addButton.addEventListener("click", (event) => {
    Todo = input.value
    createToDoList(Todo)
})
document.forms[0].addEventListener("submit", (event) => {
    Todo = input.value
    createToDoList(Todo)
    event.preventDefault()

})

let clearButton = document.querySelector(".clearButton")
function createToDoList(Todo) {
    if (Todo === '') return
    let li = document.createElement("li")
    let p = document.createElement("p")
    let removebutton = document.createElement("button")
    removebutton.setAttribute("class", "remove_button")
    let removeText = document.createTextNode("remove")
    removebutton.appendChild(removeText)

    // if (Todo === p.innerText) return
    p.append(Todo)
    li.append(p, removebutton)
    ul.append(li)

    p.style.cssText = `cursor: pointer;`
    p.addEventListener("click", () => {
        p.classList.toggle("makes_line_in_it")
    })
    removebutton.addEventListener("click", (eve) => {
        li.remove()
    })
}

clearButton.addEventListener("click", () => {
    let ulChildren = ul.children
    const leng = ulChildren.length

    console.log(ulChildren)
    for (let index = leng - 1; index >= 0; index--) {
        ulChildren[index].remove()
        console.log(ulChildren)

        console.log(index)


    }

})
