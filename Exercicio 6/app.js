//operacao a ser selecionada
const  operacao = (prompt ('Qual operação deseja realizar? (+, -, * ou /) ? '));
//recebe numero
const num1 = parseFloat (prompt ('Insira o 1º número: '));
const num2 = parseFloat (prompt ('Insira o 2º número: '));

let resultado = 0

if (isNaN(num1) || isNaN(num2)){
    alert ('Valor inválido. Atualize a página e tente novamente.');
} else {
    if (operacao == '+'){ //operação de soma
        resultado = num1 + num2;
    }else if (operacao == '-'){ //operação de subtração
        resultado = num1 - num2;
    } else if (operacao == '*'){ //operação de multiplicação
        resultado = num1 * num2; 
    }else if (operacao == '/'){ //operação de divisão
        resultado = num1 / num2;
    }else ('Operação inválida. Atualize a página e tente novamente.')
    
}+

document.write (num1 + operacao + num2 + (' = ') + resultado);



alert (`A operação de ${num1} ${operacao} ${num2} resultou em : ${(resultado)}`);


// para checar no log
console.log(resultado);
