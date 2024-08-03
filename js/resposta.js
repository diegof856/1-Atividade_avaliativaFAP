// Função chamada quando o botão "clique" é pressionado
function funcaoAvaliacao(){
    // Cria um array vazio para armazenar números ímpares
    let vect = [];
  
    // Preenche o array com números ímpares de 1 a 100
    for(i=1; i<=100; i++){
        if(i % 2 != 0){
            vect.push(i);
        }
    }
    
    // Exibe a lista de números ímpares no elemento com id "resposta1"
    document.getElementById("resposta1").innerHTML = vect.join(', ');

    // Reinicializa o array e adiciona os dois primeiros termos da sequência de Fibonacci
    vect = [];
    vect.push(1);
    vect.push(1);

    // Gera a sequência de Fibonacci e a exibe no elemento com id "resposta3"
    vect = sequenciaFibonacci(vect, vect[1]);
    document.getElementById("resposta3").innerHTML = "Sequencia Fibonacci " + vect.join(', ');

    // Calcula e exibe a soma dos números ímpares entre 10 e 30 no elemento com id "resposta4"
    document.getElementById("resposta4").innerHTML = "A soma dos números ímpares maiores que 10 e menores que 30 é : " + numerosImpares();
}

// Função para gerar a tabuada de soma
function gerarTabuadaSoma(){
    let resultado = "";
    // Gera a tabuada de soma para os números de 1 a 10
    for(i = 1; i <= 10; i++){
        resultado += "Tabuada do " + i + "</br>";
        for(j = 1; j <= 10; j++){
            resultado += i + " + " + j + " = " + (i + j) + "</br>";
        }
    }
    // Exibe o resultado da tabuada no elemento com id "resposta2"
    document.getElementById("resposta2").innerHTML = resultado;
}

// Função para gerar a tabuada de subtração
function gerarTabuadaSubtrair(){
    let resultado = "";
    // Gera a tabuada de subtração para os números de 1 a 10
    for(i = 1; i <= 10; i++){
        resultado += "Tabuada do " + i + "</br>";
        for(j = 1; j <= 10; j++){
            resultado += i + " - " + j + " = " + Math.abs(i - j) + "</br>";
        }
    }
    // Exibe o resultado da tabuada no elemento com id "resposta2"
    document.getElementById("resposta2").innerHTML = resultado;
}

// Função para gerar a tabuada de multiplicação
function gerarTabuadaMulti(){
    let resultado = "";
    // Gera a tabuada de multiplicação para os números de 1 a 10
    for(i = 1; i <= 10; i++){
        resultado += "Tabuada do " + i + "</br>";
        for(j = 1; j <= 10; j++){
            resultado += i + " * " + j + " = " + (i * j) + "</br>";
        }
    }
    // Exibe o resultado da tabuada no elemento com id "resposta2"
    document.getElementById("resposta2").innerHTML = resultado;
}

// Função para gerar a tabuada de divisão
function gerarTabuadaDiv(){
    let resultado = "";
    // Gera a tabuada de divisão para os números de 1 a 10
    for(i = 1; i <= 10; i++){
        resultado += "Tabuada do " + i + "</br>";
        for(j = 1; j <= 10; j++){
            resultado += i + " / " + j + " = " + (i / j).toFixed(2) + "</br>";
        }
    }
    // Exibe o resultado da tabuada no elemento com id "resposta2"
    document.getElementById("resposta2").innerHTML = resultado;
}

// Função recursiva para gerar a sequência de Fibonacci
function sequenciaFibonacci(vetor, primeiroTermo){
    // Continua gerando a sequência até que o vetor tenha pelo menos 10 elementos
    if(vetor.length < 10){
       primeiroTermo = vetor[vetor.length - 2] + vetor[vetor.length - 1];
       vetor.push(primeiroTermo)
       sequenciaFibonacci(vetor, primeiroTermo);
    }
    // Retorna o vetor com a sequência de Fibonacci
    return vetor;
}

// Função para calcular a soma dos números ímpares entre 11 e 30
function numerosImpares(){
    let soma = 0;
    // Soma os números ímpares entre 11 e 30
    for(i = 11; i < 30; i++){
        if(i % 2 != 0){
            soma += i;
        }
    }
    // Retorna a soma calculada
    return soma;
}

// Função para limpar os resultados exibidos na página
function limparTabuada(){
    document.getElementById("resposta2").innerHTML = "";
    document.getElementById("resposta1").innerHTML = "";
    document.getElementById("resposta3").innerHTML = "";
    document.getElementById("resposta4").innerHTML = "";
}
