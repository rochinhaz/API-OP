const uri = 'https://localhost:7149/api/Usuario';

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

    if(validSenha == true && validSenhaConfirma == true){
        msgValidoSenha.setAttribute('style', 'display: block');
        msgValidoSenha.innerHTML = '<strong>Senha Valida e iguais</strong>';
        msgErroSenha.setAttribute('style', 'display: none');
        msgErroSenha.innerHTML = '';
        msgErroSenhaConfirma.setAttribute('style', 'display: none');
        msgErroSenhaConfirma.innerHTML = '';
        msgValidoSenhaConfirma.setAttribute('style', 'display: none');
        msgValidoSenhaConfirma.innerHTML = '';
    }else if(validSenha == true && validSenhaConfirma == false){
        msgValidoSenha.setAttribute('style', 'display: block');
        msgValidoSenha.innerHTML = '<strong>Senha Valida</strong>';
        msgErroSenha.setAttribute('style', 'display: none');
        msgErroSenha.innerHTML = '';
        msgErroSenhaConfirma.setAttribute('style', 'display: block');
        msgErroSenhaConfirma.innerHTML = '<strong>As senhas são diferentes</strong>';
        msgValidoSenhaConfirma.setAttribute('style', 'display: none');
        msgValidoSenhaConfirma.innerHTML = '';
    } else{
        msgErroSenha.setAttribute('style', 'display: block');
        msgErroSenha.innerHTML = '<strong>Coloque uma senha válida</strong>';
        msgValidoSenha.setAttribute('style', 'display: none');
        msgValidoSenha.innerHTML = '';
        msgValidoSenhaConfirma.setAttribute('style', 'display: none');
        msgValidoSenhaConfirma.innerHTML = '';
        msgErroSenhaConfirma.setAttribute('style', 'display: none');
        msgErroSenhaConfirma.innerHTML = '';
    }

    if(validEmail == true && validEmailConfirma == true){
        msgValidoEmail.setAttribute('style', 'display: block');
        msgValidoEmail.innerHTML = '<strong>Email válido e confirmado</strong>';
        msgErroEmail.setAttribute('style', 'display: none');
        msgErroEmail.innerHTML = '';
        msgValidoEmailConfirma.setAttribute('style', 'display: none');
        msgValidoEmailConfirma.innerHTML = '';
        msgErroEmailConfirma.setAttribute('style', 'display: none');
        msgErroEmailConfirma.innerHTML = '';
    }else if(validEmail == true && validEmailConfirma == false){
        msgValidoEmail.setAttribute('style', 'display: block');
        msgValidoEmail.innerHTML = '<strong>Email válido</strong>';
        msgErroEmail.setAttribute('style', 'display: none');
        msgErroEmail.innerHTML = '';
        msgErroEmailConfirma.setAttribute('style', 'display: block');
        msgErroEmailConfirma.innerHTML = '<strong>Os emails são diferentes</strong>';
        msgValidoEmailConfirma.setAttribute('style', 'display: none');
        msgValidoEmailConfirma.innerHTML = '';
    }
    
    else{
        msgErroEmail.setAttribute('style', 'display: block');
        msgErroEmail.innerHTML = '<strong>Coloque um email válido</strong>';
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
        msgErroEmailConfirma.setAttribute('style', 'display: none');
        msgErroEmailConfirma.innerHTML = '';
        msgValidoEmailConfirma.setAttribute('style', 'display: none');
        msgValidoEmailConfirma.innerHTML = '';
    }

    if(validEmail == true && validSenha == true && validEmailConfirma == true && validSenhaConfirma == true && validNome == true){
        addUsuario();
        setTimeout(()=>{
            location.href = "../login/login.html";
        },1000)
    }

}

function addUsuario(){
    let addEmailTextbox = document.getElementById('lemail');
    let addSenhaTextbox = document.getElementById('lsenha');
    let addNomeTextbox = document.getElementById('lnome')
    const  usuario = {
        nome: addNomeTextbox.value.trim(),
        email: addEmailTextbox.value.trim(),
        senha: addSenhaTextbox.value.trim()
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
          addNomeTextbox.value = '';
          addEmailTextbox.value = '';
          addSenhaTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}