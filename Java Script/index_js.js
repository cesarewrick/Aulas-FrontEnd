let nome = prompt("Digite o primeiro nome")
let idade = prompt("Digite o segundo idade")
let altura = prompt("Digite o segundo altura")
let peso = prompt("Digite o segundo peso")

const resultado= peso/(altura*altura)

document.body.innerHTML += `<h1> ${nome} tem ${idade} anos, tem ${altura} de autura e pesa ${peso} kilos. o IMC de ${nome} é: ${resultado} </h1>`
