function montaEnderecoCompleto (rua, cidade, numero, cep) {
    return `${rua}, ${numero} - ${cidade}, ${cep}`;
}

console.log(montaEnderecoCompleto('Rua', 'Cidade', '1234', '12345-678'));