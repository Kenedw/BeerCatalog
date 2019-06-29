# Objetivo do teste

    1.Implementar um Web App que consulte uma API e exiba uma lista de cervejas. 
    2.Na listagem deve ser exibido o nome e tagline. Ao selecionar um item na lista, 
    3.Exibir a tela de detalhes, contendo: nome, tagline, descrição e imagem.

## Demonstração
A aplicação esta hospedada com o endereço [https://beer-catalog.netlify.com/](https://beer-catalog.netlify.com/).

## Estrutura de pastas

```
X:\MYAPP
├───node_modules
├───public
└───src
    ├───assets
    │   └───image
    ├───components
    │   └───card
    ├───pages
    │   ├───Footer
    │   ├───Header
    │   ├───HomePage
    │   └───InformationPage
    ├───services
    │   └───api
    └───store
        ├───actions
        │   └───types
        └───BeerReducer
```

## Scripts
No diretório do projeto você pode executar:

### ``$ yarn install``
Para instalação de todas as dependências necessárias.

### `$ yarn start`
Para executar uma versão de desenvolvimento da aplicação.
Sera aberto a pagina [https://localhost:3000](https://localhost:3000), para visualização da aplicação no navegador.

### `$yarn build`
Para buildar uma versão de produção, da aplicação. 

# Requisitos

- Utilizar a seguinte API no desafio: https://punkapi.com/documentation/v2;
- Utilizar a lib React;
- Criar a aplicação toda em componentes;
- Seguir os padrões e convenções do HTML, CSS e Javascript;
- Utilizar o Webpack;
- Utilizar npm ou yarn para gerenciar a aplicação;
- Enviar o código para um repositório git público (github, Bitbucket, Gitlab);

#### Bônus

[ ] Implementar Testes Unitários e Funcionais;
[ ] Implementar testes Jest;
[x] Utilizar uma lib para o uso de rotas (React Routes);
[x] Utilizar uma lib para o gerenciamento de state (Redux);
[x] Utilizar axios para requisições HTTP na API;
[ ] Utilizar code coverage (Karma, Istambul, Jasmine);
[x] Utilizar SASS, POSTCSS ou qualquer outro Transpiler pra CSS;
[x] Aplicação rodando em um servidor e o acesso a uma URL;
[x] Implementação de um deploy;

