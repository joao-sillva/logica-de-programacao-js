/*
    Solicite 2 números, faça a soma deles
    e apresente o resultado final ao usuário
*/

alert('Iremos somar 2 números')

let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')
let sum = Number(numberOne) + Number(numberTwo)

alert(`a soma de ${numberOne} + ${numberTwo} é igual a: ${sum}`)