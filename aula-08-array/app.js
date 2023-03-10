/****************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Data: 10/03/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ****************************************************************************/


/************************************************************************************************
* Express - dependencia do Node, que permite a integração entre o protocolo http com o codigo
*      npm install express --save
*
* Cors - Gerenciador de permissões para o protocolo HTTP
*      npm install cors --save
*
* Body-parser - É uma dependecia que permite manipular dados enviados pelo body da requisição
*      npm install body-parser --save
*
*************************************************************************************************/

// Import das dependencias para criar a API

    // Responsavel pelas requisições
    const express = require('express')
    // Responsavel pelas permissões das requisições
    const cors = require('cors')
    // Responsavel pela manipulação do body da requisição
    const bodyParser = require('body-parser')
const { request, response } = require('express')

    // Cria um objeto com as informações da classe express 
    const app = express()

    app.use((request, response, next) => {
        // Permite gerenciar a origem das requisições da API
         // * - Significa que a API será publica 
         // IP - Se colocar o IP, a API somente responderá para aquela máquina 
        response.header('Access-Control-Allow-Origin', '*')

        // Permite gerenciar quais verbos (metodos) poderão fazer requisições 
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

        // Ativa no cors das requisições as permissões estabelecidas
        app.use(cors())

        next()
    })

    // endPoints

    // endPoints para Listar os Estados
    app.get('/estados', cors(), async function(request, response, next){

        const estadosCidades = require('./modulo/estados_cidades.js')

        let listaDeEstados = estadosCidades.getListaDeEstados()
        response.json(listaDeEstados)
        response.status(200)

    })
    //  Permite carregar os endpoint criados e aguadar as requisições
    //pelo protocolo HTTP na porta 8080
    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080');
        
    })