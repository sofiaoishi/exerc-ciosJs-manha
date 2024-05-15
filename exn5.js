//FOR
//5. Imprimir os primeiros 10 números da sequência de Fibonacci.

function fibonacciSequence(n) { 
    let fibonacci = [0, 1]; 
    
    for (let i = 2; i < n; i++) { 
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
    
    } return fibonacci.slice(0, n); 
} 
     
console.log(fibonacciSequence(10));