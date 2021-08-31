---
title: "Qual a diferença entre Interface e Alias Type no typescript -
  #DesvendandoTypescript"
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

Vários dos videos que assisti e artigos que li eram diferentes, uns usavam type para tudo, outros interface para tudo e outros que curti bastante mesclavam as duas maneira criavam algumas definições de quando usar um ou outro que até faziam sentido. Porem eu queria mais, queria realmente entender o proposito de `types` e `interface`. 

Então eu fiz uma pesquisa e aqui vou relatar a minha visão de cada um e quando usa-los.

`type:` No TypeScript, temos muitos tipos básicos, como strings, booleanos e números. Podemos usar o `alias type` para criar um novo nome para esses tipos primitivos. Ou seja quando criamos uma tipagem de algo utilizando `alias type`, estamos na verdade criando um apelido, um novo nome para os tipos, assim temos tipagens reutilizáveis.

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

Vamos entender o que aconteceu no código acima 👆, primeiro criamos um `alias type Coordinates` tipando o objeto coordenadas e em seguida chamamos nosso `alias type Coordinates`  para tipar as props que nossa função recebe. Dessa maneira dizemos para o TS que nossa função irá receber em suas propriedades um objeto do tipo `Coordinates.`

Assim como tipamos o objeto Coordenadas acima, podemos usar o type para criar um alias para qualquer tipo que será reutilizado, não apenas para objetos.

Por exemplo, um alias de tipo pode nomear um union type:

```typescript
type ID = number | string;
```

Vale lembrar que alias são apenas alias, são apelidos e nada mais e tudo isso que estou te falando aqui, está na documentação então não é uma novidade.

Você não pode usar alias type para criar “versões” diferentes do mesmo tipo. Quando você usa o alias, é exatamente como se você tivesse escrito o tipo de alias type. 

`interface:` Uma interface é uma maneira de descrever uma forma de dados por exemplo, funciona bem parecido com o alias type, como você pode ver no bloco de código abaixo :

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

Ahh, você tem a liberdade mesclar o uso dos dois, alias type e interface se necessario. Ambos suportam a extensão de outras interfaces e tipos. Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave o `extends`.

```typescript
type TipoPassaro = {
  asas: 2;
};

interface InterfacePassaro {
  asas: 2;
}

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

Outro pronto é se caso nós precisamos adicionar ou alterar campos em nossas definições, usando interface podemos fazer isso tranquilamente, pois interface são abertas isso significa que você pode estender a uma interface apenas re-declarando ela. Porém com alias type isso já não é possível os types são fechados, isso significa que eles não podem ser alterados fora da própria declaração, não podemos ter aliás types duplicados em nossos projetos, então se declararmos dois alias type com mesmo nome receberemos um erro do TS.

Como você verá no exemplo abaixo:

```typescript
// INTERFACE
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// TYPE
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.

```

Outros pontos para observarmos são:

* Antes do TypeScript versão 4.2, nomes de alias type podem aparecer em mensagens de erro, às vezes no lugar do tipo anônimo equivalente (que pode ou não ser desejável). Você pode conferir um [exemplo aqui](https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWZWhfYAjABMAMwALA+gbsVjoADqgjKESytQPxCHghAByXigYgBfr8LAsYj8aQMUASbDQcRSExCeCwFiIQh+AKfAYyBiQFgOPyIaikSGLQo0Zj-aazaY+dSaXjLDgAGXgAC9CKhDqAALxJaw2Ib2RzOISuDycLw+ImBYKQflCkWRRD2LXCw6JCxS1JCdJZHJ5RAFIbFJU8ADKC3WzEcnVZaGYE1ABpFnFOmsFhsil2uoHuzwArO9SmAAEIsSFrZB-GgAjjA5gtVN8VCEc1o1C4Q4AGlR2AwO1EsBQoAAbvB-gJ4HhPgB5aDwem-Ph1TCV3AEEirTp4ELtRbTPD4vwKjOfAuioSQHuDXBcnmgACC+eCONFEs73YAPGGZVT5cRyyhiHh7AAON7lsG3vBggB8XGV3l8-nVISOgghxoLq9i7io-AHsayRWGaFrlFauq2rg9qaIGQHwCBqChtKdgRo8TxRjeyB3o+7xAA);  
* As interfaces sempre serão nomeadas nas mensagens de erro.
* Os alias type não podem participar da mesclagem de declarações, mas as interfaces podem como vimos no exemplo acima. Você pode ver um outro [exemplo aqui](https://www.typescriptlang.org/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA);
* As interfaces só podem ser usadas para declarar as formas dos objetos, mas não para renomear tipos primitivos. Você pode conferir um [exemplo aqui](https://www.typescriptlang.org/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA);  
* Os nomes de interface sempre aparecerão em sua forma original nas mensagens de erro, mas *apenas* quando forem usados ​​por nome. Você pode conferir um [exemplo aqui](https://www.typescriptlang.org/pt/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWY2Q-YAjABMAMwALA+gbsVjNXW8yxySoAADaAA0CCaZbPh1XYqXgOIY0ZgmcK0AA0nyaLFhhGY8F4AHJmEJILCWsgZId4NNfIgGFdcIcUTVfgBlZTOWC8T7kAJ42G4eT+GS42QyRaYbCgXAEEguTzeXyCjDBSAAQSE8Ai0Xsl0K9kcziExDeiQs1lAqSE6SyOTy0AKQ2KHk4p1V6s1OuuoHuzwArMagA);  

\
Na maioria das vezes, você pode escolher com base na preferência pessoal, e o TypeScript dirá se é necessário que algo seja o outro tipo de declaração. Se desejar uma heurística, use `interface `até precisar usar os recursos de `type`.

## Conclusão

> A recomendação oficial do typescript é utilizar interface ao invés de type. Especialmente porque você recebe melhores mensagens de erro. 

A minha conclusão de quando usar interface VS type é que "Depende", o que você realmente precisa? esse tipos serão exportados publicamente? então declare usando interface. Você está declarando tipos de uma classe ou função? então declare usando interface. 

Essas dentre outras perguntas vai nos ajudar a decidir quando usar uma ou outra. Mas sempre de preferência para interface pois essa declaração nos da suporte melhor em caso de erro.

Algo que me ajudou a mim e meu time a nos organizar em relação a isso, foi o seguinte:

* se precisamos declarar os tipos de uma classe e seus metodos utilizamos interface;
* se precisamos declarar os tipo das props de uma função usamos alias type;
* se precisar criar uma definição de tipo que será extendida por algo, nós usamos interface;
* se estamos criando um generic type para alguma funcionalidade, usamos interface. por exemplo:

```typescript
// T = é o tipo de retorno da promessa de call
// P = é o tipo dos parametros de call
export interface IUseCase<T, P> {
  call: (arg?: P) => Promise<T>;
}
// em seguida a classe extends IUseCase;
// Por exemplo:
export class GetUserPermissions implements IUseCase<TUserPermission[]> {
  constructor(private readonly ApiReposiory: IApiRepository) {}

  call() {
    return this.ApiReposiory.getUserPermissions();
  }
}

```

👆 No exemplo acima, quando chamarmos GetUserPermissions.call() receberemos uma promessa de um array do tipo TUserPermission.

Bom, espero ter conseguido ajudar você em algum ponto, caso tenha dúvidas ou queria discutir mais sobre o assunto estou a disposição, pode comentar aqui em baixo ou me chamar no linkedin.

> Que a força do código esteja com você;

Até a proxima 😁.