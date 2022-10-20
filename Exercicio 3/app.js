let numero = parseInt (prompt("Por favor, insira um número válido"));
let texto = "";
if (isNaN(numero)){
    texto = "Número inválido";
} else {
    for (let i = 0; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i} ${i!== 10 ? '\n' : ''}`;
    }
}

alert(texto);


