
// && -> AND -> E
// || -> OR -> ou
// ! -> NOT -> NÃo

// const usuario = 'programador123'
// const senha = '123456'

// const vai_logar = usuario === 'programador123' && senha === '123456'

// console.log(!vai_logar)




// Operadores de curto circuito

// console.log ("null"  || "0" || false)

//Condições falças
// FALSY false0
// '' "" ``
// null / undefined
// NaN

// const corUsuario = null
// const corUtilizada = corUsuario || 'Preto'

// console.log(corUtilizada)

// const a = 0
// const b = null
// const c = "false"
// const d = false
// const e = NaN

// console.log(a || b || c || d || e)


// const usuario = 'Cesar'
// const senha = 123456

// if(usuario === 'Cesar' && senha === 123456){
//     console.log('O usuario pode logar')
// }


// const hora = 24


// if (hora >= 6 && hora <= 12){
//     console.log('Bom Dia!')
// } else if (hora >= 12 && hora <=17){
//     console.log('Boa tarde')
// } else if(hora >=18 && hora <= 23){
//     console.log("Boa noite")
// }else if( (hora >=0 && hora == 24) || hora <= 5){
//     console.log('Boa madrugada!')
// }else{
//     console.log('Valor invalido!')
// }


// const pontosUsuario = 999

// if(pontosUsuario >= 1000){
//     console.log('Usuario vip')
// }else {
//     console.log('Usuario normal')
// }

// Operador ternario
// const Nivel_de_Usuario = pontosUsuario >=1000? 'Usuário Vip!': 'Usuario Normal'
// console.log(Nivel_de_Usuario)

// const dia_Semana =6 

// switch(dia_Semana){
//     case 0:
//         console.log('Domingo')
//         break;
//     case 1:
//         console.log('Segunda')
//         break;
//     case 2:
//         console.log('Terça')
//         break;
//     case 3:
//         console.log('Quarta')
//         break;
//     case 4:
//         console.log('Quinta')
//         break;
//     case 5:
//         console.log('Sexta')
//         break;
//     case 6:
//         console.log('Sabado')
//         break;
//     default:
//         console.log('Valor inválido!')
// }

// let a = "C"
// let b = "A"
// let c = "B"
// let aux = a

// a = b
// b = c
// c = aux
// console.log(a,b,c)


// let nome_masculino = "Soraia Silva"
// let nome_feminino = "Leonardo Campos"
// let todes = nome_masculino

// nome_masculino = nome_feminino
// nome_feminino = todes


// console.log(nome_masculino, nome_feminino)

// const letras = ["B","C","A"]

// let [a,b,c] = letras

// console.log(a,b,c)

// const numero = [1,2,3,4,5,6,7,8,9,]

// const [primeiro_numero, ,terceiro_numero, ... qualquercoisa] = numero

// console.log(qualquercoisa)

const nomes = ["Cesar", "Yan", "Pedro", "Guilherme", "Gabriel"]
const sobrenome = ["Figueiredo", "Silva", "Jesus", "Vitor", "Vinicius"]

let [nome] = nomes
let [, segundo_nome] = sobrenome


console.log(nome + segundo_nome)