# patrimonio_aula05

# Descrição

Descrição do Projeto — API de Controle de Inventário
1. Introdução

O projeto consiste no desenvolvimento de um backend RESTful para auxiliar uma empresa no controle e gerenciamento de seu inventário de patrimônio.

A necessidade do sistema surgiu devido à utilização de registros manuais para controlar os bens da empresa, o que pode dificultar tarefas como cadastro, consulta, atualização e exclusão de informações.

Para solucionar esse problema, foi desenvolvida uma API capaz de receber requisições HTTP e realizar as principais operações de gerenciamento dos registros. Nesta primeira versão, não é utilizado um banco de dados. As informações são armazenadas temporariamente em um arquivo no formato JSON, que funciona como uma base de dados simples.

A aplicação foi desenvolvida utilizando Node.js e Express, seguindo o padrão de uma API REST.

2. Objetivo

O principal objetivo do projeto é desenvolver uma aplicação backend simples que permita controlar os itens pertencentes ao inventário de uma empresa.

A API possibilita:

Cadastrar novos itens;
Listar todos os itens cadastrados;
Consultar um item específico através de seu ID;
Atualizar as informações de um item;
Excluir um item do inventário;
Armazenar as informações em um arquivo JSON;
Retornar respostas no formato JSON;
Utilizar códigos HTTP adequados para indicar o resultado das operações.
3. Tecnologias utilizadas

Para o desenvolvimento da aplicação foram utilizadas as seguintes tecnologias:

Node.js

O Node.js é utilizado como ambiente de execução do JavaScript no backend. Ele permite executar o código da aplicação no servidor e receber requisições HTTP.

Express

O Express é um framework para Node.js utilizado para facilitar a criação da API. Ele permite configurar as rotas, receber requisições, processar os dados enviados pelo cliente e retornar respostas.

JavaScript

A linguagem JavaScript é utilizada para desenvolver toda a lógica do backend, incluindo as operações de cadastro, consulta, atualização e exclusão dos registros.

JSON

O formato JSON é utilizado para armazenar os dados dos patrimônios. O arquivo inventario.json funciona como uma pequena base de dados para a aplicação.

File System

O módulo fs, disponibilizado pelo próprio Node.js, é utilizado para realizar a leitura e a escrita do arquivo JSON.

Por meio dele, a aplicação consegue:

Ler os registros existentes;
Adicionar novos registros;
Atualizar registros;
Excluir registros;
Salvar as alterações no arquivo.
4. Estrutura do projeto

O projeto foi organizado de maneira a separar as responsabilidades de cada parte da aplicação.

aula05/
│
├── dados/
│   └── inventario.json
│
├── servidor/
│   ├── controllers/
│   │   └── inventarioController.js
│   │
│   ├── routes/
│   │   └── inventarioRoutes.js
│   │
│   └── server.js
│
├── package.json
│
└── README.md

Pasta dados

A pasta dados é responsável por armazenar o arquivo que contém os registros do inventário.

O arquivo utilizado é:

inventario.json


Ele contém uma lista de objetos, sendo que cada objeto representa um patrimônio cadastrado.

Pasta controllers

A pasta controllers contém a lógica responsável pelas operações realizadas sobre os patrimônios.

O arquivo:

inventarioController.js


é responsável por:

Ler o arquivo JSON;
Salvar os dados no arquivo;
Listar patrimônios;
Buscar patrimônios por ID;
Criar novos patrimônios;
Atualizar patrimônios;
Excluir patrimônios;
Tratar erros das operações.
Pasta routes

A pasta routes contém as rotas da API.

O arquivo:

inventarioRoutes.js


define quais métodos HTTP serão utilizados para cada operação.

Arquivo server.js

O arquivo server.js é responsável por iniciar a aplicação.

Nele são configurados:

O Express;
O processamento de JSON;
As rotas da aplicação;
A porta do servidor;
O tratamento de rotas inexistentes.
5. Estrutura dos dados

Cada patrimônio possui os seguintes atributos:

{
  "id": 1,
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}

id

É o identificador único do registro.

Esse valor é utilizado para localizar um patrimônio específico dentro do inventário.

Por exemplo:

/inventario/1


representa o patrimônio que possui id igual a 1.

O ID é gerado automaticamente quando um novo item é cadastrado.

item

Representa o nome ou a descrição do patrimônio.

Exemplo:

Notebook Dell

local

Indica o local onde o patrimônio está armazenado ou instalado.

Exemplo:

Laboratório 01

dataRegistro

Indica a data em que o patrimônio foi cadastrado.

O projeto utiliza o formato:

AAAA-MM-DD


Exemplo:

2026-09-10

valor

Representa o valor financeiro do patrimônio.

Exemplo:

3500.00

patrimonio

Representa o número de patrimônio associado ao item.

Exemplo:

PAT-00125


Esse código permite identificar o bem dentro do controle patrimonial da empresa.

6. Funcionamento da API

A aplicação utiliza o padrão REST, utilizando métodos HTTP para representar as operações realizadas sobre os recursos.

O recurso principal da aplicação é:

/inventario


As operações são realizadas utilizando os métodos:

POST para criar;
GET para consultar;
PUT para atualizar;
DELETE para excluir.
7. Cadastro de patrimônio — POST

Para cadastrar um novo patrimônio, é utilizada a rota:

POST /inventario


O cliente envia os dados no corpo da requisição em formato JSON.

Exemplo:

{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}


O sistema verifica se os campos obrigatórios foram enviados.

Em seguida, calcula um novo ID, adiciona o patrimônio à lista e salva os dados no arquivo inventario.json.

Quando a operação é realizada com sucesso, a API retorna o código:

201 Created


junto com os dados do patrimônio criado.

8. Listagem de patrimônios — GET

Para consultar todos os patrimônios cadastrados, utiliza-se:

GET /inventario


A API lê o arquivo inventario.json e retorna todos os registros encontrados.

Exemplo:

[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-10",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Tablet Samsung",
    "local": "Loja de tablets",
    "dataRegistro": "2026-08-10",
    "valor": 40000,
    "patrimonio": "PAT-00126"
  }
]


Em caso de sucesso, a API retorna:

200 OK

9. Consulta de patrimônio específico — GET

Também é possível consultar somente um patrimônio utilizando seu ID.

A rota utilizada é:

GET /inventario/:id


Por exemplo:

GET /inventario/1


O sistema procura no arquivo JSON um registro cujo ID seja igual a 1.

Se o patrimônio existir, ele será retornado.

Caso não exista, a API retorna:

404 Not Found


com uma mensagem informando que o patrimônio não foi encontrado.

Exemplo:

{
  "erro": "Patrimônio não encontrado."
}


Esse tratamento é importante porque informa corretamente ao cliente que o recurso solicitado não existe.

10. Atualização de patrimônio — PUT

A atualização é realizada utilizando:

PUT /inventario/:id


Por exemplo:

PUT /inventario/1


O cliente envia os novos dados:

{
  "item": "Notebook Dell Inspiron",
  "local": "Laboratório 02",
  "dataRegistro": "2026-09-10",
  "valor": 4200.00,
  "patrimonio": "PAT-00125"
}


O sistema procura o patrimônio pelo ID e substitui os dados antigos pelos novos.

O ID não é alterado.

Depois da atualização, o arquivo inventario.json também é atualizado.

Caso o patrimônio não exista, a API retorna:

404 Not Found

11. Exclusão de patrimônio — DELETE

Para excluir um patrimônio, utiliza-se:

DELETE /inventario/:id


Por exemplo:

DELETE /inventario/1


O sistema procura o registro pelo ID e remove o item da lista.

Depois disso, o arquivo inventario.json é atualizado para que o registro também deixe de existir no arquivo.

Quando a exclusão é realizada com sucesso, a API retorna:

200 OK


Caso o ID informado não exista, retorna:

404 Not Found

12. Persistência dos dados

Apesar de o projeto não utilizar um banco de dados, os dados não ficam somente na memória da aplicação.

O arquivo:

dados/inventario.json


é utilizado como fonte de armazenamento.

Quando ocorre uma alteração, o sistema grava novamente o conteúdo no arquivo.

Por exemplo, quando um novo patrimônio é cadastrado:

Cliente
   ↓
POST /inventario
   ↓
Express
   ↓
Controller
   ↓
inventario.json


O mesmo acontece nas operações de atualização e exclusão.

Isso permite que os dados permaneçam armazenados no arquivo mesmo depois que o servidor for encerrado e iniciado novamente.
