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

`type:` Que na verdade é um alias type, ou seja quando criamos uma tipagem de algo utilizando type, estamos na verdade criando um alias dos tipos para que tenhamos tipagens reutilizaveis.

Por exemplo:

![](assets/img/carbon.png)