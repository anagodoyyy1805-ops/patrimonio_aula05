# patrimonio_aula05

# Descrição

## 1. Introdução

O projeto consiste no desenvolvimento de um backend RESTful para auxiliar uma empresa no controle e gerenciamento de seu inventário de patrimônio.

A necessidade do sistema surgiu devido à utilização de registros manuais para controlar os bens da empresa, o que pode dificultar tarefas como cadastro, consulta, atualização e exclusão de informações.

Para solucionar esse problema, foi desenvolvida uma API capaz de receber requisições HTTP e realizar as principais operações de gerenciamento dos registros.

Nesta primeira versão, não é utilizado um banco de dados. As informações são armazenadas em um arquivo no formato JSON, que funciona como uma base de dados simples.

A aplicação foi desenvolvida utilizando Node.js e Express, seguindo os princípios de uma API REST.

## 2. Objetivo

O principal objetivo do projeto é desenvolver uma aplicação backend simples para controlar os itens pertencentes ao inventário de uma empresa.

# Cadastrar novos itens;
# Listar todos os itens cadastrados;
# Consultar um item específico através do seu ID;
# Atualizar as informações de um item;
# Excluir um item do inventário;
# Armazenar as informações em um arquivo JSON;
# Retornar respostas no formato JSON;
# Utilizar códigos HTTP adequados para indicar sucesso ou erro.

## 3. Tecnologias utilizadas

## Node.js

O Node.js é utilizado como ambiente de execução do JavaScript no backend. Ele permite executar o código da aplicação no servidor e receber requisições HTTP.

## Express

O Express é um framework para Node.js utilizado para facilitar a criação da API.

# Ele é responsável por:

Configurar as rotas;
Receber requisições HTTP;
Processar os dados enviados pelo cliente;
Retornar respostas;
Organizar o funcionamento da API.
JavaScript

A linguagem JavaScript é utilizada para desenvolver toda a lógica do backend, incluindo as operações de cadastro, consulta, atualização e exclusão dos registros.

## JSON

O formato JSON (JavaScript Object Notation) é utilizado para armazenar os dados dos patrimônios.

O arquivo inventario.json funciona como uma pequena base de dados para a aplicação.

## File System (fs)

O módulo fs, disponibilizado pelo próprio Node.js, é utilizado para realizar a leitura e a escrita do arquivo JSON.

# Por meio dele, a aplicação consegue:

Ler os registros existentes;
Adicionar novos registros;
Atualizar registros;
Excluir registros;
Salvar as alterações no arquivo.

## Evidências: 

![foto1](./foto1)
![foto2](./foto2)
![foto3](./foto3)
![foto4](./foto4)
![foto5](./foto5)
![foto6](./foto6)
![foto7](./foto7)
![foto8](./foto8)

