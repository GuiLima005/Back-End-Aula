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

    // Import do arquivo de funções para listar os estados e as cidades
    const estadosCidades = require('./modulo/estados_cidades.js')

    // Cria um objeto com as informações da classe express 
    const app = express()

    // Define as permissões no header da API
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
    let statusCode
    let dadoEstado = {}

    // endPoints para Listar os Estados
    app.get('/estados', cors(), async function(request, response, next){

        // Chama a função que retorna os estados
        let listaDeEstados = estadosCidades.getListaDeEstados()

        // Tratamento para validar se a função realizou o processamento
        if (listaDeEstados) {
        // Retorna o Json e o Status code
        response.json(listaDeEstados)
        response.status(200)
        } else {
            response.status(500)
        }
    })

    // endPoint: Lista as caracteristicas do estado pela sigla
    app.get('/estado/sigla/:uf', cors(), async function(request, response, next) {
        //:uf - é uma variavel que será utilizada para uma passagens de valores, na URL da requisição

        // Recebe o valor da variavel uf, que será encaminhada na URL da requisição
        let siglaEstado = request.params.uf
        

        // Tratamento para validar os valores encaminhado
        if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
            statusCode = 400
            dadoEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"
        } else {
            // Chama a função que filtra o estado pela sigla 
            let estado = estadosCidades.getDadosEstados(siglaEstado)

            // Valida se houve retorno válido da função
            if (estado){
                statusCode = 200 // Estado encontrado
                dadoEstado = estado
            } else {
                statusCode = 404 // Estado não encontrado
            }
        }
        response.status(statusCode)
        response.json(dadoEstado)
    })

    app.get('/capital/sigla/:uf', cors(), async function(request, response, next) {

        let siglaCapital = request.params.uf
     
        if (siglaCapital == '' || siglaCapital == undefined || siglaCapital.length !=2 || !isNaN(siglaCapital)) {
            statusCode = 400
            dadoEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"
        } else {

            let capital = estadosCidades.getCapitalEstado(siglaCapital)

            if (capital) {
                statusCode = 200
                dadoEstado = capital
            } else {
                statusCode = 400
            }
        }
        response.status(statusCode)
        response.json(dadoEstado)


    })

    app.get('/regiao/sigla/:regiao', cors(), async function(request, response, next) {
        let siglaRegiao = request.params.regiao

        if (siglaRegiao == '' || siglaRegiao == undefined || !isNaN(siglaRegiao)) {
            statusCode = 400
            dadoEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"
        } else {
            let regiao = estadosCidades.getEstadosRegiao(siglaRegiao)

            if (regiao) {
                statusCode = 200
                dadoEstado = regiao
            } else {
                statusCode = 400
            }
        }
        response.status(statusCode)
        response.json(dadoEstado)
    })

    //  Permite carregar os endpoint criados e aguadar as requisições
    //pelo protocolo HTTP na porta 8080
    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080');   
    })