// Funções Construtoras

function Pessoa(nome, sobrenome, idade, foto, email, senha){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.foto = foto
    this.email = email
    this.senha = senha

    this.mostraNome = function(){
        console.log(this.nome + '' + this.sobrenome)
    }
}

const user123 = new Pessoa('João','Silva',30,'foto','email@email.com','123456')

if (user123.email == 'email@email.com' && user123.senha == '123456'){
    user123.mostraNome()
}
