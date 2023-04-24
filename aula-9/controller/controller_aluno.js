/********************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Data: 24/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 *********************************************************************/

// Função para receber os dados do APP e enviar para a Model para inserir um novo item
const inserirAluno = function(dadosAluno) {

}

// Função para receber os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = function(dadosAluno) {

}

// Função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = function(id) {

}

// Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function() {

    // Import do arquivo de acesso a BD (banco de dados)
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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
}