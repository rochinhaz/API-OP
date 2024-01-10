let todos = [];

let pesquisa = document.getElementById("ipesquisa");
  
  function getCadastroPesquisa(){
    fetch(`${uri}Cadastro/NOMES?Nome=${pesquisa.value}`)
    .then(response => response.json())
    .then(data => _displayPesquisa(data))
    .catch(error => console.error('Unable to get items.',error))
  }

  function _displayPesquisa(data){
    data.forEach(cadastro => {
        window.alert('Usuario Encontrado: \n -Id: '+cadastro.id+   '\n -Nome: '+cadastro.nome+'\n -Email: '+cadastro.email+' \n -Atividade: '+cadastro.atividade)
    });
    todos = data;
    if(todos.length == 0){
        window.alert('Usuario Nao Encontrado')
    }
  }
