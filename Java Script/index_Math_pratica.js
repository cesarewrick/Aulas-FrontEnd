//Escreve no topo da tela
const numero = prompt("Digite um numero: ")

//(dentro do documento html - pega o testo de uma tag)procura no html algum id com o nome numero-titulo

const numero_titulo = document.getElementById('numero-titulo')
//Manipular elemento Texto

const texto = document.getElementById('testo')

//jogando informaçoes na tela
numero_titulo.innerHTML = numero;
texto.innerHTML = `<p> O número digitado foi: ${numero} </p>`
