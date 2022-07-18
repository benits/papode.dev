---
title: Busca Binária usando Typescript
description: A busca binária é um algoritmo extremamente eficiente para
  encontrar um elemento em uma lista ordenada de itens.
date: 2022-07-15 11:13:11
thumbnail: assets/img/shearch-binary.png
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
4. Se o palpite foi muito baixo, defina o `start`como 1 a mais do que o palpite.
5. Se o palpite foi muito alto, defina o `stop`como 1 a menos do que o palpite.
6. Volte ao passo dois.

A ideia é exatamente essa, dividir para conquistar.

## Exemplo em typescript

Agora vamos criar uma função de busca binaria usando typescript. Onde essa função receberá como primeiro parametro um array de inteiros que contém numeros de `1 - 25`, como segundo parametro receberemos um `target`para procurarmos dentro do array e deveremos retornar o `index`do elemento caso ele exista no array, caso não exista retornaremos `null`.

```typescript
const array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

const binarySearch = (array: number[], target: number): number | null => {
  let start = 0;
  let stop = array.length - 1; 
  const DIVIDE_IN_HALF = 2;
  const CURRENT_ELEMENT_SIZE = 1;

  while (start <= stop) {
    let sumBetweenStartAndStop = start + stop;
    let middlePoint = Math.floor(sumBetweenStartAndStop / DIVIDE_IN_HALF);
    let kick = array[middlePoint];

    if (kick === target) {
      return middlePoint;
    } else if (kick > target) {
      stop = middlePoint - CURRENT_ELEMENT_SIZE;
    } else {
      start = middlePoint + CURRENT_ELEMENT_SIZE;
    }
  }

  return null;
};

console.log(binarySearch(array, 18));
```

## Calculando tempo de execução de uma busca binaria

Como vimos anteriormente, se usarmos a busca simples teremos um tempo de execução linear, onde uma lista com n elementos pode precisar fazer n suposições até encontrar o que está procurando e isso aumenta de acordo com o tamanho da lista. Isso não é nada bom principalmente quando estamos trabalhando milhares, milhões ou até bilhões de dados.

Vimos também que a busca Binaria faz menos suposições que a busca simples, Você pode até ter percebido que a diferença entre o pior número possível de suposições da busca simples e da busca binária se torna mais exorbitante conforme o tamanho da nossa lista aumenta.

Então entendemos que se usarmos uma busca simples em uma lista de 100 elementos teremos que no pior dos casos fazer 100 tentativas para encontrar o que estamos procurando.

Mas, se usarmos a busca binaria na mesma lista teriamos que fazer apenas 7 tentativas até esncontrar o que estamos procurando.

Diferença grande né? Então vemos o poder da busca binaria em comparação com a busca simples, a busca binaria é executada com tempo logarítmico e a busca simples com tempo linear;

Conseguimos identificar um padrão em nossa busca binaria, sempre que dobramos o tamos do array, precisamos de no maximo mais uma tentativa para encontrar o que estamos procurando. Por exemplo, se tivermos um array de 8 elementos precisaremos de 3 tentativas, agora se nosso array dobrar de tamanho 2*8 = 16 agora precisaremos de pelo menos 4 tentativas para tentar encontrar o que procuramos.

Pensando em um array de tamanho n, podemos encontrar o numero de tentativas que precisaremos no pior cenario, encontrando o numero de vezes que podemos reduzir esse array repetidamente pela metade, começando com n até chegarmos a 1.

Temos uma maneira de representarmos isso usando matematica, iremos utilizar o Big O Notation que é uma notação especial utilizado para medirmos o quão rapido é nossos algoritmos, posso trazer um artigo sobre isso no futuro.

Traduzindo o que conversamos para a matematica, usaremos o **logaritmo de `n` na base 2**, que ficaria escrito assim **O(log<sub>2</sub>n)**, A função logaritmica cresce muito lentamente compara com a linear, portanto, se log<sub>2</sub>n = x, então n = 2x. Por exemplo, como log<sub>2</sub> 128 = 7, sabemos que 2<sup>7</sup> = 128.

Isso facilita e muito o calculo de tempo de execução de um algoritmo de busca binaria, onde n é uma potencia de 2. portante, se n for 128, a busca binaria vai precisar de  no maximo 7 tentativas por que 2<sup>7</sup> = 128.

Em caso que n não seja uma potencia de 2, podemos olhar para a potencia mais baixa. Por exemplo, se tivermos um array com 1.000 elementos, a potencia de 2 abaixo disso é 512, que é igual a 2<sup>9</sup>, então podemos dizer que log<sub>2</sub> 1.000 é igual a um numero maior que 9 e menor que 10, se usarmos uma calculadora para verificar encontraremos o valor de 9,97, somar 1 a esse valor nos retorna 10,97 arredondando esse numero para baixo teremos o numero 10. Portanto para um array de 1.000 elementos teremos um maximo de 10 tentativas no pior dos casos.

Então é isso pessoal, um pouco do que aprendi sobre busca binaria nos ultimos meses. Sintam-se a vontade para comentar aqui em baixo a sua visão também.

Que a força dos algoritmos esteja com você!