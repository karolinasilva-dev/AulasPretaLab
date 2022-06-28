const nome = prompt("Informe seu nome: ")
const anoNascimento = prompt("Informe seu ano de nascimento: ")

const anoAtual = new Date()


const idade = anoAtual.getFullYear() - anoNascimento

const campoNome = document.querySelector("#nome")
const campoIdade = document.querySelector("#idade")
campoNome.innerHTML += nome
campoIdade.innerHTML += idade