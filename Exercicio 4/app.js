
let saiDaFuncao = false;
let soma = 0;

while (!saiDaFuncao){
    let numero = parseInt(prompt('Digita um número ae'));

    if (!isNaN (numero) && numero !== -1){
        soma += numero;
    }
    if (numero === -1){
        saiDaFuncao = true;
    }
}
alert(`A soma foi ${soma}`);