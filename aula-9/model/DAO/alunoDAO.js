/********************************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 *********************************************************************/

// Inserir um novo registro no Banco de Dados
const insertAluno = function (dadosAluno) {

}

// Atualizar um novo Registro no Banco de Dados
const updateAluno = function (dadosAluno) {

}

// Excluir um Registro do Banco de dados
const deleteAluno = function (id) {

}

// Retorna todos os Registo do Banco de Dados
const selectAllAluno = async function () {

    // Import da biblioteca do prima client (responsável por manipular dados no BD (banco de dados))
    let { PrismaClient }  = require('@prisma/client') 

    // Instancia da classe do PrimaClient
    let prisma = new PrismaClient()

    // Variavel com scriptSQL para executar no BD (banco de dados)
    let sql = 'select * from tbl_aluno' 

    /*****************************************************************************************************************
    * $queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
    * $queryRaw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw('select * from tbl_aluno'))  
    ******************************************************************************************************************/
    
    // Executa no BD(banco de dados) o scriptSQl
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Verificar se o dados estão chegando
    // console.log(rsAluno);
    

    // Valida se o BD(banco de dados) retornou algum registro
    if(rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

// Retorna um Registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function (id) {

}


module.exports = {
    selectAllAluno,
}