# Consulta de CEP com JavaScript

Formulário de cadastro que consulta a API ViaCEP para preencher automaticamente os dados de endereço a partir do CEP informado pelo usuário.

## Funcionalidades

- Consulta de endereço pelo CEP
- Preenchimento automático de cidade, logradouro e estado
- Validação de CEP inexistente ou inválido
- Exibição de mensagem de erro
- Página de confirmação após o envio do formulário
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- API ViaCEP

## Como funciona

Ao sair do campo de CEP, o JavaScript envia uma requisição para a API ViaCEP. Quando o CEP é encontrado, os campos de endereço são preenchidos automaticamente. Caso a consulta falhe ou o CEP não exista, a aplicação exibe uma mensagem de erro.

## Conceitos praticados

- Consumo de API com `fetch()`
- Funções assíncronas com `async` e `await`
- Tratamento de erros com `try`, `catch` e `throw`
- Conversão de resposta para JSON
- Manipulação do DOM
- Eventos do navegador
- Template strings

## Estrutura do projeto

```text
consumo-de-api-js/
├── docs/
├── img/
├── styles/
├── cadastro-finalizado.html
├── index.html
├── script.js
└── README.md
```

## Executando o projeto

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Informe um CEP válido para testar o preenchimento automático.

## Documentação do JavaScript

O código utilizado pela aplicação permanece limpo no arquivo `script.js`. Uma versão comentada, acompanhada da explicação das principais funções e nomenclaturas, está disponível em:

➡️ [Entenda o código JavaScript](docs/javascript-documentado.md)

## Aprendizado

Projeto desenvolvido durante os estudos de consumo e tratamento de dados de APIs com JavaScript.

## Autor

Desenvolvido por [Vinicius Antunes](https://github.com/vinicius-antunes).
