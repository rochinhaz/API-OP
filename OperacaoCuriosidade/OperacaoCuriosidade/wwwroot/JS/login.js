const uri = 'https://localhost:7149/api/';
var nomeUsuario = document.getElementById('nomeUsuario');

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
        msgValidoEmail.innerHTML = '';
    }

    if(validEmail == true && validSenha == true){
        getUsuario();
    }

}

function getUsuario(){
    fetch(`${uri}Usuario/LOGIN?Email=${email.value}&Senha=${senha.value}`)
    .then(response => response.json())
    .then(dataUser => verificarUsuario(dataUser))
    .catch(error => console.error('Unable to get items.',error))
}

function verificarUsuario(dataUser){
    
    if(dataUser.length != 0){
        localStorage.setItem('usuarioLogado', JSON.stringify(dataUser));
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
        msgValidoSenha.setAttribute('style', 'display: none');
        msgValidoSenha.innerHTML = '';
        msgValidoUsuario.setAttribute('style', 'display: block');
        msgValidoUsuario.innerHTML = '<strong>Usuario valido</strong>';
        msgErroUsuario.setAttribute('style', 'display: none');
        msgErroUsuario.innerHTML = '';
        setTimeout(()=>{
            location.href = "../index/index.html";
        },1000)
    }else{
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
        msgValidoSenha.setAttribute('style', 'display: none');
        msgValidoSenha.innerHTML = '';
        msgErroUsuario.setAttribute('style', 'display: block');
        msgErroUsuario.innerHTML = '<strong>Usuario não cadastrado</strong>';
        msgValidoUsuario.setAttribute('style', 'display: none');
        msgValidoUsuario.innerHTML = '';
    }

}

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
nomeUsuario.innerHTML = usuarioLogado[0].nome