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

function logar(){

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

    if(validEmail == true && validSenha == true){
        setTimeout(()=>{
            location.href = "../index/index.html";
        },1000)
    }

}