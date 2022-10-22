// Baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, exibindo através 
// de um alert a estação atual.
// Considere:
// - 22/12 a 21/03 - Verão;
// - 22/03 a 21/06 - Outono;
// - 22/06 a 21/09 - Inverno;
// - 22/09 a 21/12 - Primavera.

// Realize o commit do exercício resolvido.

let data = new Date();

let dia = data.getDate();

let mes = data.getMonth() +1;

let estacao;

if ((dia >= 22 && mes === 3 || mes === 4 || mes === 5 || dia <= 21 && mes === 6)){
    estacao = 'Outono';
} else if (dia >= 22 && mes === 9 || mes === 10 | mes === 11 || dia <= 21 && mes === 12) {
    estacao = 'Primavera'
} else if (dia >= 22 && mes === 12 || mes === 1 || mes === 2 || dia <= 21 && mes === 3){
    estacao = 'Verão'
} else {
    estacao = 'Inverno'
}

alert (`A estação atual é ${estacao}!`);




console.log(estacao);
console.log(data);
console.log(mes);
console.log(dia);
