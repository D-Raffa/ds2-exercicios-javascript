//variaveis
const nome = "Rafael Leme";
let idade = 32;
const cidade = "Sao Roque";
const matriculado = true;
const nota = 10;

//exibindo 

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);
console.log("Matriculado: " + matriculado);
console.log("Nota da avaliação: "+ nota);

//tipo de cada variavel

console.log("Tipo da variavel nome: " + typeof nome);
console.log("Tipo da variavel idade: " + typeof idade);
console.log("tipo da variavel cidade: " + typeof cidade);
console.log("Tipo da variavel matriculado: " + typeof nota);

/*
As variáveis nome, cidade, matriculado e nota foram declaradas com const
porque seus valores não devem ser alterados durante a execução do programa.

A variável idade foi declarada com let porque seu valor pode mudar com o
tempo. Por exemplo, quando o aluno fizer aniversário, a idade poderá ser
atualizada sem a necessidade de criar uma nova variável.
*/