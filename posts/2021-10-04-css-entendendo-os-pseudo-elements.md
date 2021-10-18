---
title: "CSS: Entendendo os pseudo-elements do CSS"
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

![first-letter](assets/img/capturar.png "first-letter")

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

## Pseudo-elements em classes HTML

Pseudo-elementos podem ser combinados com classes HTML: 

```css
p.my-intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}
```

O exemplo acima exibirá a primeira letra dos parágrafos com class="my-intro", em verde e em um tamanho 200% maior.

Com esse estilo podemos ver algo assim:

![](assets/img/classe-html.png)

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

![first-letter-first-line](assets/img/first-letter-first-line.png "first-letter-first-line")

Use sua criatividade para utilizar os pseudo-elements da melhor maneira.

## Conhecendo todos pseudo-elements

Em Geral, os dois pontos devem ser usados duas vezes  (`::`)  ao invés de uma única vez  (`:`). 

Isso distingue pseudo-class de pseudo-elements. A maioria dos navegadores suportam ambas sintax para os pseudo-elements.

* ``[`::after (:after)`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/::after)`: `cria um pseudo-element que é o último filho do elemento HTML selecionado. Geralmente é usado para adicionar conteúdo estético a um elemento com a propriedade `content`. Por exemplo: 

  ```css
  /* Adiciona esta seta depois de todos os links */
  a::after {
    content: "→";
  }
  ```
* ``[`::backdrop`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/::backdrop)` :`é uma caixa do tamanho da janela de visualização que é renderizada imediatamente abaixo de qualquer elemento sendo apresentado no modo de tela inteira. Isso inclui os dois elementos que foram colocados no modo de tela inteira usando a [API Fullscreen](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) e os elementos. [](https://developer.mozilla.org/en-US/docs/Web/CSS)Por exemplo:

  ```css
  /* Backdrop só é exibido quando a caixa de diálogo é aberta com dialog.showModal() */
  dialog::backdrop {
    background: rgba(255,0,0,.25);
  }
  ```
* ``[`::before (:before)`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/::before)`: `cria um pseudo-element que é o primeiro filho do elemento HTML selecionado. Geralmente é usado para adicionar conteúdo estético a um elemento com a propriedade `content`. Por exemplo: 

  ```css
  /* adiciona um coração antes de todos os links */
  a::before {
    content: "♥";
  }
  ```
* ``[`::cue-region (en-US)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::cue-region)` `[`(experimental)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::grammar-error)`: `corresponde [às](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API "WebVTT") sugestões [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API "WebVTT") em um elemento selecionado. Isso pode ser usado para [estilizar legendas e outras dicas](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#styling_webtt_cues) na mídia com faixas VTT.Por exemplo: 

  ```css
  ::cue-region {
    color: yellow;
    font-weight: bold;
  }
  ```
* ``[`::cue (en-US)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::cue)`: `corresponde [às](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) sugestões [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) em um elemento selecionado. Isso pode ser usado para [estilizar legendas e outras dicas](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#styling_webtt_cues) na mídia com faixas VTT. Por exemplo:

  ```css
  ::cue {
    color: yellow;
    font-weight: bold;
  }
  ```
* ``[`::first-letter (:first-letter)`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/::first-letter)`: `aplica estilos à primeira letra da primeira linha de um [elemento de nível de bloco](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes) , mas apenas quando não precedido por outro conteúdo (como imagens ou tabelas embutidas). Por exemplo:

  ```
  /* Seleciona a primeira letra de uma tag <p> */
  p::first-letter {
    font-size: 130%;
  }
  ```
* ``[`::first-line (:first-line)`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/::first-line)`: `aplica estilos à primeira linha de um [elemento de nível de bloco](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes) . Observe que o comprimento da primeira linha depende de muitos fatores, incluindo a largura do elemento, a largura do documento e o tamanho da fonte do texto. Por exemplo: 

  ```css
  /* Seleciona a primeira linha de uma tag <p> */
  p::first-line {
    color: red;
  }
  ```
* ``[`::grammar-error (en-US) (experimental)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::grammar-error)`: `representa um segmento de texto que o agente do usuário sinalizou como gramaticalmente incorreto. Por exemplo:

  ```css
  ::grammar-error  {
    text-decoration: underline red;
    color: red;
  } 
  ```


* ``[`::marker (en-US) (experimental)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)``
* ``[`::part() (en-US) (experimental)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)``
* ``[`::placeholder (en-US)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)``
* ``[`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)``
* ``[`::slotted() (en-US)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)``
* ``[`::spelling-error (en-US) (experimental)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::spelling-error)``
* ``[`::target-text (en-US)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::target-text)``

Eu poderia escrever sobre cada um desses pseudo elements aqui mas a documentação por si só já é excelente, não tem porque eu refazer a roda kkk, então para conhecer cada um desses elements. Basta clicar no nome dele acima que você será redirecionado para a doc oficial de cada pseudo-element.