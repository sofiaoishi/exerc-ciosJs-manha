//FOR
//1. Imprimir números de 1 a 10 utilizando o loop for
//2. Imprimir números pares de 1 a 10.
//3. Faça um programa que imprima os números ímpares de 0 a 50;
//4. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.
//5. Imprimir os primeiros 10 números da sequência de Fibonacci.

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }

for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }

  const num = parseInt(prompt("Digite um número:"));

if (!isNaN(num)) {
  for (let i = 1; i <= 10; i++) {
    console.log(${num} x ${i} = ${num * i});
  }
} else {
  console.log("Entrada inválida. Por favor, insira um número válido.");
}

let num1 = 0;
let num2 = 1;
let temp;

console.log(num1);
console.log(num2);

for (let i = 2; i < 10; i++) {
  temp = num1 + num2;
  console.log(temp);
  num1 = num2;
  num2 = temp;
}