var registroTotal = document.getElementById('p1');
var registroMes = document.getElementById('p2');

function getContarCadastros(){
    fetch(`${uri}/ContarCadastros`)
    .then(response => response.json())
    .then(data => _displayContarCadastros(data))
    .catch(error => console.error('Unable to get items.',error))
}

function _displayContarCadastros(data){
    registroTotal.innerHTML = data.value;
    registroMes.innerHTML = data.value; 
    console.log(data);
}