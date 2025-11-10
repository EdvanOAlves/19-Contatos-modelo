export async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const response = await fetch(url);
    const contatos = await response.json();
    console.log(contatos);
    return contatos;
}


async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options);

    console.log(response.ok);

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
    console.log(response.ok);
    return (await response).ok;
}

const verdadeiroContato = {
    "nome": "Edvan Alves",
    "celular": "11 9 4002 8922",
    "foto": "https://i.ebayimg.com/images/g/x6IAAOSwl0ZkZ9Ol/s-l1200.jpg",
    "email": "edvansememailbrow@gmail.com",
    "endereco": "Rua Rua"
}

// criarContato(novoContato);
// criarContato(verdadeiroContato);

