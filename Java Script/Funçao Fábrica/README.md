# Calculadora Simples

Este projeto consiste em uma calculadora simples desenvolvida com HTML, CSS e JavaScript. O objetivo é entender como manipular eventos, DOM e funções em JavaScript para criar uma aplicação funcional.

## Estrutura do Projeto

### 1. HTML (Estrutura da Calculadora)

O arquivo `index.html` define a estrutura da calculadora. Ele contém:
- Um campo de entrada (`input`) para exibir os números e operações digitadas.
- Botões organizados dentro de uma tabela para representar os números, operadores e funções da calculadora.
- Um link para o arquivo CSS (`style.css`) para estilização.
- Um link para o arquivo JavaScript (`main.js`) para adicionar funcionalidades.

### 2. CSS (Estilização da Calculadora)

O arquivo `style.css` define o estilo da calculadora, incluindo:
- **`.calculadora`**: Define a largura da calculadora.
- **`.display`**: Ajusta o tamanho da fonte e o alinhamento do visor.
- **`.btn`**: Define o tamanho dos botões, a cor de fundo e um efeito de `hover`.

### 3. JavaScript (Funcionalidade da Calculadora)

O arquivo `main.js` contém a lógica da calculadora. Ele utiliza um padrão de função fábrica para criar e controlar a calculadora.

#### Principais funcionalidades:

- **`inicia()`**: Exibe um alerta ao iniciar e chama outras funções essenciais.
- **`pressionaEnter()`**: Permite calcular pressionando a tecla "Enter".
- **`cliqueBotoes()`**: Captura os eventos de clique nos botões e chama as funções correspondentes.
- **`btnParaDisplay(valor)`**: Insere o número ou operador pressionado no visor.
- **`clearDisplay()`**: Limpa o visor.
- **`apagaUm()`**: Apaga o último caractere digitado.
- **`realizaConta()`**: Avalia a expressão matemática digitada e exibe o resultado.

### Como Funciona?
1. O usuário clica nos botões numéricos e operadores, que são adicionados ao visor.
2. O botão "C" apaga todo o conteúdo do visor.
3. O botão "«" apaga apenas o último caractere digitado.
4. O botão "=" avalia a expressão matemática e exibe o resultado.
5. Pressionar a tecla "Enter" também realiza o cálculo.
6. Caso a expressão seja inválida, um alerta é exibido.

### Melhorias Possíveis
- Melhorar o design com animações CSS.
- Implementar um tratamento mais seguro para evitar o uso de `eval()`.
- Adicionar suporte a teclado numérico.

Este projeto é um ótimo exemplo para entender a manipulação do DOM e eventos em JavaScript!
