# 1-Atividade_avaliativaFAP
# Explicação do Código HTML e JavaScript

Este documento HTML e o código JavaScript associados criam uma página interativa para calcular e exibir diferentes tipos de tabelas matemáticas e realizar alguns cálculos. Abaixo está a explicação de cada parte do código.

## Código HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Define o conjunto de caracteres para a página como UTF-8 -->
    <meta charset="UTF-8">
    <!-- Configura a viewport para garantir que o layout seja responsivo em diferentes tamanhos de tela -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Define o título da página que será exibido na aba do navegador -->
    <title>Avaliacao</title>
    <!-- Inclui o arquivo JavaScript externo 'resposta.js' que contém as funções a serem utilizadas -->
    <script src="js/resposta.js"></script>
</head>
<body>
    <!-- Botão que chama a função 'funcaoAvaliacao()' quando clicado -->
    <button onclick="funcaoAvaliacao()">clique</button> 
    
    <!-- Título para a seção de opções de tabuada -->
    <h2>Escolha sua opção para a tabuada</h2>
    
    <!-- Botão para gerar a tabuada de soma; chama a função 'gerarTabuadaSoma()' quando clicado -->
    <button onclick="gerarTabuadaSoma()">+</button>
    
    <!-- Botão para gerar a tabuada de subtração; chama a função 'gerarTabuadaSubtrair()' quando clicado -->
    <button onclick="gerarTabuadaSubtrair()">-</button>
    
    <!-- Botão para gerar a tabuada de multiplicação; chama a função 'gerarTabuadaMulti()' quando clicado -->
    <button onclick="gerarTabuadaMulti()">*</button>
    
    <!-- Botão para gerar a tabuada de divisão; chama a função 'gerarTabuadaDiv()' quando clicado -->
    <button onclick="gerarTabuadaDiv()">/</button>
    
    <!-- Botão para limpar a tabuada gerada; chama a função 'limparTabuada()' quando clicado -->
    <button onclick="limparTabuada()">Limpar</button>

    <!-- Parágrafos onde o resultado da tabuada ou outras respostas serão exibidos -->
    <p id="resposta1"></p>
    <p id="resposta2"></p>
    <p id="resposta3"></p>
    <p id="resposta4"></p>
</body>
</html>
```
# Explicação do Código JavaScript

Este código JavaScript define várias funções que interagem com elementos HTML para gerar e exibir diferentes tipos de tabelas e cálculos. As funções são chamadas por eventos de clique em botões definidos no HTML. Abaixo está um resumo das funcionalidades de cada função:

## Funções

### `funcaoAvaliacao()`

- **Objetivo:** Executa várias operações e exibe os resultados em elementos HTML.
- **Passos:**
  1. **Geração de Números Ímpares:** Cria um array contendo todos os números ímpares de 1 a 100 e os exibe no elemento com id `resposta1`.
  2. **Sequência de Fibonacci:** Inicializa a sequência de Fibonacci com os dois primeiros termos (1 e 1) e a expande até que o array tenha pelo menos 10 elementos. O resultado é exibido no elemento com id `resposta3`.
  3. **Soma dos Números Ímpares:** Calcula a soma dos números ímpares entre 11 e 30 e exibe o resultado no elemento com id `resposta4`.

### `gerarTabuadaSoma()`

- **Objetivo:** Gera e exibe a tabuada de soma para números de 1 a 10.
- **Passos:**
  1. Cria uma string contendo a tabuada de soma para cada número de 1 a 10.
  2. Exibe o resultado no elemento com id `resposta2`.

### `gerarTabuadaSubtrair()`

- **Objetivo:** Gera e exibe a tabuada de subtração para números de 1 a 10.
- **Passos:**
  1. Cria uma string contendo a tabuada de subtração para cada número de 1 a 10, utilizando a função `Math.abs()` para garantir que o resultado seja não-negativo.
  2. Exibe o resultado no elemento com id `resposta2`.

### `gerarTabuadaMulti()`

- **Objetivo:** Gera e exibe a tabuada de multiplicação para números de 1 a 10.
- **Passos:**
  1. Cria uma string contendo a tabuada de multiplicação para cada número de 1 a 10.
  2. Exibe o resultado no elemento com id `resposta2`.

### `gerarTabuadaDiv()`

- **Objetivo:** Gera e exibe a tabuada de divisão para números de 1 a 10.
- **Passos:**
  1. Cria uma string contendo a tabuada de divisão para cada número de 1 a 10, formatando o resultado para ter duas casas decimais.
  2. Exibe o resultado no elemento com id `resposta2`.

### `sequenciaFibonacci(vetor, primeiroTermo)`

- **Objetivo:** Gera a sequência de Fibonacci até que o array tenha pelo menos 10 elementos.
- **Passos:**
  1. Adiciona novos termos à sequência de Fibonacci até que o array tenha pelo menos 10 elementos.
  2. Retorna o array atualizado.

### `numerosImpares()`

- **Objetivo:** Calcula a soma dos números ímpares entre 11 e 30.
- **Passos:**
  1. Itera pelos números entre 11 e 30 e soma os números ímpares.
  2. Retorna a soma calculada.

### `limparTabuada()`

- **Objetivo:** Limpa os resultados exibidos na página.
- **Passos:**
  1. Define o conteúdo dos elementos com ids `resposta1`, `resposta2`, `resposta3` e `resposta4` como uma string vazia.

## Resumo

Este código fornece uma série de funcionalidades para gerar e exibir diferentes tipos de tabelas matemáticas e cálculos, incluindo tabuada de soma, subtração, multiplicação e divisão, além de operações relacionadas à sequência de Fibonacci e soma de números ímpares.
## A resposta para as questôes de banco de dados está dentro da pasta DB
