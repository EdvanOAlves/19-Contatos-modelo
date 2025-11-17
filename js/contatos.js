export async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const response = await fetch(url);
    const contatos = await response.json();
    return contatos;
}

export async function lerContatoId(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url);
    const contato = await response.json();
    return contato;
}

export async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options);

    return response.ok;
}

async function deletarContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "DELETE"
    }

    const response = await fetch(url, options);

    return response.ok
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }
    const response = fetch(url, options)
    return (await response).ok;
}

const verdadeiroContato = {
    "nome": "",
    "celular": "",
    "foto": "",
    "email": "",
    "endereco": "",
    "cidade": ""

}

async function cleanUp() {
    const contatos = await lerContatos();
    for (const contato of contatos) {
        if (contato.nome == undefined || contato.nome == null) {
            console.log(contato);
            await deletarContato(contato.id)
        }
    }
};

// cleanUp();

function limpezaArea(inicio, fim) {
    for (let i = inicio; i < fim; i++) {
        deletarContato(i)
    }
}



// 39111213141516
// criarContato(novoContato);
// criarContato(verdadeiroContato);

