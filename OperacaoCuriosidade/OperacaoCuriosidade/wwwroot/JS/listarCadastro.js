const uri = 'https://localhost:7149/api/Cadastro';
let todos = [];

function getCadastro(){
    fetch(uri)
    .then(response => response.json())
    .then(data => _displayCadastro(data))
    .catch(error => console.error('Unable to get items.',error))
}

function deleteItem(id) {
  fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
  .then(() => getCadastro())
  .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
  const cadastro = todos.find(cadastro => cadastro.id === id);
  
  document.getElementById('edit-name').value = cadastro.nome;
  document.getElementById('edit-email').value = cadastro.email;
  document.getElementById('edit-atividade').value = cadastro.atividade;
  document.getElementById('edit-id').value = cadastro.id;
  document.getElementById('editForm').style.display = 'block';
}

function updateCadastro() {
  const cadastroId = document.getElementById('edit-id').value;
  const cadastro = {
      id: parseInt(cadastroId, 10),
      nome: document.getElementById('edit-name').value.trim(),
      email: document.getElementById('edit-email').value.trim(),
      atividade: document.getElementById('edit-atividade').value.trim()
  };

  fetch(`${uri}/${cadastroId}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(cadastro)
  })
      .then(() => getCadastro())
      .catch(error => console.error('Unable to update item.', error));

  closeInput();

  return false;
}

function closeInput() {
  document.getElementById('editForm').style.display = 'none';
}

function _displayCount(cadastroCount) {
    const nome = (cadastroCount === 1) ? 'to-do' : 'to-dos';
  }

function _displayCadastro(data){
  const tBody = document.querySelector('.todos');
  tBody.innerHTML = '';

  _displayCount(data.length);

  const buttonE = document.createElement('button');
  buttonE.setAttribute('class', 'editButton');
  const buttonD = document.createElement('button');
  buttonD.setAttribute('class', 'deleteButton');

  data.forEach(cadastro => {

    let editButton = buttonE.cloneNode(false);
    editButton.innerText = 'Editar';
    editButton.setAttribute('onclick', `displayEditForm(${cadastro.id})`);
    buttonE.setAttribute('class', 'editButton');

    let deleteButton = buttonD.cloneNode(false);
    deleteButton.innerText = 'Deletar';
    deleteButton.setAttribute('onclick', `deleteItem(${cadastro.id})`);
    buttonD.setAttribute('class', 'deleteButton');

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
  });

  todos = data;
}

/*function getCadastroPesquisa(){
  fetch(uri)
  .then(response => response.json())
  .then(data => resultadoPesquisa(data))
  .catch(error => console.error('Unable to get items.',error))
}

function resultadoPesquisa(data){
  const tBody = document.getElementById('tabelaPesquisa');
  tBody.innerHTML = '';

  data.forEach(cadastro => {

    let editButton = buttonE.cloneNode(false);
    editButton.innerText = 'Editar';
    editButton.setAttribute('onclick', `displayEditForm(${cadastro.id})`);
    buttonE.setAttribute('class', 'editButton');

    let deleteButton = buttonD.cloneNode(false);
    deleteButton.innerText = 'Deletar';
    deleteButton.setAttribute('onclick', `deleteItem(${cadastro.id})`);
    buttonD.setAttribute('class', 'deleteButton');

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
  });

  todos = data;
}*/
