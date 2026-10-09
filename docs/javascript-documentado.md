# JavaScript documentado

Este arquivo apresenta uma versão comentada do código responsável pela consulta de CEP. O arquivo executado pela aplicação continua limpo em [`script.js`](../script.js).

## Código comentado

```javascript
// Declara uma função assíncrona que recebe o CEP informado pelo usuário.
async function buscaEndereco(cep) {
    // Localiza o elemento usado para mostrar mensagens de erro.
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        // Envia uma requisição para a API ViaCEP usando o CEP recebido.
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // Converte a resposta da API para um objeto JavaScript.
        var consultaCEPConvertida = await consultaCEP.json();

        // Interrompe a execução quando a API informa que o CEP não existe.
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }

        // Localiza os campos que receberão os dados do endereço.
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        // Preenche os campos com os valores retornados pela API.
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        // Exibe uma mensagem quando o CEP é inválido ou a consulta falha.
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

// Localiza o campo de CEP no formulário.
var cep = document.getElementById('cep');

// Executa a consulta quando o usuário sai do campo de CEP.
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
```

## Principais nomenclaturas

### `async`

Indica que a função realiza uma operação assíncrona e permite o uso de `await` em seu interior.

### `await`

Espera a conclusão de uma operação assíncrona antes de continuar a execução daquele trecho da função.

### `fetch()`

Envia uma requisição HTTP. Neste projeto, é usado para buscar os dados do endereço na API ViaCEP.

### Template string

É o texto escrito entre crases. A expressão `${cep}` insere o valor da variável dentro do endereço da API.

### `.json()`

Converte o corpo da resposta recebida da API para um objeto JavaScript.

### `try` e `catch`

O bloco `try` contém o código que pode gerar um erro. Se isso acontecer, o `catch` recebe o erro e executa o tratamento definido.

### `throw Error()`

Cria e lança manualmente um erro. Aqui, isso ocorre quando a API informa que o CEP não existe.

### `document.getElementById()`

Localiza um elemento do HTML pelo valor do atributo `id`.

### `.value`

Permite ler ou alterar o valor de um campo de formulário.

### `addEventListener()`

Registra uma função que será executada quando determinado evento acontecer.

### `focusout`

É disparado quando o usuário retira o foco do campo. Neste projeto, inicia a busca depois que o usuário termina de preencher o CEP.

### Arrow function

A expressão `() =>` é uma forma curta de declarar uma função. Ela chama `buscaEndereco()` passando o CEP digitado.
