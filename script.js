const mensagemErro = document.getElementById("erro");
const campoCep = document.getElementById("cep");
const campoEndereco = document.getElementById("endereco");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function limparEndereco() {
    campoEndereco.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function exibirErro(mensagem) {
    mensagemErro.textContent = mensagem;
    mensagemErro.classList.add("formulario__mensagem--erro");
}

async function buscarEndereco(cep) {
    const cepLimpo = cep.replace(/\D/g, "");

    mensagemErro.textContent = "";
    mensagemErro.classList.remove("formulario__mensagem--erro");

    if (cepLimpo.length !== 8) {
        limparEndereco();
        exibirErro("Digite um CEP válido com 8 números.");
        return;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar o CEP.");
        }

        const endereco = await resposta.json();

        if (endereco.erro) {
            throw new Error("CEP não encontrado.");
        }

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

campoCep.addEventListener("blur", () => buscarEndereco(campoCep.value));
