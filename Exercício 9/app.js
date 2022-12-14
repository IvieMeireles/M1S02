//  Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, 
// e outro um valor para a “raíz”. Após o usuário inserir esses valores, o seu script deve calcular 
// os 10 primeiros valores da sequência e exibir na tela. 
// Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é 
//igual à soma do termo anterior com a raiz. 
//Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.

// Realize o commit do exercício resolvido.

let num = parseInt(prompt('Digite o valor Inicial'));
let raiz = parseInt(prompt('Informe a raiz'));

let soma = num;
let resultado = num.toString();

for (let i = 0; i < 9; i++){
    soma += raiz;
    resultado += `\n${ soma }`
}

alert(`A soma da progressão aritmética é de:\n${resultado}`);