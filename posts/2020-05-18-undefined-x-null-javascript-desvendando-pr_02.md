---
title: "undefined X null - JavaScript [Desvendando #pr_02]"
description: Neste artigo iremos falar sobre a diferença entre os dois tipos
  primitivos undefined e null. Qual a diferença entre os dois?
date: 2020-05-18T01:39:52.000Z
thumbnail: assets/img/images.png
category: JS
background: "#D6BA32"
---
Antes de entender as diferenças entre `undefined` e `null` devemos entender as semelhanças entre elas.

1. Eles pertencem aos 6 tipos primitivos **do JavaScript**.
2. Eles são valores **falsos**. Valores avaliados como false ao convertê-lo em booleano usando `Boolean(value)` ou `!!value`.

   ![undefined_nullJs](assets/img/undefined_nulljs.png "undefined_nullJs")

Bom, agora que relembramos o que eles realmente são. Vamos as diferenças entre os dois tipos.

As diferenças entre `null` e `undefined` são sutis, mas devem ser levadas em consideração pelos programadores; ignorá-las pode dar origem a bugs difíceis de identificar. Na prática, sempre leve em conta o seguinte:

### Valor undefined;

é o valor padrão de uma variável que não recebeu um valor específico. Ou uma função que não tem valor de retorno **explícito** ex. console.log(1). Ou uma propriedade que não existe em um objeto. O motor de JavaScript faz isso para nós a **atribuição** de undefined valor.

Exemple: 

![UndefinedJs](assets/img/unfeinedjs.png "UndefinedJs")

### Valor null;

é **"um valor que não representa valor",** `null` é um valor que foi definido **explicitamente** para uma variável. Neste exemplo, obtemos um valor de `null` quando definimos `var foo = null`.

Exemple: 

![nullJs](assets/img/nulljs.png "nullJs")