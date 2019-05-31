# Projeto Final - Parte 1 - Backend 
## [REPOSITÓRIO](https://github.com/TiagoBehenck/Trabalho-JPW)

Requisitos Obrigatórios

- O tema do projeto é livre
- Deve conter API rest para todo o fluxo de cadastro (inserção, alteração, exclusão e consulta) de no mínimo 2 entidades
  -  Exemplo: Cliente e Titulo de um sistema de contas, Cliente e Locação de um sistema de locação, Proprietário e Animal de um sistema para controle de pets
- Deve conter algum relatório, acessível via API, que exporte dados retornando um arquivo em formato csv para download
  - Exemplo: dados do proprietário e do animal do sistema de controle de pet
    - codigo do proprietário;nome proprietário;cpf;nome do animal;data nascimento do animal; ultima visita no petshop
- Deve conter alguma lógica que utilize dados externos acessados via API.
  - Exemplo: No sistema de título pode receber o título em dolar e traduzir para real consultando a cotação em uma api externa
- Deve conter alguma consulta com consolide dados inseridos retornando um json com o resultado via api.
  - Exemplo: Total gasto vs total recebido por dia no sistema de contas
- Deve-se utilizar NeDB gravando os dados em json
- O projeto será desenvolvido individualmente
- Ambiente preparado para validar as requisições - Postman, Swagger ou similar
- Utilização de códigos HTTP e padrões de restful baseado na [documentação](https://www.restapitutorial.com/)

Diferenciais:

- Gestão de usuário com rotas de login e autenticação
- Relacionamento entre 

# Projeto Final - Parte 2 - Frontend
## [REPOSITÓRIO](https://github.com/TiagoBehenck/Trabalho-JPW-FrontEnd)

Requisitos Obrigatórios

- O mesmo tema do projeto de backend
- Deve consumir a API do fluxo de cadastro (inserção, alteração, exclusão e consulta) para as 2 entidades criar uma ou mais telas para as operações do cadastro
- Deve conter um link para fazer download do relatório, consumindo a API do backend
- Deve conter uma tela para mostrar a consulta consolidada consumindo a api criada no backend.
- O projeto será desenvolvido individualmente
- Ambiente deve rodando frontend e backend integrados
- Tratar os códigos http de erro mostrando mensagens apropriadas
