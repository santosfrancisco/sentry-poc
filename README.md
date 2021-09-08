# POC de implementação do Sentry em uma App com sub-módulos

POC criada para analisar a viabilidade de utilizar o Sentry para monitorar uma aplicação react-native utilizando microapps no no modelo de módulos criados utilizando a ferramenta [Bob builder](https://github.com/callstack/react-native-builder-bob)

## Como executar esta POC

- Clone o projeto
- Navegue até o projeto _host_ `cd Sentry/SentryPoc`
- Instale as dependencias `yarn`
- Execute no Android `yarn android` ou no iOS `yarn ios`

## Conceito

- O projeto _host_ (SentryPoc) recebe toda a configuração e inicializa o Sentry. Cada módulo recupera o _client_ do Sentry do projeto _host_ e cria o próprio _hub_ podendo adicionar as tags, extraInfo etc... no _scope_ para identificar os logs, e utiliza esse _hub_ para lançar os logs para o Sentry. Exceções não mapeadas sào capturadas no projeto _host_ e nos módulos, porém, exceções não mapeadas lançadas pelos módulos não carregam as tags ou extraInfo incluídas no _scope_.

Para lançar logs no projeto _host_ basta usar o Sentry normalmente (`Sentry.captureException(erro)` por exemplo). Já nos módulos, para que os logs venha com as tags e demais infos adicionadas ao _scope_, os logs deve ser capturados usando o _hub_ que é criado no custom hook (`sentryHub.captureException(erro)` por exemplo)
