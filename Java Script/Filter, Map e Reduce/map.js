// Map

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 10, 27]

// modificar os elementos do nosso array. retorna um array do mesmo tamanho

// const numeros_em_dobro = numeros.map(
//     function(valor,indice,array){
//         return `César -> ${valor}`
//          console.log(valor.indice.array)
//     }
// )
// console.log(numeros_em_dobro)

const pessoas = [
    {nome: 'José', idade: 29},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 19},
    {nome: 'Leticia', idade: 33},
    {nome: 'Rosana', idade: 55},
    {nome: 'Audinez', idade: 60}
]

// const nomes = pessoas.map(
//     pessoas =>pessoas.nome)
// console.log(nomes)


// const pessoasSemNome = pessoas.map(({nome, ... resto}) =>resto)

// console.log(pessoasSemNome)

// const pessoasSemNome = pessoas.map(function(valor){
//     delete valor.nome
//     return valor
// })

// console.log(pessoasSemNome)

const pessoasComId = pessoas.map((pessoas, index) => ({
    id: index +1, ... pessoas
}))

console.log(pessoasComId)

const comIds = pessoas.map(
    function(valor,indice){
        valor.id = indice
        return valor
    }
)

console.log(comIds)