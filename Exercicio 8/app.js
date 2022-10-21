let qtd = 0;

// 1º numero primo é 2, irá encerrar a contagem em 1000
for (let n=2; n <= 1000; n++) { 
    let primo = true;
    for (let i = 2; i < n; i++) // contagem se inicia em 2, irá até o 1000 e irá parar no último antes de 1000
    
    if (n % i === 0){ // se o resto da divisão for exatamente 0, não é um número primo
        primo = false;
    }


if (primo) {  //se o número for primo, irá somar a quantidade de números
    qtd++;
    console.log(n); // irá retornar TODOS os números primos
 }
}



console.log(`De 0 a 1000 existem ${qtd} números primos`);
