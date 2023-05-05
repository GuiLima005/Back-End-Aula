/********************************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ********************************************************************************************/


/******************************************* Constantes de ERROS ****************************************************************/
const ERRO_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatorios que não foram preenchidos corretamente.' }

const ERRO_REQUIRED_ID = { status: 400, message: 'O atributo ID é obrigatorio na requisão.' }

const ERRO_INTERNAL_SERVER = { status: 500, message: 'O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.' }

const ERRO_INVALID_CONTENT_TYPE = { status: 415, message: 'gfdgfdgfdgdfgfdgdfgdfgdfgdg.' }






/******************************************* Constantes de SUCESSO ****************************************************************/
const CREAT_ITEM = {status: 201, message: 'Registro criado com sucesso.'}

const UPDATE_ITEM = {status: 201, message: 'Registro atualizado com sucesso.'}

const DELETE_ITEM = {status: 201, message: 'Registro deletado com sucesso.'}



module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_INTERNAL_SERVER,
    CREAT_ITEM,
    ERRO_REQUIRED_ID,
    UPDATE_ITEM,
    DELETE_ITEM,
    ERRO_INVALID_CONTENT_TYPE,
}