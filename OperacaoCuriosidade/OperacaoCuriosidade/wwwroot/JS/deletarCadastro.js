function deleteItem(id) {
    fetch(`${uri}/${id}`, {
      method: 'DELETE'
    })
    .then(() => getCadastro())
    .catch(error => console.error('Unable to delete item.', error));
    
  }

  function confirmarDelete(id) {
    var c = confirm("Voce quer Deletar Mesmo?");
    if (c==true){
      deleteItem(id)
    }
    else{
      
    }
  }