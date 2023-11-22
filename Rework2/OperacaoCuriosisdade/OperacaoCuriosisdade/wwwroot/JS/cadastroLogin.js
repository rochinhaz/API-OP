const uri = 'https://localhost:7265/api/Usuario';

var nome = document.getElementById('lnome');
var email = document.getElementById('lemail');
var senha = document.getElementById('lsenha');
var emailConfirma = document.getElementById('cemail');
var senhaConfirma = document.getElementById('csenha');
var validEmail = false;
var validSenha = false;
var validEmailConfirma = false;
var validSenhaConfirma = false;
var validNome = false;

let msgErroNome = document.getElementById('msgErroNome');
let msgValidoNome = document.getElementById('msgValidoNome');
let msgErroSenha = document.getElementById('msgErroSenha');
let msgValidoSenha = document.getElementById('msgValidoSenha');
let msgErroEmail = document.getElementById('msgErroEmail');
let msgValidoEmail = document.getElementById('msgValidoEmail');
let msgErroSenhaConfirma = document.getElementById('msgErroSenhaConfirma');
let msgValidoSenhaConfirma = document.getElementById('msgValidoSenhaConfirma');
let msgErroEmailConfirma = document.getElementById('msgErroEmailConfirma');
let msgValidoEmailConfirma = document.getElementById('msgValidoEmailConfirma');

nome.addEventListener('keyup', () =>{

    if(nome.value.length<3){
        nome.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validNome = false;
    }else{
        nome.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validNome = true;
    }
})

function validarEmail (email) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailPattern.test(email); 
  }

email.addEventListener('keyup', () =>{

    if(validarEmail(email.value) == false ){
        email.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validEmail = false;
    }else{
        email.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validEmail = true;
    }
})

emailConfirma.addEventListener('keyup', () =>{

    if(email.value == emailConfirma.value){
        emailConfirma.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validEmailConfirma = true;
    }else{
        emailConfirma.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validEmailConfirma = false;
    }
})

senha.addEventListener('keyup', () =>{

    if(senha.value.length <=6 ){
        senha.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validSenha = false;
    }else{
        senha.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validSenha = true;
    }
})

senhaConfirma.addEventListener('keyup', () =>{

    if(senha.value == senhaConfirma.value){
        senhaConfirma.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validSenhaConfirma = true;
    }else{
        senhaConfirma.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validSenhaConfirma = false;
    }
})

function cadastrar(){

    if(validNome == true){
        msgValidoNome.setAttribute('style', 'display: block');
        msgValidoNome.innerHTML = '<strong>Nome Valido</strong>';
        msgErroNome.setAttribute('style', 'display: none');
        msgErroNome.innerHTML = '';
    }else{
        msgErroNome.setAttribute('style', 'display: block');
        msgErroNome.innerHTML = '<strong>Coloque um nome Valido</strong>';
        msgValidoNome.setAttribute('style', 'display: none');
        msgValidoNome.innerHTML = '';
    }

    if(validSenha == true){
        msgValidoSenha.setAttribute('style', 'display: block');
        msgValidoSenha.innerHTML = '<strong>Senha Valida</strong>';
        msgErroSenha.setAttribute('style', 'display: none');
        msgErroSenha.innerHTML = '';
    }else{
        msgErroSenha.setAttribute('style', 'display: block');
        msgErroSenha.innerHTML = '<strong>Coloque uma senha válida</strong>';
        msgValidoSenha.setAttribute('style', 'display: none');
        msgValidoSenha.innerHTML = '';
    }

    if(validSenhaConfirma == true){
        msgValidoSenhaConfirma.setAttribute('style', 'display: block');
        msgValidoSenhaConfirma.innerHTML = '<strong>Senhas são iguais</strong>';
        msgErroSenhaConfirma.setAttribute('style', 'display: none');
        msgErroSenhaConfirma.innerHTML = '';
    }else{
        msgErroSenhaConfirma.setAttribute('style', 'display: block');
        msgErroSenhaConfirma.innerHTML = '<strong>As senhas são diferentes</strong>';
        msgValidoSenhaConfirma.setAttribute('style', 'display: none');
        msgValidoSenhaConfirma.innerHTML = '';
    }

    if(validEmail == true){
        msgValidoEmail.setAttribute('style', 'display: block');
        msgValidoEmail.innerHTML = '<strong>Email válido</strong>';
        msgErroEmail.setAttribute('style', 'display: none');
        msgErroEmail.innerHTML = '';
    }else{
        msgErroEmail.setAttribute('style', 'display: block');
        msgErroEmail.innerHTML = '<strong>Coloque um email válido</strong>';
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValido.innerHTML = '';
    }

    if(validEmailConfirma == true){
        msgValidoEmailConfirma.setAttribute('style', 'display: block');
        msgValidoEmailConfirma.innerHTML = '<strong>Os emails são iguais</strong>';
        msgErroEmailConfirma.setAttribute('style', 'display: none');
        msgErroEmailConfirma.innerHTML = '';
    }else{
        msgErroEmailConfirma.setAttribute('style', 'display: block');
        msgErroEmailConfirma.innerHTML = '<strong>Os emails são diferentes</strong>';
        msgValidoEmailConfirma.setAttribute('style', 'display: none');
        msgValidoConfirma.innerHTML = '';
    }

    if(validEmail == true && validSenha == true && validEmailConfirma == true && validSenhaConfirma == true && validNome == true){
        addUsuario();
        /*setTimeout(()=>{
            location.href = "../login/login.html";
        },1000)*/
    }

}

function addUsuario(){
    const addEmailTextbox = document.getElementById('lemail');
    const addSenhaTextbox = document.getElementById('lsenha');
    debugger
    const  usuario = {        
        email: addEmailTextbox.value.trim(),
        senha: addSenhaTextbox.value.trim(),
        cadastro: ""
    };

    fetch(uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      })
        .then(response => response.json())
        .then(() => {          
          addEmailTextbox.value = '';
          addSenhaTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}