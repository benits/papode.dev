---
title: "DOM - Document Object Model - HTML [Desvendando #pr_02]"
description: Neste artigo iremos falar sobre a grande e temida DOM. Qual é e como funciona?
date: 2020-05-18 06:02:25
thumbnail: assets/img/what-is-document-object-model-in-js-featured-image.jpg
category: HTML
background: "#7D669E"
---
é uma interface (**API**) para documentos HTML e XML. Quando o navegador lê (*analisa*) nosso documento HTML pela primeira vez, ele cria um objeto grande, um objeto realmente grande com base no documento HTML que é o **DOM**. É uma estrutura de árvore que é modelada a partir do documento HTML. O **DOM** é usado para interagir e modificar a **estrutura** do **DOM** ou elementos ou nós específicos.

Imagine se tivermos uma estrutura HTML como esta.

![DOMHTML](assets/img/domhtml.png "DOMHTML")

O equivalente **DOM** seria assim.

![DOMSchema](assets/img/domschema.png "DOMSchema")

O `document `objeto em **JavaScript** representa o **DOM**. Ele nos fornece muitos métodos que podemos usar para selecionar elementos para atualizar o conteúdo dos elementos e muito mais.