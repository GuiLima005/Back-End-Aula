/********************************************************************
* Objetivo: Implementa a regra de negócio entre o app e a model
* Data: 24/04/2023
* Autor: Guilherme Lima
* Versão: 1.0
*********************************************************************/

    // Import do arquivo de acesso a BD (banco de dados)
    var alunoDAO = require('../model/DAO/alunoDAO.js')

    // Import do arquivo global de configurações do projetos
    var message = require('./modulo/config.js')

// Função para receber os dados do APP e enviar para a Model para inserir um novo item
const inserirAluno = async function(dadosAluno) {

    // Validação dos dados
    if (dadosAluno.nome            == '' || dadosAluno.nome             == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf              == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg               == undefined || dadosAluno.rg.length       > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento  == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email            == undefined || dadosAluno.email           > 250 

    ) {
      return message.ERRO_REQUIRED_DATA
    } else {

        // Envia os dados para a model a serem inseridos no BD (Banco de Dados)
       let status = await alunoDAO.insertAluno(dadosAluno)       

       if (status) {

        let dadosJSON = {}
        
        let alunoNovoId = await alunoDAO.selectLastId()
        dadosAluno.id = alunoNovoId

        dadosJSON.status = message.CREAT_ITEM.status

        dadosJSON.aluno = dadosAluno

        return dadosJSON
        

       } else {
           return message.ERRO_INTERNAL_SERVER
       }
    
    }

}

// Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = async function(dadosAluno, idAluno) {

     // Validação dos dados
     if (dadosAluno.nome        == '' || dadosAluno.nome             == undefined || dadosAluno.nome.length     > 100 ||
     dadosAluno.cpf             == '' || dadosAluno.cpf              == undefined || dadosAluno.cpf.length      > 18  ||
     dadosAluno.rg              == '' || dadosAluno.rg               == undefined || dadosAluno.rg.length       > 15  ||
     dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento  == undefined || dadosAluno.data_nascimento > 10  ||
     dadosAluno.email           == '' || dadosAluno.email            == undefined || dadosAluno.email           > 250 

 ) {
   return message.ERRO_REQUIRED_DATA

   // Validação para o ID
 } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
    return message.ERRO_REQUIRED_ID

 } else {

    // Adiciona o ID no JSON com todos os dados
    dadosAluno.id = idAluno

    // Encaminha para o DAO os dados para serem alterados
    let status = await alunoDAO.updateAluno(dadosAluno)

    if (status) {

        let dadosJSON = {}

        dadosJSON.status = message.UPDATE_ITEM.status

        dadosJSON.aluno = dadosAluno

        // Verificar se o dados estão chegando

        console.log(dadosJSON);
        

        return dadosJSON

    } else {
        return message.ERRO_INTERNAL_SERVER
    }


 }
}

// Função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = async function(idAluno) {

    // Validação dos dados
    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERRO_REQUIRED_ID

    } else {

        let status = await alunoDAO.deleteAluno(idAluno)

        if (status) {
            return message.DELETE_ITEM
        } else {
            return message.ERRO_INTERNAL_SERVER
        }
    }

}

// Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function() {

    // Solicita ao DAO todos os alunos do BD (banco de dados)
    let dadosAluno = await alunoDAO.selectAllAluno()

    // Verificar se o dados estão chegando
    // console.log(dadosAluno);

    // Cria um objeto do tipo JSON
    let dadosJSON = {}

    // Valida se o BD(banco de dados) teve registros
    if (dadosAluno) {

        // Retorna o status code 200 (solicitação foi bem-sucedida.)
        dadosJSON.status = 200

        // Retorna a quantidade de registro encontrados
        dadosJSON.count = dadosAluno.length

        // Adiciona o array de alunos e um JSON para retornar o app
        dadosJSON.alunos = dadosAluno

        return dadosJSON

    } else {
        return message.ERRO_NOT_FOUND
    }
}

// Função para buscar um item filtrando pelo ID, que será encaminhado para a model
const buscarIdAluno = async function(idAluno) {

    // Validação do ID
    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERRO_REQUIRED_ID

    } else {

    // Solicita ao DAO o aluno pelo ID do BD (banco de dados)
    let dadosAluno = await alunoDAO.selectByIdAluno(idAluno)

    // Verificar se o dados estão chegando
    // console.log(dadosAluno);

    // Cria um objeto do tipo JSON
    let dadosJSON = {}

    // Valida se o BD(banco de dados) teve registros
    if (dadosAluno) {

        // Retorna o status code 200 = solicitação foi bem-sucedida.
        dadosJSON.status = 200

        // Adiciona o array de alunos e um JSON para retornar o app
        dadosJSON.alunos = dadosAluno

        return dadosJSON

    } else {
        return message.ERRO_NOT_FOUND
    }
    
    }

  

}

// Import das variaveis ou funções
module.exports = {
    selecionarTodosAluno,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno
}