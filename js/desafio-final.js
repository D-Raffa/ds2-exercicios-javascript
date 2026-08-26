// Cria uma variável para controlar se o usuário
// deseja continuar cadastrando alunos.
//
// Começamos com "true" porque queremos que o programa
// execute pelo menos uma vez.
let continuar = true;


// Guarda a quantidade de alunos cadastrados.
// Começamos em zero porque nenhum aluno foi cadastrado ainda.
let totalAlunos = 0;


// "function" cria uma função.
//
// "calcularMedia" é o nome da função.
//
// nota1 e nota2 são os parâmetros.
// Eles receberão as duas notas do aluno.
function calcularMedia(nota1, nota2) {

    // Soma as duas notas e divide por 2.
    //
    // Os parênteses são importantes porque queremos
    // fazer a soma primeiro.
    //
    // Exemplo:
    // (8 + 6) / 2
    // 14 / 2
    // 7
    //
    // "return" devolve o resultado da função.
    return (nota1 + nota2) / 2;
}



// Cria uma função chamada "classificarMedia".
//
// Ela recebe a média como parâmetro.
function classificarMedia(media) {

    // Se a média for maior ou igual a 7,
    // o aluno está aprovado.
    if (media >= 7) {

        return "Aprovado";

    // Se não for aprovado, verificamos
    // se a média é maior ou igual a 5.
    } else if (media >= 5) {

        return "Recuperação";

    // Se não atender nenhuma das condições anteriores,
    // significa que a média é menor que 5.
    } else {

        return "Reprovado";
    }
}



// WHILE significa "ENQUANTO".
//
// O programa continuará executando enquanto
// a variável "continuar" for igual a true.
while (continuar === true) {


    // =================================================
    // SOLICITANDO OS DADOS DO ALUNO
    // =================================================

    // Solicita o nome do aluno.
    const nome = prompt("Digite o nome do aluno:");


    // Solicita o nome do curso.
    const curso = prompt("Digite o nome do curso:");


    // Solicita a primeira nota.
    //
    // Number() transforma o texto digitado
    // pelo usuário em número.
    const nota1 = Number(prompt("Digite a primeira nota:"));


    // Solicita a segunda nota.
    const nota2 = Number(prompt("Digite a segunda nota:"));


    // =================================================
    // VALIDAÇÃO DAS NOTAS
    // =================================================

    // Verificamos se as notas estão dentro do intervalo
    // permitido: de 0 até 10.
    //
    // "||" significa OU.
    //
    // Portanto, se qualquer uma das condições for verdadeira,
    // a nota será considerada inválida.
    if (
        isNaN(nota1) ||
        isNaN(nota2) ||
        nota1 < 0 ||
        nota1 > 10 ||
        nota2 < 0 ||
        nota2 > 10
    ) {

        // Exibe uma mensagem de erro.
        console.log("Nota inválida. As notas devem estar entre 0 e 10.");

    } else {

        // =================================================
        // CALCULANDO A MÉDIA
        // =================================================

        // Chamamos a função calcularMedia().
        //
        // Passamos nota1 e nota2 como argumentos.
        //
        // O resultado retornado pela função
        // é armazenado na variável "media".
        const media = calcularMedia(nota1, nota2);


        // =================================================
        // CLASSIFICANDO O ALUNO
        // =================================================

        // Chamamos a função classificarMedia().
        //
        // Enviamos a média como argumento.
        //
        // A função vai retornar:
        //
        // "Aprovado"
        // "Recuperação"
        // ou
        // "Reprovado"
        //
        // O resultado é armazenado em "situacao".
        const situacao = classificarMedia(media);


        // =================================================
        // CONTANDO O ALUNO
        // =================================================

        // Como chegamos até aqui, significa que o cadastro
        // foi realizado corretamente.
        //
        // "++" aumenta o valor da variável em 1.
        //
        // totalAlunos = totalAlunos + 1
        //
        // é a mesma coisa que:
        //
        // totalAlunos++;
        totalAlunos++;


        // =================================================
        // EXIBINDO A FICHA DO ALUNO
        // =================================================

        // Exibe uma ficha completa no console.
        //
        // As crases ` ` permitem utilizar Template String.
        //
        // ${variavel} coloca o conteúdo da variável
        // diretamente dentro do texto.

        console.log(`
        =========================================
                FICHA ACADÊMICA
        =========================================

        Aluno: ${nome}
        Curso: ${curso}

        Nota 1: ${nota1.toFixed(2)}
        Nota 2: ${nota2.toFixed(2)}

        Média: ${media.toFixed(2)}

        Situação: ${situacao}

        =========================================
        `);
    }


    // =================================================
    // PERGUNTANDO SE DESEJA CADASTRAR OUTRO ALUNO
    // =================================================

    // Pergunta ao usuário se ele deseja continuar.
    const resposta = prompt(
        "Deseja cadastrar outro aluno? Digite S para sim ou N para não."
    );


    // Verifica a resposta.
    //
    // toUpperCase() transforma a resposta em letras maiúsculas.
    //
    // Assim:
    //
    // "s" → "S"
    // "sim" → "SIM"
    //
    // Aqui estamos verificando especificamente se
    // o usuário respondeu "S".
    if (resposta.toUpperCase() === "S") {

        // Continua o programa.
        continuar = true;

    } else {

        // Encerra o programa.
        continuar = false;
    }
}


// =====================================================
// FINAL DO PROGRAMA
// =====================================================

// Quando o usuário responder que não quer mais cadastrar,
// o WHILE termina.
//
// Então mostramos a quantidade total de alunos cadastrados.
console.log(`
=========================================
        CADASTRO ENCERRADO
=========================================

Total de alunos cadastrados: ${totalAlunos}

=========================================
`);