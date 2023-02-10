const { isString } = require("util")

// Função para calcular a média das notas 
const calcularMedia = function (bimestre1, bimestre2, bimestre3, bimestre4) {

    let nota1 = Number(bimestre1)
    let nota2 = Number(bimestre2)
    let nota3 = Number(bimestre3)
    let nota4 = Number(bimestre4)

    let media

    media = (nota1 + nota2 + nota3 + nota4) / 2

    console.log(media)
}

// Função para aceitar somente Strings
const erroEscrita = function (alu, sexoA, pro, sexoP, cur, disci) {

    let aluno = alu
    let sexoAlu = sexoA
    let professor = pro
    let sexoPro = sexoP
    let curso = cur
    let disciplina = disci

    if (aluno == "" || sexoAlu == "" || professor == "" || sexoPro == "" || curso == "" || disciplina == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')

    } else if (sexoAlu != 'MASCULINO' || sexoAlu != 'FEMININO') {
        console.log('ERRO: Confira sua escrita')

    } else if (isString(aluno) || isString(sexoAlu) || isString(professor) || isString(sexoPro) || isString(curso) || isString(disciplina)) {
        console.log('ERRO: Você preencheu valores numericos no lugar errado.')
    }
}

const erroNumero = function (nota1, nota2, nota3, nota4) {

    let bimestre1 = Number(nota1)
    let bimestre2 = Number(nota2)
    let bimestre3 = Number(nota3)
    let bimestre4 = Number(nota4)
    let media

    if (bimestre1 == "" || bimestre2 == "" || bimestre3 == "" || bimestre4 == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')

    } else if (isNaN(bimestre1) || isNaN(bimestre2) || isNaN(bimestre3) || isNaN(bimestre4)) {
        console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')

    }
}

// calcularMedia(50, 50, 50, 50)

module.exports = {
    calcularMedia,
    erroEscrita,
    erroNumero
}