---
title: useMemo, React.memo e useCallback Melhorarando a performance de
  aplicações ReactJS
description: Neste artigo vamos conversar sobre como aplicar os conceitos de
  memoization e melhorar a performance de nossas aplicações React, utilizando
  useMemo, React.memo e useCallback.
date: 2022-03-25 09:56:35
thumbnail: assets/img/0-1-.gif
category: ReactJs
background: "#B31917"
---
Fala Dev, tudo bem com você? espero que sim.

Hoje vamos entender melhor como melhorar a performance de nossas aplicações React e evitar re-renderers desnecessários utilizando 3 recursos desta lib maravilhosa o memo, useMemo e useCallback, resumindo vamos entender melhor o conceito de memoization.

Nos últimos anos nós temos visto como as aplicações front-end tem ficado cada vez mais complexas e tem recebido mais responsabilidades em construções de software e adivinha só, a tendencia é esse movimento aumentar cada vez mais, com isso front-end developers tendem a aprimorarem mais e mais seus conhecimentos em performance, gerenciamento de dado, acessibilidade, escalabilidade, padrões de arquitetura e código.

## Memoization

Para continuarmos precisamos entender o conceito de memoization em sua essência. memoization é uma técnica de otimização usada para acelerar softwares memorizando/armazenando os resultados de chamadas de função e retornando o resultado em cache quando não ocorre uma mudança de valores na entrada ou saída da função.

Entendido isso podemos partir para o tópico principal do nosso artigo e entender como utilizar useMemo, memo e useCallback para aplicar o conceito de memoization em nossas aplicações javascript melhorando drasticamente a performance das nossas aplicações ReactJS.

## useMemo

Esse hook foi introduzido no React a partir da versão 16.8, ele utiliza a técnica que comentamos acima(`memoization`) para guardar o valor de retorno de uma função cujo os parâmetros de entrada não sofram alteração.\
Imagine o seguinte cenário, temos uma função sum(number1, number2), está função recebe dois parâmetros que são dois números  inteiros `number1, number2` e retorna a soma entre eles.

```javascript
fucntion sum(number1, number2) {
  return number1 + number2
}


console.log(sum(5,2))
```

No bloco de código acima veremos em nosso console o resultado de 5 + 2 que é 7, agora podemos utilizar o hook `useMemo` para cachear o retorno da função sum e garantir que o calculo somente seja processado novamente quando os valores dos parâmetros de entrada forem alterado, economizando assim poder de processamento da aplicação.