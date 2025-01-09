//Escreve no topo da tela
const numero = prompt("Digite um numero: ")

//(dentro do documento html - pega o testo de uma tag)procura no html algum id com o nome numero-titulo

const numero_titulo = document.getElementById('numero-titulo')

//Manipular elemento Texto
const texto = document.getElementById('texto')

//jogando informaçoes na tela
numero_titulo.innerHTML = numero

// texto.innerHTML += `<p> O número digitado foi: ${numero} </p>`
// texto.innerHTML += `<p> Raiz quadraa: ${Math.pow(numero,0.5)} </p>`
// texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)} </p>`
// texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} </p>`

const nomes = ["thiago","cesar","pedro","guilherme"]

for (let i=0; i< nomes.length; i++){
    texto.innerHTML += `<h1> ${nomes[i]} </h1>`
}