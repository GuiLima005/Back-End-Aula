/*********************************************************************
 * Objetivo: Arquivo de funções para realizar calculos matemáticos
 * Data: 03/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 *********************************************************************/

// Realizar calculo matematico das 4 operações (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)

// Forma 01 (Tradicional)
// function calcular(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1)
//     let valor2 = Number(numero2)
//     let operacao = tipoCalculo.toUpperCase()

//     let resultado
//     let status = true

//     // if (operacao == 'SOMAR') {
//     //     resultado = valor1 + valor2

//     // } else if (operacao == 'SUBTRAIR') {
//     //     resultado = valor1 - valor2

//     // } else if (operacao == 'MULTIPLICAR') {
//     //     resultado = valor1 * valor2

//     // } else if (operacao == 'DIVIDIR') {
//     //     // Validação da divisão por 0 
//     //     if (valor2 == 0) {
//     //         console.log('não é possivel fazer uma divisão por 0.')
//     //         status = false

//     //     } else {
//     //         resultado = valor1 / valor2
//     //     }

//     // } else {
//     //     console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
//     //     status = false // Fecha o objeto de entrada de dados (encerra o programa)
//     // }

//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2
//             break
//         case 'SUBTRAIR':
//             resultado = numero1 - numero2
//             break
//         case 'MULTIPLICAR':
//             resultado = numero1 * numero2
//             break
//         case 'DIVIDIR':
//             // Validação da divisão por 0 
//             if (valor2 == 0) {
//                 console.log('não é possivel fazer uma divisão por 0.')
//                 status = false
//             } else {
//                 resultado = valor1 / valor2
//             }
//             break

//         default: 
//         console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
//         status = false // Fecha o objeto de entrada de dados (encerra o programa)          
//     }




//     // Validação para tratar a variavel resultado quando nenhum calculo é realizado
//     if (resultado != undefined) {
//         return resultado

//     } else {
//         return false
//     }

// }

// Forma 02 (é uma das mais utilizadas)

const calcular = function (numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()

    let resultado
    let status = true


    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2)
            break
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2)
            break
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2)
            break
        case 'DIVIDIR':
            // Validação da divisão por 0 
            if (valor2 == 0) {
                console.log('não é possivel fazer uma divisão por 0.')
                status = false
            } else {
                resultado = DIVIDIR(valor1, valor2)
            }
            break

        default:
            console.log('ERRO: A operação informada não é valida. Confira a sua entrada.')
            status = false // Fecha o objeto de entrada de dados (encerra o programa)          
    }

    // Validação para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined) {
        return Number(resultado.toFixed(2))

    } else {
        return false
    }

}

// Forma 03 (Arrow fumction) Exemplo de funções Privadas
const SOMAR = (valor1, valor2) => valor1 + valor2
const SUBTRAIR = (valor1, valor2) => valor1 - valor2
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2
const DIVIDIR = (valor1, valor2) => valor1 / valor2


// Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}