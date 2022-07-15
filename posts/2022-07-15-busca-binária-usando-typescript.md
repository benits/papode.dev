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

### Eis outro exemplo, para ajudar a ilustrar melhor

Vamos fazer uma brincadeira, eu estou pensando em um numero de 1 - 50 e você precisa decobrir qual numero é. Você chuta um numero e eu digo de você chutou muito alto, muito baixo ou se acertou, podemos resolver esse problema de duas maneiras a primeira você pode ir chutando desde o inicio até econtrar o numero que estou pensando, por exemplo:

* Você chuta 1;
* Eu digo chutou muito baixo;
* Você chuta 2;
* Eu digo chutou muito baixo;
* Você chuta 3;
* Eu digo chutou muito baixo;

Conseguir ver o problema desse metodo? caso eu esteja pensando no numero 50 que é o ultimo item da nossa lista, você precisará de 50 tentativas para encontrar o resultado e esse nem é o maior problema. O maior problema é que esse metodo de busca (Conhecido como **Busca Simples**) aumenta o tempo de resolução e complexidade de acordo com o tamanho da lista.

Se imaginarmos por exemplo que temos uma lista com 1 Milhão de itens, precisariamos de 1 Milhão de tentativas para encontrar o resultado. Isso por que sempre levamos em consideração o pior dos cenarios.

Agora vamos para o segundo metodo, onde usamos busca vinaria pra encontrar o numero que estou pensando. Levando em consideração que estou pensando em um numero de 1 - 50:

* Você chuta a metade de 50, no caso 25;
* Eu digo chutou muito baixo;
* isso significa que tudo que vem antes de 25 não nos interessa mais, podemos descartar;
* Agora temos uma lista de numeros que inicia em 25 e vai até 50, então você pega essa lista de 25 itens e divide pela metade tendo então 12.5 podemos arredondar para 13, isso significa que o poximo numero que você deve chutar é 38;
* Eu digo chutou muito baixo;
* isso significa que tudo que vem antes de 38 não nos interessa mais, podemos descartar;
* sobrou 12 numero na nossa lista, que vai de 39 - 50, dividimos pela metade novamente e temos o numero 6, certo? então nosso proximos chute é 44
* Eu digo parabéns, você acertou!.

Consegui ver a diferencia na busca simples no pior dos cenarios teriamos que percorrer o array item por item até acharmos o numero que estamos procurrando, isso poderia levar um total de 50 tentativas. 

Agora usando a busca Binaria no piopr dos cenarios percisariamos de 6 tentativas para reduzir as possibilidadesem apenas 1 item e esse item seria nossa resposta. Por isso a importancia de a lsita ser ordenada para que o algoritmo funcione.

Aqui está uma descrição passo a passo do uso de busca binária para pesquisar um numero em uma lista de inteiros:

1. Defina que `start=1` e `stop=n`, a variavel start é onde começa a lista, stop onde terminar a lista e `n` é o tamanho da nossa lista.
2. Encontre o valor que está no meio de `start e stop`, caso decimal seja menor que `0.5` arredonde para baixo, se não arredonde para cima para que seja um inteiro.
3. Se você tiver adivinhado o número certo, pare. Você o encontrou!
4. Se o palpite foi muito baixo, defina o `start `como 1 a mais do que o palpite.
5. Se o palpite foi muito alto, defina o `stop `como 1 a menos do que o palpite.
6. Volte ao passo dois.

A ideia é exatamente essa, dividir para conquistar.

## Exemplo em typescript

```

```