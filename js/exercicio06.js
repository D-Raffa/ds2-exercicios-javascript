// Declarando as variáveis

const nome = prompt("Digite o nome do aluno...");
const nota1 = prompt("Digite a nota da P1 do aluno...");
const nota2 = prompt("Digite a nota da P2 do aluno...");

const media = (Number(nota1) + Number(nota2)) / 2;

// Validando as notas

if (
    nota1 === "" ||
    nota2 === "" ||
    isNaN(nota1) ||
    isNaN(nota2) ||
    Number(nota1) < 0 ||
    Number(nota2) < 0 ||
    Number(nota1) > 10 ||
    Number(nota2) > 10
) {
    console.log("Nota inválida");

} else if (media < 5) {
    console.log(`Aluno ${nome}, nota da P1: ${nota1}, nota da P2: ${nota2}. Status = reprovado: ${media.toFixed(1)}`);

} else if (media < 7) {
    console.log(`Aluno ${nome}, nota da P1: ${nota1}, nota da P2: ${nota2}. Status = recuperação: ${media.toFixed(1)}`);

} else {
    console.log(`Aluno ${nome}, nota da P1: ${nota1}, nota da P2: ${nota2}. Status = aprovado: ${media.toFixed(1)}`);
}