const uri = 'https://localhost:7149/api/Cadastro';

function addCadastro(){
    atividadeValor = atividadeButton.checked ? "Ativo" : "Inativo";
    let addNomeTextbox = document.getElementById('inome');
    let addEmailTextbox = document.getElementById('iemail');
    let addAtividadeTextbox = atividadeValor;
    let addIdadeTextbox = document.getElementById('iidade');
    let addEnderecoTextbox = document.getElementById('iendereco');
    let addOutrasInfoTextbox = document.getElementById('ioutrasinfo');
    let addInteressesTextbox = document.getElementById('iinteresses');
    let addSentimentosTextbox = document.getElementById('isentimentos');
    let addValoresTextbox = document.getElementById('ivalores');
    const  cadastro = {
        nome: addNomeTextbox.value.trim(),
        email: addEmailTextbox.value.trim(),
        atividade: addAtividadeTextbox,
        idade: addIdadeTextbox.value.trim(),
        endereco: addEnderecoTextbox.value.trim(),
        outrasInformacoes: addOutrasInfoTextbox.value,
        interesses: addInteressesTextbox.value,
        sentimentos: addSentimentosTextbox.value,
        valores: addValoresTextbox.value,

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
          addIdadeTextbox.value = '';
          addEnderecoTextbox.value = '';
          addOutrasInfoTextbox.value = '';
          addInteressesTextbox.value = '';
          addSentimentosTextbox.value = '';
          addValoresTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
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
    }/*else if(validNome == true && validEmail == true && unicoEmail == false){
        msgErroNome.setAttribute('style', 'display: none');
        msgErroNome.innerHTML = '';
        msgErroEmail.setAttribute('style', 'display: block');
        msgErroEmail.innerHTML = '<strong>Email ja cadastrado</strong>';
        msgValidoEmail.setAttribute('style', 'display: none');
        msgValidoEmail.innerHTML = '';
    }*/else if(validNome == true && validEmail == false){
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