/*********************************************************
 * Objetivo: Trabalhando com Array
 * Data: 24/02/2023
 * Autor: Guilherme Lima 
 * Versão: 1.0  
 ********************************************************/

// [] - significa que estamos manipulando um array de dados
// [] - significa que estamos manipulando um formato JSON de dados

const listaNomes = ['José', 'Maria', 'Luiz', 'Carlos', 'Luizinho', 'Zé']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCam']

// Forma ERRADA de manipular um conjuto de dados 
// const nome1 = 'José'
// const nome2 = 'Maria'
// const nome3 = 'Luiz'

const manipulandoElementos = function () {

    // Verifica o tipo de dados do elemento listaNomes
    // console.log(typeof(listaNomes))

    // Verifica o tipo de dados de indice (item) do Array
    console.log(typeof (listaNomes[1]))

    // Exibe todos os elementos do Array
    console.log(listaNomes)

    // Exibe apenas um elemento conforme o seu indice
    console.log(listaNomes[2])

    console.log('O nome do usuario é ' + listaNomes[1])
    console.log(`O nome do usuario é ${listaNomes[3]}`)

    // Length - Permite contar quantos elementos tem em um Array
    console.log(`\nA quantidade de itens do meu Array é: ${listaNomes.length}`)

    // Percorrendo um array usando while
    let cont = 0 // Start
    let qtdeItens = listaNomes.length // Stop

    console.log('\nExibindo dados do Array com  WHILE\n')
    while (cont < qtdeItens) {
        console.log(`Nome: ${listaNomes[cont]}`)
        cont += 1
    }

    // Percorrendo um array usando FOR
    console.log('\nExibindo dados do Array com FOR\n')
    let qtdeNomes = listaNomes.length // Stop
    for (let cont = 0; cont < qtdeNomes; cont += 1) {
        console.log(`Nome: ${listaNomes[cont]}`)
    }

    // Percorrendo um array usando FOREACH
    console.log('\nExibindo dados do Array com FOREACH\n')

    // forEach é um metodo de um objeto array, que retorna uma função de call back
    listaNomes.forEach(function (nome) {
        console.log(`Nome: ${nome}`)
    })

    // Adicionado elementos novos no ARRAY 
    // Push - Adiciona elementos no final do Array
    listaNomes.push('Alexandre')
    listaNomes.push('Marcos', 'Guilherme')
    console.log(listaNomes)

    // unshift - Adiciona elementos no inicio do Array (ele muda a 
    // posição de todos os proximos elementos)
    listaNomes.unshift('Ana Maria', 'Leonardo')
    console.log(listaNomes)

    // Removendo elementos do Array
    // Pop - Remove o último elemento do Array
    listaNomes.pop()
    console.log(listaNomes)

    // shift - Remove o primeiro elemento do Array (reorganiza todos os 
    // proximos elementos)
    listaNomes.shift()
    console.log(listaNomes)
}

const filtrandoElementos = () => {

    // Indexof - Permite buscar elementos dentro de um Array
    // se o retorno for -1 (não encrontrou o item)
    // se o retorno for maior ou igual a 0 (item encontrado)

    console.log(listaProdutos)
    // console.log(Listaprodutos.indexOf('Fone de Ouvido'))

    if (listaProdutos.indexOf('Monitor') >= 0) {
        console.log('O item pesquisado foi encontrado.')
    } else {
        console.log('Item não encontrado.')
    }

    // Slice - Permite criar uma cópia do Array
    const novosProdutos = listaProdutos.slice(0, 3)

    console.log(listaProdutos)
    console.log(novosProdutos)
}

const removerElementos = function(array ,nomeItem) {

    // Cria uma cópia do Array
    let NovaLista = array.splice()

    let nome = nomeItem
    let indice = listaProdutos.indexOf(nome)
    let status

    // Splice - Permite remover um elemento do Array, pelo indice
    // (não esquecer de passar a qtde de itens a ser removido)
    if (indice >= 0) {
        NovaLista.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    if (status) {
        return NovaLista
    } else {
        return status
    }
}

console.log(removerElementos(listaProdutos, 'Monitor'))
console.log(listaProdutos) 




