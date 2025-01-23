const inputTarefa = document.querySelector('.input-tarefas')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
   const li = document.createElement('li')
   return li
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(inputTarefa.value === '')return
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput(){
    inputTarefa.value = ''
}

function criaBotaoApagar(li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

}

btnTarefa.addEventListener('click', function(e){
    if(inputTarefa.value === '')return
    // console.log(inputTarefa.value)
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()