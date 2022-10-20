/* Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.

Realize o commit do exercício resolvido. */


let numero = parseInt (prompt ("Informe um número"));
let par = 0;
let impar = 0;

for (i = 0; i < numero; i++) { 
    if (i%2 === 0 ) {
        par++
    } else {
        impar++
    }
   // também daria para fazer assim
   //i%2 === 0 ? par++ : impar++;
}
alert(`Foram ${par} números pares e ${impar} números impares.`)
