'use strict'

// Requisição de dados
import {lerContatos} from "./contatos.js"
const dados = await lerContatos();

const container = document.getElementById('container');

{/* <div class="card-contato">
            <img src="./img/avatar1.avif" alt="">
            <h3>Ana Clara</h3>
            <p>(11) 91234002</p>
        </div> */}

const carregarContato = function(srcContato){
    // Iniciando elementos
    const cardContato = document.createElement('div');
    const contatoImg = document.createElement('img');
    const contatoNome = document.createElement('h3');
    const contatoNumero = document.createElement('p');

    //Atribuindo classe
    cardContato.classList.add('card-contato');

    //Importando conteudo
    contatoImg.src = srcContato.foto;
    contatoNome.textContent = srcContato.nome;
    contatoNumero.textContent = srcContato.celular;
    
    //Append
    container.appendChild(cardContato);
    cardContato.appendChild(contatoImg, contatoNome, contatoNumero);
}

const carregarLista = function(){
    console.log(dados)
    dados.forEach(carregarContato);
}

carregarLista();