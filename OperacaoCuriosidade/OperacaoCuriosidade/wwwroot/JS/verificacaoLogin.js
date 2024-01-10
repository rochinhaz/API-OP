var email = document.getElementById('lemail');
var senha = document.getElementById('lsenha');
var validEmail = false;
var validSenha = false;

let msgErro = document.getElementById('msgErro');
let msgValido = document.getElementById('msgValido');

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

senha.addEventListener('keyup', () =>{

    if(senha.value.length <=6 ){
        senha.setAttribute('style','background-color: rgba(245, 125, 125, 0.815)');
        validSenha = false;
    }else{
        senha.setAttribute('style','background-color: rgba(120, 247, 120, 0.808)');
        validSenha = true;
    }
})