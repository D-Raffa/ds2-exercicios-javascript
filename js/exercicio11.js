
// "function" é usado para criar uma função.
//
// "somar" é o nome da função.
//
// Dentro dos parênteses temos os parâmetros:
// numero1 e numero2.
//
// Parâmetros são variáveis que recebem valores
// quando a função é chamada.
function somar(numero1, numero2) {

    // "return" significa "retorne".
    //
    // A função irá calcular a soma dos dois números
    // e devolver o resultado para o local onde foi chamada.
    return numero1 + numero2;
}


// ============================================
// FUNÇÃO CALCULAR MÉDIA
// ============================================

// Cria uma função chamada "calcularMedia".
//
// Ela recebe duas informações:
// nota1 e nota2.
function calcularMedia(nota1, nota2) {

    // Primeiro, soma as duas notas.
    //
    // Depois, divide o resultado por 2.
    //
    // Os parênteses são importantes porque garantem
    // que a soma seja realizada antes da divisão.
    //
    // Exemplo:
    // (8 + 6) / 2
    // 14 / 2
    // 7
    return (nota1 + nota2) / 2;
}



// Cria uma função chamada "classificarMedia".
//
// Ela recebe um parâmetro chamado "media".
function classificarMedia(media) {

    // IF significa "SE".
    //
    // Se a média for maior ou igual a 7,
    // retorna a palavra "Aprovado".
    if (media >= 7) {

        return "Aprovado";

    // ELSE IF significa "SE NÃO, SE".
    //
    // Se não for maior ou igual a 7,
    // verifica se a média é maior ou igual a 5.
    //
    // Isso significa que, neste ponto, a média
    // está entre 5 e 6.99.
    } else if (media >= 5) {

        return "Recuperação";

    // ELSE significa "SE NÃO".
    //
    // Se não for aprovado e nem recuperação,
    // significa que a média é menor que 5.
    } else {

        return "Reprovado";
    }
}

// Cria uma função chamada "criarSaudacao".
//
// Ela recebe o nome da pessoa através
// do parâmetro "nome".
function criarSaudacao(nome) {

    // O sinal de crase ` permite criar uma Template String.
    //
    // ${nome} insere o valor da variável "nome"
    // dentro do texto.
    //
    // Exemplo:
    //
    // Olá, Rafael! Seja bem-vindo!
    //
    // "return" devolve essa mensagem.
    return `Olá, ${nome}! Seja bem-vindo!`;
}


// Armazena um nome em uma variável.
const nome = prompt ("Digite o seu nome jovem mancebo!");


// Armazena dois números em variáveis.
const numero1 = prompt("Digite um numero a ser somado ...");
const numero2 = prompt("Digite mais um numero para somar com o primeiro, pra que ? tambem nao sei .. só digita!!");


// Chama a função "somar".
//
// Os valores numero1 e numero2 são enviados
// para dentro da função.
//
//
// Esse resultado é armazenado na variável "resultadoSoma".
const resultadoSoma = somar (Number(numero1),Number(numero2));


// Armazena duas notas.
const nota1 = prompt("Digite a nota da primeira prova ...");
const nota2 = prompt("Digite a nota da segunda nota de prova .. ");


// Chama a função calcularMedia.
//
// calcularMedia(nota1, nota2)
//
// A função calcula:
//
// (nota1 + nota2) / 2
//
// Resultado:
//
//
// O resultado retornado é armazenado
// na variável "media".
const media = calcularMedia(Number(nota1), Number(nota2));


// Agora chamamos a função classificarMedia.
//
// Enviamos o valor armazenado em "media".
//
// No nosso exemplo:
//
// classificarMedia(7)
//
// A função verifica:
//
// 7 >= 7?
//
// Como a resposta é verdadeira,
// ela retorna "Aprovado".
//
// O resultado é armazenado na variável "classificacao".
const classificacao = classificarMedia(media);


// Chamamos a função criarSaudacao.
//
// Enviamos o valor da variável "nome":
//
// criarSaudacao("Rafael")
//
// A função retorna:
//
// "Olá, Rafael! Seja bem-vindo!"
//
// A mensagem retornada é armazenada
// na variável "saudacao".
const saudacao = criarSaudacao(nome);



// Exibe a mensagem de saudação.
console.log(saudacao);


// Exibe a soma dos números.
console.log(`Soma: ${resultadoSoma}`);


// Exibe a média com duas casas decimais.
//
// toFixed(2) é usado apenas para exibição.
//
// Por exemplo:
//
// 7 → 7.00
// 7.5 → 7.50
console.log(`Média: ${media.toFixed(2)}`);


// Exibe a classificação da média.
console.log(`Situação: ${classificacao}`);