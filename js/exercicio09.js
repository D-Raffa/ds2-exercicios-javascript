// pedindo o numero para o usuario 
let numero = Number(prompt("Digite um número (0 para encerrar):"));
//variaveis
let quantidade = 0; 
let soma = 0;
let maior = null; // como não sabemos qual vai ser a maior, começamos a variavel com null
let menor = null;//como não sabemos qual vai ser a maior, começamos a variavel com null

// se começar com zero o while nem vai executar.. 
//aprendendo a sintaxe com IA, nem sabia oq significa !==
while (numero !== 0) {

    quantidade++;  // aumenta um numero a cada repetição 
    soma += numero;

    if (maior === null || numero > maior) { // aqui o maior numero toma o lugar do anterior comparando 
        maior = numero;
    }

    if (menor === null || numero < menor) {  // aqui o menor numero toma o lugar do anterior comparando 
        menor = numero;
    }

    numero = Number(prompt("Digite outro número (0 para encerrar):"));
}

if (quantidade === 0) {
    console.log("Nenhum número foi informado.");
} else {
    const media = soma / quantidade;

    console.log(`Quantidade de números digitados: ${quantidade}`);
    console.log(`Soma de todos os números: ${soma}`);
    console.log(`Média dos números digitados: ${media.toFixed(2)}`);
    console.log(`Maior número digitado: ${maior}`);
    console.log(`Menor número digitado: ${menor}`);
}