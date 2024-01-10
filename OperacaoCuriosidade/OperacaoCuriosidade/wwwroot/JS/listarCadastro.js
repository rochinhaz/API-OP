const uri = 'https://localhost:7149/api/Cadastro';
let todos = [];

function getCadastro(){
    fetch(uri)
    .then(response => response.json())
    .then(data => _displayCadastro(data))
    .catch(error => console.error('Unable to get items.',error))
}

function _displayCadastro(data){
  const tBody = document.querySelector('.todos');
  tBody.innerHTML = '';

  const buttonE = document.createElement('button');
  buttonE.setAttribute('class', 'editButton');
  const buttonD = document.createElement('button');
  buttonD.setAttribute('class', 'deleteButton');

  data.forEach(cadastro => {

    let editButton = buttonE.cloneNode(false);
    editButton.innerText = 'Editar';
    editButton.setAttribute('onclick', `displayEditForm('${cadastro.id}')`);
    buttonE.setAttribute('class', 'editButton');

    let deleteButton = buttonD.cloneNode(false);
    deleteButton.innerText = 'Deletar';
    deleteButton.setAttribute('onclick', `confirmarDelete('${cadastro.id}')`);  

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
    td3.appendChild(editButton);
    td3.appendChild(deleteButton);

    console.log(deleteButton)
    console.log(editButton)
    console.log(`${uri}/${cadastro.id}`)
  });
  todos = data;
}

