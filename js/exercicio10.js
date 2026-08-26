// Declara uma variável chamada "tentativas".
// "let" é usado porque o valor da variável vai mudar durante o programa.
// O programa começa com 0 tentativas utilizadas.
let tentativas = 0;


// Declara uma variável chamada "acesso".
// Ela recebe o valor booleano "false" (falso).
// Isso significa que, no início, o usuário ainda não tem acesso permitido.
let acesso = false;


// WHILE = "ENQUANTO".
// O código dentro das chaves será repetido ENQUANTO as duas condições forem verdadeiras.
//
// 1ª condição: tentativas < 3
// Significa: o número de tentativas ainda é menor que 3.
//
// && significa "E".
//
// 2ª condição: acesso === false
// Significa: o acesso ainda não foi permitido.
//
// Enquanto houver menos de 3 tentativas E o acesso não estiver permitido,
// o código continuará sendo repetido.
while (tentativas < 3 && acesso === false) {


    // "const" declara uma variável que não será alterada depois.
    // prompt() exibe uma caixa para o usuário digitar uma informação.
    // O valor digitado pelo usuário é armazenado na variável "usuario".
    const usuario = prompt("Digite o usuário:");


    // Exibe outra caixa de texto.
    // O valor digitado é armazenado na variável "senha".
    const senha = prompt("Digite a senha:");


    // IF significa "SE".
    //
    // === é uma comparação estrita.
    // Verifica se o valor e o tipo são exatamente iguais.
    //
    // && significa "E".
    //
    // Portanto:
    // SE o usuário for exatamente igual a "admin"
    // E a senha for exatamente igual a "1234",
    // o código dentro das chaves será executado.
    if (usuario === "admin" && senha === "1234") {


        // Exibe a mensagem no console.
        console.log("Acesso permitido");


        // Altera o valor da variável "acesso".
        //
        // Antes:
        // acesso = false
        //
        // Agora:
        // acesso = true
        //
        // Isso indica que o usuário acertou os dados de login.
        acesso = true;


    // ELSE significa "SE NÃO".
    //
    // Esse bloco será executado caso a condição do IF seja falsa.
    // Ou seja, se o usuário ou a senha estiverem incorretos.
    } else {


        // "++" aumenta o valor da variável em 1.
        //
        // Isso:
        // tentativas++;
        //
        // É equivalente a:
        // tentativas = tentativas + 1;
        //
        // Se o valor era 0, passa para 1.
        // Se era 1, passa para 2.
        // Se era 2, passa para 3.
        tentativas++;


        // Depois de um erro, verificamos se o usuário ainda possui tentativas.
        //
        // Se o número de tentativas ainda for menor que 3,
        // mostramos quantas tentativas restam.
        if (tentativas < 3) {


            // ${} permite inserir o valor de uma variável dentro de um texto.
            // Essa estrutura é chamada de Template String.
            //
            // Os números são calculados assim:
            //
            // 3 - 1 = 2 tentativas restantes
            // 3 - 2 = 1 tentativa restante
            //
            alert (`Acesso negado. Restam ${3 - tentativas} tentativa(s).`);
        }
    }
}


// Quando o WHILE termina, verificamos se o acesso continua sendo falso.
//
// Isso significa que o usuário não acertou o login.
//
// O WHILE pode terminar de duas formas:
//
// 1. O usuário acertou:
//    acesso = true
//
// 2. O usuário errou 3 vezes:
//    tentativas = 3
//
// Se o acesso ainda for falso, significa que foram utilizadas
// todas as tentativas sem acertar o login.
if (acesso === false) {

    // Exibe a mensagem de bloqueio.
    alert ("Acesso bloqueado");
}