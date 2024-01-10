function displayEditForm(id) {
    const cadastro = todos.find(cadastro => cadastro.id == id);
    
    document.getElementById('edit-name').value = cadastro.nome;
    document.getElementById('edit-email').value = cadastro.email;
    document.getElementById('edit-atividade').value = cadastro.atividade;
    document.getElementById('edit-idade').value = cadastro.idade;
    document.getElementById('edit-endereco').value = cadastro.endereco;
    document.getElementById('edit-outrasInfo').value = cadastro.outrasInformacoes;
    document.getElementById('edit-interesses').value = cadastro.interesses;
    document.getElementById('edit-sentimentos').value = cadastro.sentimentos;
    document.getElementById('edit-valores').value = cadastro.valores;
    document.getElementById('edit-id').value = cadastro.id;
    document.getElementById('editForm').style.display = 'block';
  }

  function updateCadastro() {
    const cadastroId = document.getElementById('edit-id').value;
    const cadastro = {
        id:cadastroId,
        nome: document.getElementById('edit-name').value.trim(),
        email: document.getElementById('edit-email').value.trim(),
        atividade: document.getElementById('edit-atividade').value.trim(),
        idade: document.getElementById('edit-idade').value.trim(),
        endereco: document.getElementById('edit-endereco').value.trim(),
        outrasInformacoes: document.getElementById('edit-outrasInfo').value.trim(),
        interesses: document.getElementById('edit-interesses').value.trim(),
        sentimentos: document.getElementById('edit-sentimentos').value.trim(),
        valores: document.getElementById('edit-valores').value.trim()
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