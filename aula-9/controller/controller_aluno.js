/********************************************************************
* Objetivo: Implementa a regra de negócio entre o app e a model
* Data: 24/04/2023
* Autor: Guilherme Lima
* Versão: 1.0
*********************************************************************/

   // Import do arquivo de acesso a BD (banco de dados)
   var alunoDAO = require('../model/DAO/alunoDAO.js')

// Função para receber os dados do APP e enviar para a Model para inserir um novo item
const inserirAluno = async function(dadosAluno) {

    // Import do arquivo global de configurações do projetos
    let message = require('./modulo/config.js')


    if (dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.length       > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email           > 250 

    ) {
      message.ERRO_REQUIRED_DATA
    } else {
        // Envia os dados para a model a serem inseridos no BD (Banco de Dados)
       let status = await alunoDAO.insertAluno(dadosAluno)       

       if (status) {
        return message.CREAT_ITEM  
       } else {
           return message.ERRO_INTERNAL_SERVER
       }
    
    }

}

// Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = function(dadosAluno) {

}

// Função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = function(id) {

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
        // Adiciona o array de alunos e um JSON para retornar o app
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else {
        return false
    }
}

// Função para buscar um item filtrando pelo ID, que será encaminhado para a model
const BuscarIdAluno = function(id) {

}


module.exports = {
    selecionarTodosAluno,
    inserirAluno,
}