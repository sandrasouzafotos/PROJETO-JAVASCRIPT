// alert("olá mundo!");

// Solicita um número inteiro ao usuário
var numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é par, positivo e está entre 1 e 99
if (numero % 2 === 0 && numero > 0 && numero < 100) {
    alert("O número atende aos critérios.");
} else {
    alert("O número não atende aos critérios.");
}
