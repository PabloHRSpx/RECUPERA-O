function maoDeObra(hora) {
    return hora = 95
}

function calcularTotal (valorMateriais, horas) {
    const obra = maoDeObra(hora);
    return valorMateriais + obra;
}

function verificarDesconto (total) {
    if (total <= 1000) {
        return "SEM DESCONTO";
    } else {
        return "DESCONTO DE 10%";
    }
}

module.exports = {
    maoDeObra,
    calcularTotal,
    verificarDesconto
};