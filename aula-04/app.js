/******************************************
 * Objetivo: Realizar calculos matemáticos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * Data: 03/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 *****************************************/

var matematica = require('./modulo/calculadora.js')

// Import da biblioteca para entrada de dados
var readline = require('readline')

// Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entradad de dados do valor1
entradaDados.question('Valor1: \n', function (numero1) {

    // Replace - permite trocar o conteudo da string por outro
    let valor1 = numero1.replace(',', '.')

    // Entradad de dados do valor2
    entradaDados.question('Valor2: \n', function (numero2) {

        // Replace - permite trocar o conteudo da string por outro
        let valor2 = numero2.replace(',', '.')

        // Entradad de dados Tipo de calculo
        entradaDados.question('Escolha uma operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function (tipoCalculo) {

            // toUpperCase - Converte uma string para MAIUSCULO
            // toLowerCase - Converter uma string para minusculo

            let operacao = tipoCalculo.toUpperCase()
            let resultado

            // Validação de entrada de dados vazio 
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possivel calcular sem preencher todos os dados ')
                entradaDados.close() // Fecha o objeto de entrada de dados (encerra o programa)


                // Validação para verificar se os dados digitados são numeros
                // Podemos utilizar (isNAN ou typeof)
                // Se usar o typeof, precisa garantir que o tipo de dados não é generico (string)
                // else if (typeof (valor1) != 'number' || typeof (valor2) != 'number') 
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')
                entradaDados.close() // Fecha o objeto de entrada de dados (encerra o programa)

            } else {

                // Recebe da função o calculo das operações (função que nós criamos)
                resultado = matematica.calcular(valor1, valor2, operacao)

                // Verifica se o retorno da função é valido se for exibir o valor
                // senão encerra o programa
                if (resultado === false) {
                    entradaDados.close()

                } else {
                    console.log(resultado)
                }

            }
        })
    })
})