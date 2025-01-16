// Estrutura de repetição, FOR

// for(let i = 1; i<= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }
    
// const frutas = ["Maçã", "Pera", "Uva"]

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ]

// const container = document.querySelector('.container')
// const div = document.createElement('div')

// for (let i = 0; i< elementos.length; i ++){
//     let tag = elementos[i].tag
//     let texto = elementos[i].texto
//     //let {tag,texto} = elementos[i]
//     let tagCriada = document.createElement(tag)
//     tagCriada.innerHTML = texto
//     div.appendChild(tagCriada)

// }

// container.appendChild(div)

// For in
// For of

// const frutas =["Maçã", "Uva", "Pera"]

// for (let i in frutas){
//     console.log(frutas[i])
// }

// const pessoas = {
//     nome : "Cesar",
//     sobrenome: "Silva",
//     idade : 29
// }

// for (let i in pessoas){
//     console.log(pessoas[i])
// }

// const nomes = ["Luiz", "Otávio", "Henrique"]

// for (let i of nomes){
//     console.log(i)
// }

// nomes.forEach(function(valor, indice){
//     console.log(valor, indice)
// })

// let i = 0

// while(i < 10){
//     console.log(i)
//     i = i + 1;

// }

// function aleatorio(min, max){
//     const resultado = Math.random() * (max - min) + min
//     return Math.floor(resultado)
// }

// let numAleatorio = aleatorio(1, 50)

// while (numAleatorio !==10){
//     numAleatorio = aleatorio(1,50)

//     if (numAleatorio ===2){
//         console.log("ACHEI O SAFADO DO 2!!!")
//         continue;
//     }
//     console.log(numAleatorio)
// }



// ATIVIDADE

// 1. Escreva uma função que recebe dois números e retorne o maior deles.

// function maiorNumero(num1, num2){
//     if (num1>num2){
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(maiorNumero(65,55));

// 2. Escreva uma função ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem

// function paisagem(largura, altura){
//     if (largura>altura){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(paisagem(34,55))


// 3. Escreva uma função que recebe um numero e retorne o seguinte:
// Se o numero é divisivel por 3, returnear Fizz.
// se o número é divisivel por 5, Buzz. Se o número é dividivel por 3 e por 5, FizzBuzz. 
// Se não for divisivel nem por 3 nem por 5 retornar o próprio número. Além disso,
// cheque se o número é realmente um número. Use a função para fazer um laço de 0 a 100.

// function FizzBuzz(numero){
//     if(typeof numero !== 'number') return 'Não é um número!'
//     if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
//     if(numero % 3 === 0) return 'Fizz';
//     if(numero % 5 === 0) return 'Buzz';
//     return numero;
// }

// for (let i = 0; i <=100; i++) {
//     console.log(i, FizzBuzz(i));
// }