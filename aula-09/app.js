/****************************************************************************
 * Objetivo: Criar uma API para interagir com Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ****************************************************************************/

/*
    Para realizar a conexão com Banco de Dados iremos utilizar o PRISMA
    
    npm install prisma --save
    npx prisma 
    npx prisma init 
    npm install @prisma/client

*/

// Import das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request, response } = require('express')

//Criar o objeto app utilizando a classe do express
const app = express()

app.use((request, response, next) => {

    // Permissões de origem da requisão
    response.header('Acces-Control-Allow-Origin', '*')

    // Permissões de metodos que serão utilizados na API
    response.header('Acces-Control-Allow-Origin', 'GET, POST, PUT, DELETE, OPTIONS')

    //Define as permissões para o cors
    app.use(cors())

    //Continua para a leitura dos EndPoints
    next()
})

/****************************************************************************
* EndPoint: Tabela de aluno
* Versão: 1.0
* Data: 14/04/2023
****************************************************************************/

    // EndPoint: Retorna todos os dados de alunos 
    app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    })

    // EndPoint: Retorna dados do aluno pelo ID 
    app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })

    //CRUD (Create, Read, Update e Delete)

    // EndPoint: Inserir um novo aluno
    app.post('/v1/lion-school/aluno', cors(), async function (request, response) {

    })

    // EndPoint: Atualiza um aluno pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })

    // EndPoint: Exclui um aluno pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })