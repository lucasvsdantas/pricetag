const campoPreco = document.getElementById("preco");

campoPreco.addEventListener("input", soNumero());

function soNumero() {

    // Pega apenas os números digitados
    let valor = this.value.replace(/\D/g, "");

    // Converte os números para centavos
    valor = Number(valor) / 100;

    // Formata para Real brasileiro
    this.value = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}