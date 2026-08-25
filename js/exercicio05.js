// Declarando as variáveis 

const nome = prompt("Digite seu nome..."); // chamando no prompt para o usuario digitar
let idade = prompt("Digite a sua idade...");// chamando no prompt para o usuario digitar


//condicional e logica do programinha
//condicional para nao aceitar valores nulos e nem numeros negaivos -\m/
if (idade === "" || isNaN(idade) || Number(idade) < 0) {
    console.log("Idade inválida");

} else if (Number(idade) < 16) {
    console.log("Não precisa votar.");

} else if (Number(idade) < 18) {
    console.log("Voto opcional.");

} else {
    console.log("Voto obrigatório.");
}