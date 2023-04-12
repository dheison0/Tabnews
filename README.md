# Tabnews

Mais um cliente qualquer do site [TabNews], esse esta sendo criado em
JavaScript com React Native, o foco aqui é aumentar meu conhecimento
no framework e na performance do aplicativo, ele esta sendo testado
em um Samsung Galaxy A01 Core e um Motorola Moto One Macro

App rodando nos dois celulares:

![Rodando no One Macro e no A01 Core](https://i.imgur.com/Sq3PrAi.png)

![Tela de uma postagem](https://i.imgur.com/sPJ6Wvh.png)

As especificações de cada um são:

Moto One Macro:
  - Tela: 6.23¨ 720x1520
  - Android: 10
  - RAM: 4GB
  - CPU: 8x @ 1.99GHz
  - Arquitetura: ARM64-v8a 64bit

Samsung A01 Core:
  - Tela: 5.3¨ 720x1480
  - Android: 10 versão Go
  - RAM: 2GB
  - CPU: 4x @ 1.5GHz
  - Arquitetura: ARMv7l 32bit


## TODO

  - [X] Inicializar o projeto e criar uma classe para controle da API
  - [X] Adicionar as janelas de navegação usando Stack e Drawer navigation
  - [X] Criar a tela inicial
    - [X] Componente de carregamento
    - [X] Componente de renderização do item na lista
    - [X] Modal para troca de estratégia
    - [X] Criar Componente para mostrar erros no carregamento
  - [X] Criar a página da postagem
    - [X] Adicionar o markdown formatado
    - [X] Criar componente de comentário
  - ~~[ ] Criar tela de comentários~~(substituído pela tela de postagem)
  - [ ] Criar tela de configurações
    - [ ] Configurar o tema padrão
    - [ ] Definir a estratégia padrão
  - [X] Criar tela de itens salvos
  - [ ] Criar tela do usuário com postagens separadas de comentários
  - [ ] Adicionar suporte a login // Essa parte ainda vai demorar
    - [ ] Criar tela de login
    - [ ] Adicionar suporte a up/down vote e comentar
    - [ ] Adicionar tela de criar postagem

  [TabNews]: <https://www.tabnews.com.br>