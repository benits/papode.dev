---
title: "Qual é a diferença entre = , == e === ? || JavaScript [Desvendando #pr_04]"
description: Opa, beleza dev? tudo bem contigo? neste artigo vamos conversar um
  pouco sobre a diferença entre os sinais = (operador de atribuição), ==
  (igualdade abstrata) e === (igualdade estrita) no Javascript.
date: 2020-07-09T12:02:28.000Z
thumbnail: assets/img/diferent.png
category: JS
background: "#D6BA32"
---
O que vamos entender agora, é uma coisa básica no desenvolvimento com javascript.

> Bom, vamos direto ao ponto.

1. **"=" -** (operador de atribuição) - é usado para atribuir valores a uma variável em JavaScript.

   Agora vamos entender exatamente o que acontece no exemplo acima, na linha `1- let x =  10;` estamos utilizando o operador de atribuição "=" para atribuir a variável "x" o valor inteiro 10.

   A mesma coisa ocorre na linha  `2- let y = 20;`  e na linha  `3- let soma = x + y;`  estamos atribuindo a variável soma o resultado entre a soma das variáveis "x" e "y".

   Já na linha `5- console.log(soma);` estamos usando o console.log(), para exibir o resultado entre essa soma.

   Bom  jovem, utilizei este exemplo de soma para te most como funciona na pratica o operador de atribuição "=". 

```javascript
let x =  10;
let y = 20;
let soma = x + y;

console.log(soma);
/*
//saida

- 30

*/
```

2. "**\=="** (igualdade abstrata) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.

   A diferença entre `==` **(igualdade abstrata)** e `===` **(igualdade estrita)** é que ela `==` compara por **valor** independentemente do tipo de dados da variável e `===` por **valor** e **tipo** sem *coerção*.

   Vamos nos aprofundar no `==`. Então, primeiro vamos falar sobre *coerção*.

   *coerção* é o processo de converter um valor para outro tipo. Como neste caso, o `==` faz *coerção implícita*. Ele `==` tem algumas condições para executar antes de comparar os dois valores.
3. "**\==="** (igualdade abstrata) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.