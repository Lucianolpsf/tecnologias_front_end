const novaTarefa = document.querySelector('#nova-tarefa')
const btnCriarTarefa = document.querySelector('button')
var listaTarefas = []
let btnTarefas = document.querySelector('.tarefas')
;

novaTarefa.addEventListener('keyup', (tecla)=>{
    
    if (tecla.key == 'Enter'){
        renderizarTarefa()
        atualizarListaTarefas()
    }
})

btnCriarTarefa.addEventListener('click', ()=>{
    
    renderizarTarefa()    
    atualizarListaTarefas()
    
})

btnTarefas.addEventListener('click',(elemento)=>{

    const elementoClicado = elemento.target

    if (elementoClicado.classList.contains('excluir')){
        elementoClicado.parentElement.parentElement.remove()
        atualizarListaTarefas()

    }
    if (elementoClicado.classList.contains('concluida')){
        elementoClicado.parentElement.parentElement.firstElementChild.classList.toggle('checked')
    }
})


function criarNovaTarefa(novaTarefa){

    if (novaTarefa == ''){
        alert('Sua tarafa não atende os requisitos')
    }
    else{

        const li = document.createElement('li')
        li.innerHTML =`
        <p>${novaTarefa}</p> 
        <div class="icons">
        <span class="excluir">&#x274C</span>
        <span class="concluida">&#x2714&#xFE0F</span>
        </div>
        `
    return li
    }

}

function atualizarListaTarefas(){
    
    listaTarefas = [...document.querySelectorAll('li')]
    
}

function renderizarTarefa(){

    const tarefa = criarNovaTarefa(novaTarefa.value)
    
    const listaTarefas = document.querySelector('.lista-tarefas')
    
    listaTarefas.appendChild(tarefa)

    novaTarefa.value = ''
}