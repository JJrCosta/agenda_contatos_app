const atualizaForm = document.querySelector('form-add');
const nomeContato  = document.getElementById('nome-contato');
const phoneContato  = document.getElementById('phone');

atualizaForm.addEventListener('submit', function (e) {
    e.preventDefault()
    alert(phoneContato.value)
});

function validaNome() {
    
}

function criaLinha() {
    nomeContato.value 
    phoneContato.value
}
