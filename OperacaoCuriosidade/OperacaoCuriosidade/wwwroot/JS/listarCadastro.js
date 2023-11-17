const uri = 'https://localhost:7149/api/Cadastro';
let todos = [];

function getCadastro(){
    fetch(uri)
    .then(response => response.json())
    .then(data => _displayCadastro(data))
    .catch(error => console.error('Unable to get items.',error))
}

function updateCadastro() {
  const cadastroId = document.getElementById('edit-id').value;
  const cadastro = {
      id: parseInt(cadastroId, 10),
      isComplete: document.getElementById('edit-isComplete').checked,
      name: document.getElementById('edit-name').value.trim()
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
  
    //document.getElementById('counter').innerText = `${cadastroCount} ${nome}`;
  }

  function _displayCadastro(data){
    const tBody = document.querySelector('.todos');
    tBody.innerHTML = '';

  _displayCount(data.length);

  const button = document.createElement('button');

  data.forEach(cadastro => {
    let isCompleteCheckbox = document.createElement('input');
    isCompleteCheckbox.type = 'checkbox';
    isCompleteCheckbox.disabled = true;
    isCompleteCheckbox.checked = cadastro.isComplete;

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.setAttribute('onclick', `displayEditForm(${cadastro.id})`);

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteItem(${cadastro.id})`);

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
