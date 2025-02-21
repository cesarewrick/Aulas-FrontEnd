// Reduce


// Pegar todos os elementos e returnar apenas um


// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 15, 27]

// const total = numeros.reduce(
//     function(acumulador, valor, indice, array){
//         // return acumulador = acumulador + valor
//         // if(valor % 2 !== 0 ){
//         //     acumulador.push(valor)
//         // }
//         // return acumulador
//         acumulador.push(valor*2)
//         return acumulador
//     },[])

//     console.log(total)

const pessoas = [
    {nome: 'José', idade: 29},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 19},
    {nome: 'Leticia', idade: 33},
    {nome: 'Rosana', idade: 55},
    {nome: 'Audinez', idade: 60}
]

const pessoa_mais_velha = pessoas.reduce(
    function(acumulador, valor){
        if(acumulador.idade > valor.idade){
            return acumulador
        } else{
            return valor
        }
    }
)

console.log(pessoa_mais_velha)