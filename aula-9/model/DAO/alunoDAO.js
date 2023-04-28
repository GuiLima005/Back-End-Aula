/********************************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 *********************************************************************/

    // Import da biblioteca do prima client (responsável por manipular dados no BD (banco de dados))
    var { PrismaClient }  = require('@prisma/client') 

    // Instancia da classe do PrimaClient
    var prisma = new PrismaClient()

// Inserir um novo registro no Banco de Dados
const insertAluno = async function (dadosAluno) {

    // Script SQL para inserir os dados no BD (Banco de Dados)
    let sql = `insert into tbl_aluno (nome, 
                                      cpf, 
                                      rg, 
                                      data_nascimento, 
                                      email
                                      )
                                      values
                                      ('${dadosAluno.nome}', 
                                       '${dadosAluno.cpf}',
                                       '${dadosAluno.rg}',
                                       '${dadosAluno.data_nascimento}',
                                       '${dadosAluno.email}'
                                      )`

    console.log(sql);
    

    // Executa o script SQL no BD (Banco de Dados) e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql)

    // console.log(result);
    

    if (result) {
        return true
    } else {
        return false
    }

    

}

// Atualizar um novo Registro no Banco de Dados
const updateAluno = function (dadosAluno) {

}

// Excluir um Registro do Banco de dados
const deleteAluno = function (id) {

}

// Retorna todos os Registo do Banco de Dados
const selectAllAluno = async function () {

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
    insertAluno,

}