# JavaScript documentado

Este arquivo apresenta uma versão comentada do código responsável pela consulta de CEP. O código executado pela aplicação permanece limpo em [`script.js`](../script.js).

## Código comentado

```javascript
// Seleciona os elementos que serão usados na consulta e no preenchimento do formulário.
const mensagemErro = document.getElementById("erro");
const campoCep = document.getElementById("cep");
const campoEndereco = document.getElementById("endereco");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

// Limpa os campos preenchidos pela API quando ocorre um erro.
function limparEndereco() {
    campoEndereco.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

// Mostra uma mensagem e adiciona a classe visual de erro.
function exibirErro(mensagem) {
    mensagemErro.textContent = mensagem;
    mensagemErro.classList.add("formulario__mensagem--erro");
}

// Consulta a API ViaCEP e preenche os campos do endereço.
async function buscarEndereco(cep) {
    // Remove tudo que não for número.
    const cepLimpo = cep.replace(/\D/g, "");

    mensagemErro.textContent = "";
    mensagemErro.classList.remove("formulario__mensagem--erro");

    // Um CEP brasileiro deve possuir exatamente oito números.
    if (cepLimpo.length !== 8) {
        limparEndereco();
        exibirErro("Digite um CEP válido com 8 números.");
        return;
    }

    try {
        // Espera a resposta da API antes de continuar.
        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

        // Interrompe a execução se a requisição HTTP falhar.
        if (!resposta.ok) {
            throw new Error("Não foi possível consultar o CEP.");
        }

        // Converte a resposta para um objeto JavaScript.
        const endereco = await resposta.json();

        // A ViaCEP usa a propriedade erro quando o CEP não existe.
        if (endereco.erro) {
            throw new Error("CEP não encontrado.");
        }

        // Preenche os campos com os dados retornados.
        campoEndereco.value = endereco.logradouro;
        campoBairro.value = endereco.bairro;
        campoCidade.value = endereco.localidade;
        campoEstado.value = endereco.uf;
    } catch (erro) {
        limparEndereco();
        exibirErro("CEP não encontrado. Verifique os números e tente novamente.");
        console.error(erro);
    }
}

// Faz a consulta quando o usuário sai do campo de CEP.
campoCep.addEventListener("blur", () => buscarEndereco(campoCep.value));
```

## Principais nomenclaturas

### `const`

Declara uma referência que não será reatribuída durante a execução do código.

### `async` e `await`

`async` indica que a função realiza operações assíncronas. `await` espera o resultado de uma dessas operações antes de continuar aquele trecho.

### `fetch()`

Envia uma requisição HTTP. Neste projeto, busca os dados do endereço na API ViaCEP.

### Expressão regular `/\D/g`

Localiza todos os caracteres que não são números. O método `replace()` os remove antes da consulta.

### `try`, `catch` e `throw`

O `try` contém o código que pode falhar. `throw` lança um erro manualmente e o `catch` executa o tratamento necessário.

### `.json()`

Converte o corpo da resposta da API para um objeto JavaScript.

### `document.getElementById()`

Localiza um elemento do HTML pelo valor do atributo `id`.

### `.textContent`

Lê ou altera somente o conteúdo textual de um elemento, sem interpretar HTML.

### `.classList.add()` e `.classList.remove()`

Adicionam ou removem classes CSS de um elemento.

### `addEventListener()`

Registra uma função para responder a um evento do navegador.

### `blur`

É disparado quando o campo perde o foco. Aqui, inicia a consulta depois que o usuário termina de preencher o CEP.

### Arrow function

A expressão `() =>` é uma forma curta de declarar uma função.
