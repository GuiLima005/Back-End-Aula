var tabuada = require('./modulo/tabuada.js')


var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o multiplicador: \n', function (valor1) {

    let multiplicador = valor1

    entradaDados.question('Digite o maximo multiplicando: \n', function (valor2) {
        let multiplicando = valor2

        if (multiplicador == "" || multiplicando == "") {
            console.log('ERRO: Não é possivel calcular sem preencher todos os dados ')
            
        } else if (isNaN(multiplicador) || isNaN(multiplicando) ) {
            console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')

        } else {
            let resultado = tabuada.calcularTabuada(multiplicador, multiplicando)
        }

    })
})