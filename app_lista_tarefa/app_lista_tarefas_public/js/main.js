function editar(id, txt_tarefa){
    // criar um form de edição
    let form = document.createElement('form')
    form.action = 'home.php?pag=home&acao=atualizar'
    form.method = 'post'
    form.className = 'row'

    // criar um input para entrada do texto
    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'col-9 form-control'
    inputTarefa.value = txt_tarefa

    // criar um input hidden para lguardar o id da tarefa
    let inpurId = document.createElement('input')
    inpurId.type= 'hidden'
    inpurId.name = 'id'
    inpurId.value = id

    // criar um button para envio do form
    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'col-3 btn btn-info'
    button.innerHTML = 'Atualizar'

    // incluir o inputTarefa no form
    form.appendChild(inputTarefa);

    // incluir o inpurId no form
    form.appendChild(inpurId)

    // incluir o button no form
    form.appendChild(button)

    // console.log(form)

    let tarefa = document.getElementById('tarefa_'+id)
    
    // limpar o texto da tarefa para a inclusao do form
    tarefa.innerHTML = ''

    // incluir form na pagina
    tarefa.insertBefore(form, tarefa[0]) //permite incluir uma arvore de elemento em outro elemento ja renderizado

    
}

function remover(id){
    location.href = 'home.php?pag=home&acao=remover&id=' + id;
}

function marcarRealizada(id){
    location.href = 'home.php?pag=home&acao=marcarRealizada&id=' + id;
}