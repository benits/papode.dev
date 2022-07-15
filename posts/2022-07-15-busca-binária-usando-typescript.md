---
title: Busca Binária usando Typescript
description: A busca binária é um algoritmo extremamente eficiente para
  encontrar um elemento em uma lista ordenada de itens.
date: 2022-07-15 11:13:11
thumbnail: assets/img/0-1-.gif
category: DEV
background: "#7D669E"
---
Fala Dev, tudo bem com você? espero que sim!

Bom primeiramente, me desculpe pela demora em postar novos conteúdos para você. Mas olha pelo lado positivo essa demora é justificável, como assim Matheus? é exatamente isso, posso justificar pois eu estava me aprimorando, aprendendo novos conceitos e evoluindo como pessoa. Consequentemente tudo que aprendi será repassado para vocês em forma de conteúdo.\
\
Desculpas a parte, rsrsrs. Hoje vamos conversar um pouco sobre um tópico que estudei recentemente, pois sempre é bom voltarmos a base para solidificar nossos conhecimentos, então afim de fixar mais ainda o que venho aprendendo tentarei explicar para vocês o algoritmo de busca binária.

Ele funciona dividindo repetidamente uma lista ordenada de itens pela metade até 1 única posição que é onde está o item que estamos procurando. Ficou confuso, né? eu sei, vamos entender melhor como isso tudo funciona.

## Vamos pensar em um exemplo

Imagine que você tem um dicionário em sua mão, certo? você tem um objetivo encontrar a palavra `"ordenação"` no dicionário, como fazemos isso na vida real?\
Abrimos o dicionário pela metade, pois sabemos que a letra estará da metade em diante. Olhamos em que letra estamos, vamos imaginar que estamos na letra "M" e olhando para a palavra que procuramos ela começa pela letra "O" e a letra "M" vem antes da "O", então tudo que estiver antes da "M" podemos descartar, não interessa para nossa busca.

Poderíamos, ir foleando o dicionário até chegarmos na letra "O", porém isso não é eficiente teríamos que passar por centenas de paginas até chegarmos lá, então utilizamos o mesmo método. Pegamos a segunda metade que sobrou e dividimos em dois novamente, vamos fazendo isso até restar um único item que é o que estamos procurando.

A ideia é exatamente essa, dividir para conquistar.

## Busca Simples VS Busca Binária