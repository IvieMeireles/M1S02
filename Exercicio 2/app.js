/* Utilizando estrutura condicional exiba a descrição da classificação da idade da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.

Utilize prompt para solicitar a idade e alert para exibir a classificação. */

let idade = prompt ("Digite sua idade!");

if (idade <= 15) {
    alert ("Uau, você é jovem!")
} else if (idade > 15 && idade < 64){
    alert ("Você já é um adulto!")
} else if (idade >= 65) {
    alert ("Cuidado, você é um idoso!")
}
