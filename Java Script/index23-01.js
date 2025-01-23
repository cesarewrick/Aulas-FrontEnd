// function funcao(){
 
//     let soma = 0;

//     for(let i=0; i<arguments.length; i++){

//         soma += arguments[i]
//     }

//     console.log(soma);
// }

// funcao(10,20,30,40,50)


// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }

// funcao({nome: 'Julio', sobrenome:'Cesar', idade: 29})

// function soma(a,b){
//    console.log(a+b)
// }


// function soma2(a,b){
//     return a+b
// }

// const soma1Variavel = soma (10,5)

// const soma2Variavel = soma2(10,5)

// console.log(soma1Variavel, soma2Variavel)

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// })

// function identificacao({nome, idade}){
//     if (idade <18) return 'Vagabundo de menor';
//     if(idade >= 18) return 'entrada permitida';

//     // console.log(idade);

// }

// console.log(identificacao( {nome: ' Julio', idade: 14}));


// function fala_frase(começo){
//     function fala_resto (resto){
//         return começo + resto
//     }
//     return fala_resto
// }

// const ola_mundo = fala_frase('Ola ')
// console.log(ola_mundo('Mundo'))


// function duplica(n){
//     return n * 2
// }
// function triplica(n){
//     return n * 3
// }
// function quadruplica(n){
//     return n * 4
// }


// function cria_multiplicador(multiplicador){
    
//     function multiplicacao(n){
//         return n*multiplicador
//     }
//     return multiplicacao
// }

// const multiplicador = cria_multiplicador(3)
// console.log(multiplicador (10))


// function cria_multiplicador(multiplicador){
    
//     return function(n){ return n*multiplicador }
// }

// const duplica = cria_multiplicador(2)
// const triplica = cria_multiplicador(3)

// console.log(triplica(3))
// console.log(duplica(2))

//Escopo lexp

// const nome = 'Renato'

// function fala_nome(){
//     const nome = 'Jorge'
// }

// function usa_fala_nome(){
    
//     const nome = 'Diego'

//     fala_nome()
// }
// usa_fala_nome()
// console.log(nome)

// Funções de Callback

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max-min)+min
    return Math.floor(num)
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(f1callback)

function f1callback(){
    f2(f2callback)
}
function f2callback(){
    f3(f3callback)
}
function f3callback(){
    console.log('Olá Mundo')
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Olá Mundo')
//         })
//     })
// })
// f2()
// f3()
// console.log('Olá Mundo')