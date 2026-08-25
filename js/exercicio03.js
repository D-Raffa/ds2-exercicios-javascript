// declarando as variaveis aqui 

const nome = prompt ("Digite seu nome ! "); 
let idade = prompt ("Digite a sua idade !");
const curso = prompt ("Digite qual curso voce esta matriculado"); 


// exibindo concatenado !
        function saudacao (){
            console.log ( "Ola, meu nome é " + nome + " tenho " + idade + "anos, " + "e estou cursando "+ curso +"." );

        }

        saudacao();

// exibindo com Template String 

        function saudacao1(){
        console.log(`Meu nome é ${nome}, tenho ${idade} anos e estou cursando ${curso}.`);
        }

        saudacao1();