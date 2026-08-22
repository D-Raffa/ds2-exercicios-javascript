# Exercício 1 — Fundamentos da Web

## Em qual momento uma página dinâmica é processada?

Uma página dinâmica é processada quando o usuário faz uma requisição ao servidor. Nesse momento, o servidor executa o código da aplicação para gerar ou obter o conteúdo que será enviado como resposta ao navegador.

Diferentemente de uma página estática, o conteúdo de uma página dinâmica pode variar de acordo com o usuário, suas ações ou as informações disponíveis no sistema.

## Por que um banco de dados pode ser necessário?

Um banco de dados pode ser necessário para armazenar e organizar informações que precisam ser exibidas ou utilizadas pela página dinâmica. Por exemplo, um site pode precisar buscar dados de produtos, usuários, pedidos ou informações de um restaurante.

Quando o usuário realiza uma requisição, a aplicação pode consultar o banco de dados, processar as informações e gerar uma resposta personalizada. Dessa forma, o conteúdo apresentado ao usuário pode ser atualizado sem que seja necessário alterar manualmente o código HTML da página.

# Exercício 2 — Client-side e Server-side

## Tabela Comparativa

| Característica                        | Client-side                                                                                                       | Server-side                                                                                                |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Local em que o código é executado** |  No navegador ou dispositivo do usuário.                                                                           |  No servidor onde a aplicação está hospedada.                                                               |
| **Tecnologias de exemplo**            | HTML, CSS e JavaScript.                                                                                           | PHP, Java, Python, C#, Node.js e Ruby.                                                                     |
| **Responsabilidades**                 | Controlar a interface, interações do usuário e validações básicas.                                                | Processar regras de negócio, autenticação, controle de sessões e acesso ao banco de dados.                 |
| **Vantagens**                         | Resposta rápida para interações na interface e menor quantidade de requisições ao servidor.                       | Maior segurança e controle sobre dados, regras e processos importantes.                                    |
| **Limitações**                        | O código executado pode ser visualizado e manipulado pelo usuário, não sendo adequado para informações sigilosas. | Depende da comunicação com o servidor e pode gerar maior tempo de processamento e custo de infraestrutura. |
| **Exemplos de tarefas adequadas**     | Alterar a cor de um botão, exibir mensagens, animações e validação inicial de formulários.                        | Consultar banco de dados, verificar credenciais, controlar sessões e processar informações sigilosas.      |

## Classificação das Operações

### 1. Validar se um campo obrigatório foi preenchido

**Classificação: Possível em ambos.**

A validação pode ser realizada no **client-side** para informar rapidamente ao usuário que um campo obrigatório não foi preenchido, evitando uma requisição desnecessária ao servidor.

Também deve ser realizada no **server-side**, pois a validação feita apenas no navegador pode ser ignorada ou alterada pelo usuário.

---

### 2. Consultar dados sigilosos de um cliente

**Classificação: Server-side.**

A consulta deve ser realizada no servidor, principalmente porque os dados são sigilosos. Dessa forma, informações como credenciais de acesso ao banco de dados e regras de autorização não ficam expostas ao navegador do usuário.

---

### 3. Alterar a cor de um botão após um clique

**Classificação: Client-side.**

A alteração ocorre diretamente na interface do usuário e pode ser feita imediatamente pelo navegador utilizando CSS e JavaScript. Não há necessidade de enviar uma requisição ao servidor para essa tarefa.

---

### 4. Verificar login e senha em um banco de dados

**Classificação: Server-side.**

O navegador pode enviar os dados informados pelo usuário, mas a verificação das credenciais deve ser feita no servidor. O servidor consulta o banco de dados e confirma se o usuário e a senha são válidos.

Esse processo não deve ser feito apenas no client-side, pois informações sensíveis e regras de autenticação não devem ficar expostas.

---

### 5. Calcular o total de uma compra

**Classificação: Possível em ambos.**

O cálculo pode ser realizado no **client-side** para atualizar rapidamente o valor total apresentado ao usuário enquanto ele adiciona ou remove produtos do carrinho.

Porém, o cálculo também deve ser confirmado no **server-side**, principalmente antes de finalizar a compra, garantindo que os valores, descontos e regras não tenham sido alterados pelo usuário.

---

### 6. Controlar uma sessão de usuário

**Classificação: Server-side.**

O controle principal da sessão deve ser realizado no servidor, que pode armazenar e validar informações relacionadas ao usuário autenticado. O navegador normalmente mantém apenas um identificador, como um cookie ou token, utilizado para identificar a sessão nas próximas requisições.

Essa abordagem permite maior segurança e controle sobre a autenticação do usuário.

---

### Erro do Exercicio01 - (exercicio01.js:5 Uncaught ReferenceError: Console is not defined) -
**Motivo do Erro**

O erro ocorre porque JavaScript diferencia letras maiúsculas e minúsculas. A linguagem possui o objeto nativo console, escrito com a letra c minúscula.

Ao escrever Console com a letra C maiúscula, o JavaScript procura por um objeto com esse nome. Como esse objeto não existe, ocorre o erro ReferenceError.

Correção

A forma correta é:

console.log("JavaScript carregado com sucesso!");

Após corrigir Console.log para console.log, o programa volta a funcionar normalmente.

---