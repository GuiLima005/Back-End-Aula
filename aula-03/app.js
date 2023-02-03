/******************************************
 * Objetivo: Realizar calculos matemáticos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * Data: 30/01/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 *****************************************/

console.log('Calculadora do Senai')

var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro número: \n', function (numero1) {
    let valor1 = numero1

    entradaDados.question('Digite a operação: \n', function (operacao) {
        let operador = operacao

        entradaDados.question('Digite o segundo número: \n', function (numero2) {
            let valor2 = numero2
            const resultado = 0

                function calculo(numero1, operador, numero2) {                

                switch (operador) {
                    case '+':
                        resultado = numero1 + numero2
                        break

                    case '-':
                        resultado = numero1 - numero2
                        break

                    case '*':
                        resultado = numero1 * numero2
                        break

                    case '/':
                        resultado = numero1 / numero2
                        break
                    default:
                        console.log('não implementado')
                        break
                }
                return resultado

            }
            console.log(resultado)

        })
    })
})

