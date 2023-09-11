const novaTarefa = document.querySelector('#nova-tarefa')
const btnCriarTarefa = document.querySelector('button')
var listaTarefas = []

btnCriarTarefa.addEventListener('click', ()=>{
    
    const tarefa = criarNovaTarefa(novaTarefa.value)
    
    const listaTarefas = document.querySelector('.lista-tarefas')
    
    listaTarefas.appendChild(tarefa)
    
    atualizarListaTarefas()
    
    const btnExcluirTarefa = [...listaTarefas.querySelectorAll('.excluir')]
    const btnTarefaConcluida = [...listaTarefas.querySelectorAll('.concluida')]
  
    btnExcluirTarefa.forEach((itemLista)=>{
        itemLista.addEventListener('click', ()=>{
            itemLista.parentElement.parentElement.remove()
            atualizarListaTarefas()
        })
    })
    
    btnTarefaConcluida.forEach((itemLista)=>{
        itemLista.addEventListener('click', ()=>{
            
            const tarefa = itemLista.parentElement.parentElement
            
            tarefa.firstElementChild.classList.toggle('checked')
            
            atualizarListaTarefas()

        })
    })

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