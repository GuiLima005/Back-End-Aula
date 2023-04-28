/********************************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ********************************************************************************************/


/******************************************* Constantes de ERROS ****************************************************************/
const ERRO_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatorios que não foram preenchidos corretamente.' }

const ERRO_INTERNAL_SERVER = { status: 500, message: 'O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.' }









/******************************************* Constantes de SUCESSO ****************************************************************/
const CREAT_ITEM = {status: 201, message: 'Registro criado com sucesso.'}

module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_INTERNAL_SERVER,
    CREAT_ITEM
}