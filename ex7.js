//Exercício 7: Cálculo de desconto progressivo

//Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
//pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
//aplique um desconto de acordo com o valor total da compra. Siga a tabela:
//Valor total da compra até R$ 100,00: sem desconto.
//Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
//Valor total da compra acima de R$ 200,00: desconto de 20%.
//Exiba o valor final da compra com o desconto aplicado.

let valoTotal = parseFloat(prompt("Informe o valor total da compre"))

let desconto;

if(valorTotal <= 100){
    desconto = 0;
    console.log("O valor de desconto foi: " + desconto);
}else if (valorTotal <= 200){
    desconto = 0.1;
    console.log("O valor de desconto foi: " + (desconto*100)+ "%");
}else {
    desconto = 0.2;
    console.log("O valor de desconto foi: " + (desconto*100)+ "%");
}

let valorFinal = valorTotal - (valoTotal*desconto);

console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2));