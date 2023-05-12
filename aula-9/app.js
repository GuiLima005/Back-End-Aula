/****************************************************************************
 * Objetivo: Criar uma API para interagir com Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ****************************************************************************/

/*************************************************************************
    Para realizar a conexão com Banco de Dados iremos utilizar o PRISMA
    
    npm install prisma --save
    npx prisma 
    npx prisma init 
    npm install @prisma/client

***************************************************************************/

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

    // Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
    const bodyJSON = bodyParser.json()

    // Import da controller do Aluno
    var controllerAluno = require('./controller/controller_aluno.js')
    // const controller_aluno = require('./controller/controller_aluno.js')

    var message = require('./controller/modulo/config')

// EndPoint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    // Solicita a controller que retorne todos os alunos do BD (banco de dados)
    let dados = await controllerAluno.selecionarTodosAluno()

    response.status(dados.status)
    response.json(dados)

})

// EndPoint: Retorna dados do aluno pelo ID 
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    
    // Recebe o ID enviado na requisão
    let IdAluno = request.params.id

    // Solicita a controller que retorne todos os alunos do BD (banco de dados)
    let dados = await controllerAluno.buscarIdAluno(IdAluno)

    response.status(dados.status)
    response.json(dados)

})

// EndPoint: Inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function (request, response) {

    let contentType = request.headers['content-type']

    // Verificar o contentType
    if (String(contentType).toLowerCase() == 'application/json') {
        
    // Recebe os dados encaminhados da requisição
    let dadosBody = request.body   
    
    // Verificar se os dados estão chegando
    // console.log(dadosBody);

    // Envia os dados para a controller
    let resultInsertDados = await controllerAluno.inserirAluno(dadosBody)    

    // Retorna o status code e a message
    response.status(resultInsertDados.status)
    response.json(resultInsertDados)

    } else {
        response.status(message.ERRO_INVALID_CONTENT_TYPE.status)
        response.json(message.ERRO_INVALID_CONTENT_TYPE)

    }

    console.log(contentType);
    

})

// EndPoint: Atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function (request, response) {

    // Recebe os dados do body
    let dadosBody = request.body

    // Recebe o ID do aluno
    let idAluno = request.params.id

    // Encaminha os dados para serem atualizados
    let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody, idAluno)

    response.status(resultUpdateDados.status)
    response.json(resultUpdateDados)



})

// EndPoint: Exclui um aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    // Recebe o ID do aluno
    let idAluno = request.params.id

    // Encaminha o ID para ser deletado
    let resultDeleteDados = await controllerAluno.deletarAluno(idAluno)

    response.status(resultDeleteDados.status)
    response.json(resultDeleteDados)
})

// Permite carregar os endpoint criados e aguadar as requisições
// pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando a requisição da porta 8080!');
})