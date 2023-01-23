// Permite escrever uma mensagem no terminal
console.log('Testando o node.JS')

// import da biblioteca que faz entrada de dados pelo usuário
let readline = require ('readline')

// Criamos um objeto entradaDados com as referencias do readline
let entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// O que é uma função de call back - é uma função que quando chamada ela
// Retorna o seu conteudo em uma única instrução, ou seja, em apenas 
// Um passo na programação)

// Criamos uma função de call back para receber os dados digitados pelo usuario
    //(O objeto entradaDados aguarda a digitação do usuario, após a 
    //digitação do conteúdo é acionado um call back para ecaminhar os dados 
    //para o console.log. Esse conteúdo foi encaminhado através do parametro 
    //dados da função)

entradaDados.question("Digite seu nome: \n", function (nome){

    console.log('Bem Vindo, '+ nome + 'ao servidor node.JS.')


})

