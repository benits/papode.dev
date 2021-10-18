---
title: "CSS: Entendendo os pseudo-elements"
description: Um pseudo-element CSS é uma palavra-chave adicionada a um seletor
  CSS que permite que você defina um estilo de uma parte específica do elemento
  HTML selecionado.
date: 2021-10-04 05:07:11
thumbnail: assets/img/css-pseudo-elements.jpg
category: CSS
background: "#2DA0C3"
---
Fala Dev beleza, tudo bem com você?

Hoje vamos entender como funcionam os `pseudo-elements` do CSS e saber como esses carinhas podem nos ajudar no dia a dia como um dev front end. 

## Primeiramente vamos recapitular o que é CSS?

Bom quando criamos um web site utilizamos HTML para a estrutura e o CSS para estilizar essa estrutura. CSS (Cascading Style Sheets) que traduzindo literalmente é Folhas de Estilo em Cascata, é uma linguagem utilizada para estilizar elementos escritos em linguagem de marcação de texto com `HTML, XML` ou `XHTML`. Isso envolve conceitos como cores, fontes e o controle total do layout dos elementos `HTML`.

Bom agora que relembramos o que é CSS vamos ao que realmente interessa.

## O que são pseudo-elements no CSS?

Um pseudo-element CSS é uma palavra-chave adicionada a um seletor CSS que permite definir o estilo de uma parte específica do elemento HTML selecionado ou estilizar apenas a primeira linha de um elemento de texto são apenas algumas das possibilidades criadas por esse recurso.

Por exemplo se em um cenário tivéssemos um paragrafo e quiséssemos estilizar apenas a primeira letra desse `<p>texto</p>` , nós podemos criar o nosso CSS dessa maneira:

```css
/* A primeira letra de todo elemento <p>. */
p::first-letter {
  color: red;
  font-size: 2.6em;
  font-weight: bold;
  line-height: 1;
  margin-inline-end: 0.2rem;
}
```

Então, com esse estilo nosso paragrafo ficará assim:

![](assets/img/capturar.png)

Bem fácil né? O massa disso tudo é a quantidade de coisas diferentes que podemos fazer apenas com CSS.

## Pseudo-elements sintax