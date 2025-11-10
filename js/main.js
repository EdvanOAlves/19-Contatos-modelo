'use strict'

// Requisição de dados
import { criarContato, lerContatos } from "./contatos.js"
const dados = await lerContatos();

const container = document.getElementById('container');
const main = document.getElementById('main');

// Botões de navegação formulário
const buttonNovoContato = document.getElementById('novo-contato');
const buttonCancelar = document.getElementById('cancelar');
const buttonSalvar = document.getElementById('salvar');
const buttonDeletar = document.getElementById('deletar');

buttonNovoContato.addEventListener('click', () => abrirFormulario());
buttonCancelar.addEventListener('click', () => fecharFormulario());
buttonSalvar.addEventListener('click', () => cadastrarContato());

// Campos do formulário
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputCelular = document.getElementById('celular');
const inputEndereco = document.getElementById('endereco');
const inputCidade = document.getElementById('cidade');

const carregarContato = function (srcContato) {
    // Iniciando elementos
    const cardContato = document.createElement('div');
    const contatoImg = document.createElement('img');
    const contatoNome = document.createElement('h3');
    const contatoNumero = document.createElement('p');

    //Atribuindo classe
    cardContato.classList.add('card-contato');

    //Importando conteudo
    contatoNome.textContent = srcContato.nome;
    contatoNumero.textContent = srcContato.celular;
    // Tratativa de imagem
    if (srcContato.foto == undefined) {
        srcContato.foto = "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg";
    }
    contatoImg.src = srcContato.foto;

    //Append
    container.appendChild(cardContato);
    cardContato.appendChild(contatoImg);
    cardContato.appendChild(contatoNome);
    cardContato.appendChild(contatoNumero);
}

const carregarLista = function () {
    console.log(dados)
    dados.forEach(carregarContato);
}

function cadastrarContato() {
    const contato = {
        nome : inputNome.value,
        celular : inputCelular.value,
        email : inputEmail.value,
        endereco : inputEndereco.value,
        cidade : inputCidade.value
    }
    console.log(contato);
    criarContato(contato);
    fecharFormulario();
}

function abrirFormulario() {
    main.classList.remove('card-show');
    main.classList.add('form-show');
}
function fecharFormulario() {
    carregarLista();
    main.classList.remove('form-show');
    main.classList.add('card-show');
}

carregarLista();