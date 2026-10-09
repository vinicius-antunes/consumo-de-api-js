# ViaForm

Formulário de cadastro com identidade visual própria e preenchimento automático de endereço a partir do CEP informado pelo usuário.

## Sobre o projeto

O ViaForm foi desenvolvido para praticar o consumo e o tratamento de dados de uma API com JavaScript. Ao sair do campo de CEP, a aplicação consulta a API ViaCEP, valida o valor informado e preenche automaticamente endereço, bairro, cidade e estado.

## Funcionalidades

- Consulta de endereço pelo CEP
- Preenchimento automático dos campos de endereço
- Remoção automática de caracteres não numéricos do CEP
- Validação de CEP com quantidade incorreta de números
- Tratamento de CEP inexistente e falhas na requisição
- Mensagem de erro acessível ao usuário
- Página de confirmação do cadastro
- Layout responsivo

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- API ViaCEP

## Conceitos praticados

- Funções assíncronas com `async` e `await`
- Consumo de API com `fetch()`
- Tratamento de erros com `try`, `catch` e `throw`
- Conversão de respostas para JSON
- Manipulação do DOM
- Eventos do navegador
- Expressões regulares
- Responsividade com media queries
- HTML semântico e atributos de acessibilidade

## Estrutura do projeto

```text
consumo-de-api-js/
├── docs/
│   └── javascript-documentado.md
├── styles/
├── cadastro-finalizado.html
├── index.html
├── script.js
└── README.md
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Execute o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Preencha o formulário e informe um CEP válido para testar a consulta.

## Documentação do JavaScript

O arquivo utilizado pela aplicação permanece limpo. A versão comentada, acompanhada da explicação das principais nomenclaturas, está disponível abaixo:

➡️ [Entenda o código JavaScript](docs/javascript-documentado.md)

## Origem e personalização

O projeto surgiu durante um curso da Alura sobre consumo de APIs. A identidade ViaForm, o novo layout, a organização da interface e as melhorias de validação foram desenvolvidos para personalizar o projeto e aplicar os conhecimentos adquiridos.

## Autor

Desenvolvido por [Vinicius Antunes](https://github.com/vinicius-antunes).
