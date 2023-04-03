const listaNomesContatos = [];
const listaTelContatos = [];
let linhas = '';

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    criaLinha()
    adicionaLinha()
});

function criaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const phoneContato = document.getElementById('phone');
    
    if (listaTelContatos.includes(phoneContato.value)) {
        alert('Telefone já cadastrado.')
    } else {
        listaNomesContatos.push(nomeContato.value);
        listaTelContatos.push(phoneContato.value);

        let linha = '<tr>';
        linha += `<td>${(nomeContato.value).trim()}</td>`;
        linha += `<td>${phoneContato.value}</td>`;
        linha += `<td><a id="tabela-icon" href="tel:+55${(phoneContato.value).split(' ').join('')}"><img src="./img/btn-icon.png" alt="Chamar" title="Chamar"></a></td>`;

        linhas += linha;
    }

    nomeContato.value = '';
    phoneContato.value = '';
}

function adicionaLinha() {
    const novaLinha = document.getElementById('tabela');
    novaLinha.innerHTML = linhas;
}
