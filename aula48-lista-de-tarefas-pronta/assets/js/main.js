const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const listaTarefas = document.querySelector('.tarefas')

//Cria a tarefa pressionando no botão "Adicionar Tarefa"
btnTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return
    // let p = listaTarefas.createElement('p')
    criarTarefa(inputTarefa.value)
    limpaInput();
})

//Criar a tarefa pressionando "enter" no teclado
inputTarefa.addEventListener('keypress', (e) => {
   if (e.keyCode === 13) {
    if(!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
    limpaInput();
   }
})

//Captura o clique no botão de "Deletar" a Tarefa e Remove a Tarefa
document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('btn-deleta')) {
        removerTarefa(el)
    }
})

//Função para Limpar o Input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

//Função para Criar a tarefa
function criarTarefa(input) {
    const li = document.createElement("li");
    const novaTarefa = `${input}<button class="btn-deleta">Deletar</button>`;
    li.innerHTML = novaTarefa;
    listaTarefas.appendChild(li);
    salvarTarefas();
}

//Função para "deletar" a tarefa
function removerTarefa(tarefa) {
    // console.log(tarefa.parentElement)
    let elemento = tarefa.parentElement
    elemento.remove();
    salvarTarefas();
}

//Função para Salvar as Tarefas no LocalStorage
function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    // console.log(liTarefas)

    const listaDeTarefas = [];
    for(let tarefa of liTarefas) {
        let itemTarefa = tarefa.innerText;
        itemTarefa = itemTarefa.replace('Deletar', '').trim();
        listaDeTarefas.push(itemTarefa)
    }

    // Converterndo um array para uma string no formato JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // console.log(listaDeTarefas);
    // console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON);
}

//Função para "ler" as tarefas do LocalStorage e jogar na lista de Tarefas.
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    //converter para objeto em javascript
    const arrayDeTarefas = JSON.parse(tarefas);

    for (let tarefa of arrayDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas()