let nomeE = document.getElementById('inome');
let labelNome = document.getElementById('labelnome');
labelNome.focus();
let validNome = false;

let emailE = document.getElementById('iemail');
let labelEmail = document.getElementById('labelemail');
let validEmail = false;
let msgErroNome = document.getElementById('msgErroNome');
let msgValidoNome = document.getElementById('msgValidoNome');
let msgErroEmail = document.getElementById('msgErroEmail');
let msgValidoEmail = document.getElementById('msgValidoEmail');

var atividadeButton = document.getElementById('iativo');
var atividadeValor = "";

const uri = 'https://localhost:7149/api/Cadastro';

function addCadastro(){
    atividadeValor = atividadeButton.checked ? "Ativo" : "Inativo";
    let addNomeTextbox = document.getElementById('inome');
    let addEmailTextbox = document.getElementById('iemail');
    let addAtividadeTextbox = atividadeValor;
    const  cadastro = {
        nome: addNomeTextbox.value.trim(),
        email: addEmailTextbox.value.trim(),
        atividade: addAtividadeTextbox
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
          addNomeTextbox.value = '';
          addEmailTextbox.value = '';
          addAtividadeTextbox = '';
        })
        .catch(error => console.error('Unable to add item.', error));
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

function validarEmail (emailE) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(emailE); 
}

emailE.addEventListener('keyup', () =>{
    if(validarEmail(emailE.value) == false){
        labelEmail.setAttribute('style','color: red');
        labelEmail.innerHTML = "Email *insira um email valido";
        validEmail = false;
    }else{
        labelEmail.setAttribute('style','color: green');
        labelEmail.innerHTML = "Email";
        validEmail = true;
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

    if(validNome == true && validEmail == true){
        msgValidoNome.setAttribute('style', 'display: block');
        msgValidoNome.innerHTML = '<strong>Usuario cadastrado</strong>';
        msgErroNome.setAttribute('style', 'display: none');
        msgErroNome.innerHTML = '';
        msgErroEmail.setAttribute('style', 'display: none');
        msgErroEmail.innerHTML = '';
        addCadastro();
        labelNome.focus();
        setTimeout(()=>{
            location.href = "../cadastro/cadastro.html";
        },3000)
    }else if(validNome == true && validEmail == false){
        msgErroNome.setAttribute('style', 'display: none');
        msgErroNome.innerHTML = '';
        msgErroEmail.setAttribute('style', 'display: block');
        msgErroEmail.innerHTML = '<strong>Preencha o campo email corretamente</strong>';
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
    }else if(validNome == false && validEmail == true){
        msgErroNome.setAttribute('style', 'display: block');
        msgErroNome.innerHTML = '<strong>Preencha o campo nome corretamente</strong>';
        msgValidoNome.setAttribute('style', 'display: none');
        msgValidoNome.innerHTML = '';
        msgErroEmail.setAttribute('style', 'display: none');
        msgErroEmail.innerHTML = '';
    }else{
        msgErroNome.setAttribute('style', 'display: block');
        msgErroNome.innerHTML = '<strong>Preencha o campo nome corretamente</strong>';
        msgValidoNome.setAttribute('style', 'display: none');
        msgValidoNome.innerHTML = '';
        msgErroEmail.setAttribute('style', 'display: block');
        msgErroEmail.innerHTML = '<strong>Preencha o campo email corretamente</strong>';
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
    }
}