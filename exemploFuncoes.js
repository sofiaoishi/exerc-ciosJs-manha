//Hoisting
function saudacao() {
     let nomePessoa = prompt("Digite seu nome: ")

     let horaAtual = new Date().getHours()

    if(horaAtual > 6 && horaAtual < 13){
       window.alert("Bom dia " + nomePessoa)
    } else if (horaAtual > 13 && horaAtual < 18){
       window.alert("Boa tarde " + nomePessoa)
    } else {
       window.alert("Boa noite " + nomePessoa)
    }
}

saudacao()

function somar(num1, num2, num3) {
    let soma = num1 + num2 + num3

    return soma
}

//let resultado = somar(5, 16, 19) // 40
//let resultado = somar(1, 1, 1) // 3

console.log("O resultado e: " + resultado);

//Exemplos de funcoes
//window.alert(texto)
//console.log(Outro texto)
//window.prompt(digite algo:)


//Exemplo objeto

let professor = {}
    professor.nome = prompt "",
    professor.sobrenome = prompt "",
    professor.idade: prompt