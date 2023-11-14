let nomeE = document.getElementById('inome');
let labelNome = document.getElementById('labelnome');
let validNome = false;

let msgErro = document.getElementById('msgErro');
let msgValido = document.getElementById('msgValido');

let atividade = 'ativo';

const uri = 'api/Cadastro';
let todos = [];

function getCadastro(){
    fetch(uri)
    .then(response => response.json())
    .then(data => _displayCadastro(data))
    .catch(error => console.error('Unable to get items.',error))
}

function addCadastro(){
    const addNomeTextbox = document.getElementById('inome');
    const addEmailTextbox = document.getElementById('iemail');
    const addAtividadeTextbox = atividade;

    const  cadastro = {
        isComplete: false,
        nome: addNomeTextbox.value.trim(),
        email: addEmailTextbox.value.trim(),
        atividade: addAtividadeTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cadastro)
      })
        .then(response => response.json())
        .then(() => {
          getCadastro();
          addNomeTextbox.value = '';
          addEmailTextbox.value = '';
          addAtividadeTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
  }
  
function _displayCount(cadastroCount) {
    const name = (cadastroCount === 1) ? 'to-do' : 'to-dos';
  
    document.getElementById('counter').innerText = `${cadastroCount} ${nome} ${email} ${atividade}`;
  }

  function _displayItems(data){
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

  _displayCount(data.length);

  //const button = document.createElement('button');

  data.forEach(cadastro => {
    /*let isCompleteCheckbox = document.createElement('input');
    isCompleteCheckbox.type = 'checkbox';
    isCompleteCheckbox.disabled = true;
    isCompleteCheckbox.checked = item.isComplete;

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);*/

    let tr = tBody.insertRow();
    
    let td1 = tr.insertCell(0);
    let textNome = document.createTextNode(cadastro.nome);
    td1.appendChild(textNome);

    let td2 = tr.insertCell(1);
    let textEmail = document.createTextNode(cadastro.email);
    td2.appendChild(textEmail);

    let td3 = tr.insertCell(2);
    let textAtividade = document.createTextNode(cadastro.atividade);
    td3.appendChild(textAtividade);

  });

  todos = data;
}

nomeE.addEventListener('keyup', () =>{
    if(nomeE.value.length <=2){
        labelNome.setAttribute('style','color: red');
        labelNome.innerHTML = "Nome *insira no minimo 3 caracteres";
        validNome = false;
    }else{
        labelNome.setAttribute('style','color: green');
        labelNome.innerHTML = "Nome";
        validNome = true;
    }
})


function selecionarInput (event){
    const inputClicado = event.target;

    function removeSelecao () {
        inputClicado.checked = false;
    }

    inputClicado.addEventListener('click',removeSelecao, {once:true});
}

function gravar(){

    if(validNome == true){
        msgValido.setAttribute('style', 'display: block');
        msgValido.innerHTML = '<strong>Usuario cadastrado</strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';
        setTimeout(()=>{
            location.href = "../cadastro/cadastro.html";
        },3000)
    }else{
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong>Preencha o campo nome corretamente</strong>';
        msgValido.setAttribute('style', 'display: none');
        msgValido.innerHTML = '';
    }
    addCadastro();
    _displayItems();
}