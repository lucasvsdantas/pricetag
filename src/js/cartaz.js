
//Função para o campo Preço
document.addEventListener("DOMContentLoaded", function() {

    const campoPreco = document.getElementById("campo-preco");
    
    campoPreco.addEventListener("input", function() {

        // Pega apenas os números digitados
        let valor = this.value.replace(/\D/g, "");

        // Converte para centavos
        valor = Number(valor) / 100;

        // Formata para Real brasileiro
        this.value = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    });

});