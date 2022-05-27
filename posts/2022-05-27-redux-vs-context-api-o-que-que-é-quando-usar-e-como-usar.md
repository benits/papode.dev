---
title: Redux VS Context Api - O que que é, Quando usar e como usar?
description: Redux VS Context Api - O que que é, Quando usar e como usar?
date: 2022-05-27 09:34:59
thumbnail: assets/img/image1.png
category: ReactJs
background: "#B31917"
---
Fala devs, que a força esteja com você!

Durante minha trajetoria como frontend engineer muitas vezes me deparei com essa duvida, o que realmente é Redux, o que é context Api, quando eu uso um ou outro? por qual motivo existem essas duas ferramentas



## O que é Redux?

Bom, segundo a própria documentação do Redux?

> Ele ajuda você a escrever aplicativos que **se comportam de forma consistente** , rodam em ambientes diferentes e são **fáceis de testar**. Centralizar o estado e a lógica do seu aplicativo permite utilizar recursos poderosos como **undo/redo** , **state persistence** e muito mais. \
> Utilizando Redux temos acesso a **Redux DevTools** uma ferramenta que facilita o rastreamento de **quando, onde, por que e como o estado do seu aplicativo mudou**. A arquitetura do Redux permite registrar alterações, usar **"depuração de viagem no tempo"** e até **enviar relatórios de erros completos para um servidor**.
>
> (fonte: [Redux](https://redux.js.org/) )

Redux é uma biblioteca que nos ajuda a gerenciar dados globais das nossas aplicações em um local centralizado, ele armazena todo o estado do aplicativo globalmente e qualquer componente pode acessar este estado sem a necessidade de se passar props de um componente para o outro.

![Diagrama exemplificando como funciona uma ação com Redux e sem Redux ](assets/img/image1.png "Diagrama exemplificando como funciona uma ação com Redux e sem Redux")

Alguns exemplos de dados que podemos armazenar seriam: 

* Produtos em um carrinho de compras;
* Feedback se o usuário está aguardando uma solicitação HTTP está em andamento;