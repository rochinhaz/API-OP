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
    var emailPattern =  /^[_a-z0-9A-Z-]+(\.[_a-z0-9A-Z-]+)*@[a-z0-9A-Z-]+(\.[a-z0-9A-Z-]+)*(\.[a-zA-Z]{2,4})$/;
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