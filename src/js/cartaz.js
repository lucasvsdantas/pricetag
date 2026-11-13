
function interligar(idCampo, idPreview, padrao = ""){
    
    const campo = document.getElementById(idCampo);
    const alvo = document.getElementById(idPreview);

    const atualizar = () => alvo.textContent = campo.value || padrao;

    campo.addEventListener("input", atualizar);
    campo.addEventListener("change", atualizar);
    atualizar();
}

//Função para o campo Preço
document.addEventListener("DOMContentLoaded", function () {

    const campoPreco = document.getElementById("campo-preco");
    const prevPreco = document.getElementById("prev-preco");

    campoPreco.addEventListener("input", function () {

        // Pega apenas os números digitados
        let valor = this.value.replace(/\D/g, "");

        if (valor === "") {
            this.value = "";
            prevPreco.textContent = "R$ 0,00";
            return;
        }
        // Converte para centavos
        valor = Number(valor) / 100;

        // Formata para Real brasileiro
        this.value = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        // Atualização em tempo real do campo preço na Preview
        prevPreco.textContent = this.value;
        
    });
    // Atualização em tempo real dos demais campos
    interligar("campo-detalhes", "prev-detalhes", "Laranja Pera");
    interligar("campo-complemento", "prev-complemento");
    
});






