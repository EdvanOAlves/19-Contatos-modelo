'use strict'

// Requisição de dados
import {lerContatos} from "./contatos.js"
const dados = await lerContatos();

const container = document.getElementById('container');



const carregarContato = function(srcContato){
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
    if (srcContato.foto == undefined){
        srcContato.foto = "https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg";
    }
    contatoImg.src = srcContato.foto;
    
    //Append
    container.appendChild(cardContato);
    cardContato.appendChild(contatoImg);
    cardContato.appendChild(contatoNome);
    cardContato.appendChild(contatoNumero);
}

const carregarLista = function(){
    console.log(dados)
    dados.forEach(carregarContato);
}

carregarLista();