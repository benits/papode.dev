---
title: ".map() X .forEach() - JavaScript [Desvendando #pr_01] "
description: "Neste post iremos falar sobre a diferença entre os dois
  métodos  foreach() e map(). Quando usar um ou o outro. "
date: 2020-05-18 10:57:21
thumbnail: assets/img/gzikzn9.jpg
category: JS
background: "#D6BA32"
---
Afim de me especializar cada vez mais em javascript, estarei postando vários pequenos artigos separados em tópicos, sobre o que eu estou estudando. Para compartilhar com vocês tudo que eu for aprendendo.

> Vamos começar pela definição encontrada no site da Mozilla:
>
> * map(): O método **`map()`** invoca a função `callback `passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
> * foreach(): O método **`forEach()`** executa uma dada função em cada elemento de um array.

Deixando claro: 

* `forEach()`: não retorna nada, ele apenas executa uma função fornecida em cada item de um array. 

  Exemple: "Salvar todos os itens da lista no banco de dados.";

  `let arrayOfUsers = [{name: "João"},{name: "Maria"},{name: "José"}]`

  `arrayOfStrings.forEach(item => item.dbSave())`

  ``
* `map()`: retorna um novo array com as alterações em cada item, ele executa uma função fornecida em cada item de um array e retorna um novo array do mesmo tamanho com os itens alterados.

  Exemple: "Transformando lista de string caracteres em maiúsculas";

  `let arrayOfStrings=[`

  `"frase para transoformar em uppercase",`

  `"frase para transoformar em uppercase"`

  `]`

  `let newArrayOfStrings = arrayOfStrings`

  `                       .map(item=>item.toUpperCase())`

  `console.log(newArrayOfStrings)`

  `//Output`

  `[`

  `"FRASE PARA TRANSOFORMAR EM UPPERCASE",`

  `"FRASE PARA TRANSOFORMAR EM UPPERCASE"`

  `]`

## Mas Quando usar map() ou foreach()?

Essa pergunta ganha aquela famosa resposta que nós Devs adoramos, kkkk.

Depende, despende do que você está fazendo.  Se você pensar de acordo com os exemplos anteriores, 

* **`foreach():`** é o mais indicado quando nós não precisamos alterar o valor dos elementos de um array. 
* **`map():`** é o mais indicado em cenários como no nosso exemplo anterior, onde nós precisamos alterar o valor de um array.

além do `map()` ser mais rápido que o `forEach()`, ele também nos permite concatenar outros métodos como: `filter()`, `reduce()` …etc. Podemos ver abaixo como podemos adicionar um `filter()` no nosso exemplo:

`let arrayOfStrings = [`

`"frase para transoformar em uppercase",`

`"frase para transoformar em uppercase",`

`"frase"`

`]`

`let newArrayOfStrings = arrayOfStrings`

`                       .map(item=>item.toUpperCase())`

`                       .filter(item=>item.length>8)`

`console.log(newArrayOfStrings)`

`//Output`

`[`

`"FRASE PARA TRANSOFORMAR EM UPPERCASE",`

`"FRASE PARA TRANSOFORMAR EM UPPERCASE"`

`]`

``