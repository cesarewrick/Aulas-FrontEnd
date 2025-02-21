// Filter, Map e Reduce

// Filter returna um array menor ou igual



// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 27]

// function callbackFilter(valor, indice, array){
//     // return valor > 10
//     console.log(valor,indice, array)
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)

// return pessoas com nomes com mais de 5 letras
// pessoas com 35 anos ou mais
// return pessoas que terminam com letra a

const pessoas = [
    {nome: 'José', idade: 30},
    {nome: "Maria", idade: 52},
    {nome: "João", idade: 35},
    {nome: "Leticia", idade: 22},
    {nome: "Gabriella", idade: 19},
    {nome: "Wallace", idade: 47}
]

// const pessoas_com_nome_grande = pessoas.filter(
//     function(valor,indice,array){
//         // console.log(valor.nome.length>5)
//         return valor.nome.length>5
//     }
// )

// console.log(pessoas_com_nome_grande)

// const pessoas_com_idade_maior35 = pessoas.filter(
//     function(valor,indice,array){
//         // console.log(valor.nome.length>5)
//         return valor.idade>=35
//     }
// )

// console.log(pessoas_com_idade_maior35)

const pessoas_fim_letra_A = pessoas.filter(
    pessoa => pessoa.nome.toLocaleLowerCase().endsWith("a")
)

console.log(pessoas_fim_letra_A)