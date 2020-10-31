---
title: Git guia prático para iniciantes - Configurando git - [DESVENDANDO GIT -
  Parte 1]
description: Neste artigo iremos entender como funcionar o GIT que é o sistema
  de controle de versão mais comumente usado.
date: 2020-10-06T09:01:52.000Z
thumbnail: assets/img/comandos-git.png
category: DEV
background: "#7D669E"
---
## Fala Dev!

No artigo de hoje vamos entender melhor como podemos versionar nosso código de uma forma segura, na nuvem e concisa.

Vamos conversar um pouco sobre o famoso Git!

Uma das maneiras mais fácil de Você versionar uma pasta/repositório, chega de vários .zip com 1.0, 1.1, 1.2. Aquelas nomenclaturas doidas em suas pastas que mais atrapalham do que ajudam

## Por que Git?

Git é o sistema de controle de versão mais comumente usado.O Git rastreia as alterações feitas nos arquivos, para que você tenha um registro do que foi feito e pode reverter para versões específicas se precisar.O Git também torna a colaboração mais fácil, permitindo que mudanças por várias pessoas sejam mescladas em uma única fonte.

## Quando usar Git?

Um dos grandes problemas ao desenvolver software é salvar o projeto feito, assim como manter rastro das modificações feitas. É muito fácil ter problemas desenvolvendo um projeto, onde códigos são frequentemente perdidos de diferentes maneiras. Um exemplo disso é, se os arquivos não forem salvos em alguma alternativa de nuvem, pode ser que com o tempo o arquivo seja perdido com formatação do computador, por exemplo.

Outro problema muito comum acontece quando se trabalha com vários desenvolvedores. O que pode ser feito quando diferentes pessoas mexeram no código? É possível solucionar isso de maneira manual, mas será muito maçante e tomará bastante tempo.

Em problemas como esses, entre outros mais, o Git pode ser de grande valia, se corretamente utilizado. Existem também outras ferramentas de versionamento de projetos, mas especificamente o Git tem muitos recursos além de outras opções.

## Primeiros passos com Git?

Agora que ja entendemos o que é o Git e como ele pode nos ajudar no nosso dia a dia como Dev, vamos entender como podemos introduzir ele em nossos projetos.

Antes de mais nada precisamos instalar o [Git](https://git-scm.com/) em nosso ambiente de trabalho, você pode fazer o download pelo site oficial <https://git-scm.com/> 

* #### Instalação no windows

  Basta entrar em <https://git-scm.com/>  e baixar o software e dar um double click em cima do executável para começar a instalação

  ![Popup de instalação do git no windows](assets/img/instalacao-git-windows.png "Intalação do git no windows")

  Aqui é simples: **Next**, **Next** até chegar a essa tela:

  ![Popup para seleciona Git Bash](assets/img/git-bash-here.png "Git Bash Here")

  Deixe marcado a opção **Git Bash Here**. Com essa opção você poderá abrir o terminal do Git a partir de qualquer pasta em que estiver com o botão direito do mouse.

  Ai vem o **Next**, **Next** de novo até essa tela:

  ![Popup select Unix Style](assets/img/unix-style-git-windows.png "Unix Style")

  Selecione a segunda opção para que não existam conflitos entre as quebras de linha que o Windows coloca com as que os Sistemas Unix usam.

  **Next**, **Next** e podemos então configurar.

  * Abra o prompt de comando e vamos configurar seu nome de usuário e e-mail global do Git:

    ```shell
    git config --global user.name "papo de dev"
    git config --global user.email "exemplo@seuemail.com.br"
    ```

  > Nota: Lembre de substituir **papo de dev** e **exemplo@seuemail.com.br** com seus dados. Qualquer *commit* criado posteriormente será associado à esses dados.
* ### Instalação no Linux

  Se você é um usuário Linux, então deve estar acostumado com instalar programas e pacotes em seu computador usando comandos de instalação `apt-get `ou `yum`. Instalar o GIT não é diferente:

  **Para usuários Debian/Ubuntu (apt-get):**

  1. Abra seu terminal, pode fazer isso apertando CTRL + ALT + T e digite os comandos abaixo:

     ```shell
     sudo apt-get update 
     sudo apt-get install git
     ```
  2. Verifique se a instalação ocorreu com sucesso usando:

     ```shell
     git --version
     ```
  3. Abra o terminal novamente e vamos configurar seu nome de usuário e e-mail global do Git:

     ```shell
     git config --global user.name "papo de dev"
     git config --global user.email "exemplo@seuemail.com.br"
     ```

     > Nota: Lembre de substituir **papo de dev** e **exemplo@seuemail.com.br** com seus dados. Qualquer *commit* criado posteriormente será associado à esses dados.

## Conclusão

Concluindo nosso artigo, entendemos para o que serve o git, quando utiliza-lo e como fazer suas primeiras configurações.

Qualquer problema seguindo nosso passo a passo, pode comentar aqui embaixo que te ajudamos a resolver.

Se você gostou do post, comenta aqui em baixo quais temas gostaria de ver no nosso blog ou canal do youtube, compartilha com seus amigos, nos ajude a chegar ao máximo de pessoas possível.