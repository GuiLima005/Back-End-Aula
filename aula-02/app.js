/****************************************************************
  * Objetivo : Realizar a media escolar de 4 notas do aluno
  * Data: 27/01/2023
  * Autor: Guilherme Lima
  * Versão: 1.0
*****************************************************************/

console.log('Sistema de Calculo de Médias Escolares')

// Import da biblioteca para entrada de dados
var readline = require('readline')

// Criamos um Objeto para manipular uma entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*** CONCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS
* 
* var - Toda variavel criada como var, tem por objetivo ser um escopo global,
*       ou seja, ela podera ser utilizada em diversos pontos da programação
*       
* let - Toda variavel criada como let, tem por objetivo ser um escopo local,
*       ou seja, será utilizada somente naquela função 
*
* const - Tem por objetivo criar um espaço em memória para amazenar dados
*         que não sofrem mudança
*
**********************************/

//Função de CallBack para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome) {
    // Variavel local para receber o nome do aluno, que 
    // vai ser retornando pela função
    let nomeAluno = nome

    //Função de CallBack para entrada da Nota1
    entradaDados.question('Digite a nota1 aluno: \n', function (nota1) {
        //Nota1
        let primeiraNota = nota1

        entradaDados.question('Digite a nota2 aluno: \n', function (nota2) {
            //Nota2
            let segundaNota = nota2

            entradaDados.question('Digite a nota3 aluno: \n', function (nota3) {
                //Nota3
                let terceiraNota = nota3

                entradaDados.question('Digite a nota4 aluno: \n', function (nota4) {
                    //Nota4
                    let quartaNota = nota4
                    let media = 0

                    /** 
                        * Conversão de dados String para Numero
                        * parseInt() - Converte para Inteiro
                        * parseFloat() - Converte para Real
                        * Number() - Converte para int ou float, conforme a entrada do dado
                        * 
                        * 
                    * Operadores de comparação
                        * == (verificar a igualdade de conteudo)
                        * != (Verificar a diferença de conteudo)
                        * < (Verificar o menor valor)
                        * > (Verificar o maior valor)
                        * <= (Verificar o menos ou igual valor)
                        * >= (Verificar o maior ou igual valor)
                        * === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                        * Ex: 0 == 0   V
                        * Ex: 0 == "0" V
                        * Ex: 0 === "0" F
                        * Ex: 0 ==! 0.0 F
                        *
                        *  
                    * Operadores lógicos
                        * OU       ||  (pipe)  OR
                        * E        &&          AND
                        * Negação  !           NOT 
                        * 
                        * 
                    * Ordem de execução dos operadores lógicos
                        *  0° ()
                        *  1° Negação
                        *  2° E
                        *  3° Ou
                    */

                    // Validação para tratar entradas vazias
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('Erro: é necessario digitar algum valor nas entrada.')

                    // Validação para entrada de dados não numericos
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO: É necessário que todos os dados digitados sejam números.')

                    // Validação para entrada de valores entre 0 e 10
                    } else if (primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 || quartaNota > 10) {
                        console.log('ERRO: Somente notas de 0 a 10')

                    // Validação para entrada de valores entre 0 e 10
                    } else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0) {
                        console.log('ERRO: Somente notas de 0 a 10')

                    
                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4
                        
                        if (media >= 7){
                            console.log('Status do aluno: Aprovado')
                        } else {
                            console.log('Status do aluno: Reprovado')
                        }
                        
                        console.log('Media Final:' + media.toFixed(1))
                    }
                })
            })
        })
    })
})