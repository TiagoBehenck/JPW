let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) { 
    let imprimeProduto = (nome,preco) => {
        console.log(`Produto: ${carrinho.nome} | Preço: ${carrinho.preco}`);
    }
})

/* function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
} 
*/
