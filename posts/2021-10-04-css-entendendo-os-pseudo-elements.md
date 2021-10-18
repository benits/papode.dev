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

Um pseudo-element é como adicionar ou direcionar um elemento extra sem ter que adicionar mais HTML.

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

No geral você pode utilizar os pseudo-elements dessa maneira:

```css
seletor::pseudo-elemento {
  propriedade: valor;
}
```

Você pode utilizar apenas um pseudo-element em um seletor. Ele deve ser inserido depois da declaração de um elemento simples.

É semelhante a instruções de estilo normais, mas com dois-pontos para indicar a parte específica dos elementos contidos no seletor que você deseja estilizar.

## Multiple Pseudo-elements

Vários pseudo-elements também podem ser combinados.

No exemplo a seguir, a primeira letra de um parágrafo será vermelha, em um tamanho de fonte xx-large. O resto da primeira linha será azul e em small-caps. O resto do parágrafo terá o tamanho e cor da fonte padrão:

```css
p::first-letter {
  color: purple;
  font-size: xx-large;
}

p::first-line {
  color: red;
  font-variant: small-caps;
}
```

Com esse CSS nosso paragrafo ficará desta maneira:

![](assets/img/first-letter-first-line.png)

Use sua criatividade para utilizar os pseudo-elements da melhor maneira.