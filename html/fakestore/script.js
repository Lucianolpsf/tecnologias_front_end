const container = document.querySelector('.container')

fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(produto=>{     
    produto.forEach(produto => {
        container.innerHTML += `
        <div class="card">
                <h2>${produto.title}</h2>
                <img src="${produto.image}" alt="" class="imagem">
                <p class="descricao">${produto.description}</p>
                <p class="preco">${produto.price}</p>
                <button>Comprar</button>
        </div>
        `
    });    
})