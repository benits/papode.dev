---
title: Desvendando useMemo, memo e useCallback
description: Resolvi explicar de forma bem detalhada como que funciona cada um
  desses conceitos, o React memo, o conceito de memoization, e também os hooks
  useMemo e useCallback
date: 2022-03-25 09:56:35
thumbnail: assets/img/0-1-.gif
category: ReactJs
background: "#B31917"
---
Fala Dev, tudo bem com você? espero que sim.

Hoje vamos entender melhor como melhorar a performance de nossas aplicações React e evitar re-renderers desnecessários utilizando 3 recursos desta lib maravilhosa o memo, useMemo e useCallback, resumindo vamos entender melhor o conceito de memoization.

Nos últimos anos nós temos visto como as aplicações front-end tem ficado cada vez mais complexas e tem recebido mais responsabilidades em construções de software e adivinha só, a tendencia é esse movimento aumentar cada vez mais, com isso front-end developers tendem a aprimorarem mais e mais seus conhecimentos em performance, gerenciamento de dado, acessibilidade, escalabilidade, padrões de arquitetura e código.

## Memoization

Para continuarmos precisamos entender o conceito de memoization em sua essência. memoization é uma técnica de otimização usada para acelerar softwares memorizando/armazenando os resultados/dados de chamadas de função e retornando o resultado em cache quando não ocorre uma mudança de valores na entrada ou retorno da função.