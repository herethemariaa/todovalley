const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list")

//função para adicionar tarefa
function addTask(){
    if(inputBox.value === ''){
        alert("Por favor, digite a sua tarefa") //validação de caracteres
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7" //elemento html que representa o "X" de remover
        li.appendChild(span)
    }
    inputBox.value = ""
    salvarDados()
}
// função para remover tarefas
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

//funções para exibir e salvar dados
function salvarDados(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function mostrarLista(){
    listContainer.innerHTML = localStorage.getItem("data")
}
mostrarLista()
