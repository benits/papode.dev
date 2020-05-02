---
title: Key no React - são importantes
description: "A Keys é um atributo que você deve passar para todos os
  componentes criados dinamicamente a partir de uma matriz. "
date: 2020-05-02 03:18:15
thumbnail: assets/img/0.png
category: ReactJs
background: "#B31917"
---
É um ID único e constante que o React usa para identificar cada componente no DOM e saber se é um componente diferente ou o mesmo.

O uso de chaves garante que o componente filho seja preservado e não recriado e evita que coisas estranhas aconteçam.

Key não é realmente sobre desempenho, é mais sobre identidade (o que, por sua vez, leva a um melhor desempenho). Valores atribuídos e alterados aleatoriamente não formam uma identidade [Paul O'Shannessy](https://github.com/facebook/react/issues/1342#issuecomment-39230939)

* Use um valor exclusivo existente do objeto.
* Defina as chaves nos componentes pai, não nos componentes filhos

![Não foi fornecido texto alternativo para esta imagem](https://media-exp1.licdn.com/dms/image/C4E12AQENiNW8PI15uw/article-inline_image-shrink_1000_1488/0?e=1593648000&v=beta&t=NJGRH2ITKuB_93kEPlDLl--zEYfxGNQFmEb0tWoCTcI)

* Usar índice de matriz é uma prática ruim.
* random() não funciona

![Não foi fornecido texto alternativo para esta imagem](https://media-exp1.licdn.com/dms/image/C4E12AQG70wsIowkapQ/article-inline_image-shrink_1000_1488/0?e=1593648000&v=beta&t=9JSSlrY9wvgMK6GHzdetm9m8gY1kqSkdOx9vYAVtbbk)

* Você pode criar seu próprio ID exclusivo. Certifique-se de que o método seja rápido e anexe-o ao seu objeto.
* Você deve fornecer o atributo-chave para todos os filhos do ReactCSSTransitionGroup.