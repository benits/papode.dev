---
title: "Qual a diferença entre Interface VS Alias Type - #DesvendandoTypescript"
description: Se assim como eu, você quando conheceu o typescript ficou se
  perguntando Qual a diferença entre "Type" e "Interface"? Quando usar um ou
  outro? Se você quer saber a respotas para essas perguntas, este artigo é para
  você.
date: 2021-08-23 09:34:37
thumbnail: assets/img/h5j7kxcepqre4c893oii.png
category: TS
background: "#007acc"
---
Bom, vamos entender juntos o que é type e interface, qual o problema cada uma foi planejada para resolver e quando utilizar type ou interface no TypeScript.

Quando conheci o TypesScript nas minhas noites de estudo a dentro, percebi que havia duas maneira de se tipar um objeto, variavel, função, classe, etc... Essas formas eram utilizando `Type` ou `Interface`.

Varios dos videos que assisti e artigos que li eram diferentes, uns usavam type para tudo, outros interface para tudo e outros que curti bastante mesclavam as duas maneira criavam algumas definições de quando usar um ou outro e até faziam sentido. Porem eu queria mais, queria realmente entender o proposito de `types` e `interface`. 

Então eu fiz uma pesquisa e aqui vou relatar a minha visão de cada um e quando usa-los.

De acordo com a documentação oficial do typescript:

`type:` Que na verdade é um alias type, ou seja quando criamos uma tipagem de algo utilizando type, estamos na verdade criando um apelido, um novo nome para os tipos, assim temos tipagens reutilizaveis.

Por exemplo:

```typescript
type Coordinates = {
  latitude: number;
  longitude: number;
};
 

const printCoord = (coordinates: Coordinates) => {
  console.log("The coordinate's latitude is " + coordinates.latitude);
  console.log("The coordinate's longitude is " + coordinates.longitude);
}
 
printCoord({ latitude: -24.4647222, longitude: -49.067496 });
```

Vamos entender o que aconteceu no codigo acima, primeiro criamos um `alias type Coordinates` tipando o objeto coordenadas e em seguida chamamos nosso `alias type Coordinates`  para tipar as props que nossa função recebe. Dessa maneira dizemos para o TS que nossa função irá receber em suas propriedades um objeto do tipo `Cordinates.`

Assim como tipamos o objeto Coordenadas acima, podemos usar o type para criar um alias para qualquer tipo que será reutilizado, não apenas para objetos.

Por exemplo, um alias de tipo pode nomear um tipo de união:

```typescript
type ID = number | string;
```

Vale lembrar que alias são apenas alias, são apelidos e nada mais e tudo isso que estou te falando aqui, está na documentação então não é uma novidade.

Você não pode usar alias type para criar “versões” diferentes do mesmo tipo. Quando você usa o alias, é exatamente como se você tivesse escrito o tipo de alias type. 

`interface:` Uma declaração de interface é outra maneira de se nomear um tipo de objeto dentro do Typescript, funcina bem parecido com o alias type, como você pode ver no bloco de codigo abaixo :

```typescript
interface Coordinates = {
  latitude: number;
  longitude: number;
};
 

const printCoord = (coordinates: Coordinates) => {
  console.log("The coordinate's latitude is " + coordinates.latitude);
  console.log("The coordinate's longitude is " + coordinates.longitude);
}
 
printCoord({ latitude: -24.4647222, longitude: -49.067496 });
```

Ahh, você tem a liberdade mesclar o uso dos dois alias type e interface se necessario. Ambos suportam a extensão de outras interfaces e tipos. Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave.

```typescript
type Coruja = { noturno: true } & TipoPassaro;
type Robin = { noturno: false } & InterfacePassaro;

interface Pavao extends TipoPassaro {
  colorido: true;
  voa: false;
}
interface Galinha extends InterfacePassaro {
  colorido: false;
  voa: false;
}

let coruja: Coruja = { asas: 2, noturno: true };
let galinha: Galinha = { asas: 2, colorido: false, voa: false };
```

A recomendação oficial do typescript é utilizar interface ao invez