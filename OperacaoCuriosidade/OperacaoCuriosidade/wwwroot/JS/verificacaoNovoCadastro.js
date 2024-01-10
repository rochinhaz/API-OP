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
    var emailPattern =  /^[_a-z0-9A-Z-]+(\.[_a-z0-9A-Z-]+)*@[a-z0-9A-Z-]+(\.[a-z0-9A-Z-]+)*(\.[a-zA-Z]{2,4})$/;
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

/*function getDuplicidadeEmail(){
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        
        for(let i=0; i<data.length; i++){
            if(emailE.value == data[i].email){
                return emailRepetido()
            }else{
                return emailNaoRepetido()
            }
        }
    })
    .catch(error => console.error('Unable to get items.',error))
}

function emailRepetido(){
    unicoEmail = false
}

function emailNaoRepetido(){
    unicoEmail = true
}*/
