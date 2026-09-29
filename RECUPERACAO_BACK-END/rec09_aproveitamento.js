const entrada = require(`readline-sync`);

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarPercentual(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE"
    } else if (percentual >= 75) {
        return "ADEQUADO"
    } else {
        return "REVISAR PROCESSO"
    }
}

const quantiaTotal = entrada.questionFloat("Quantidade util: ");
const quantiaUtil = entrada.questionFloat("Quantidade total: ");

const aproveitamento = calcularAproveitamento(quantiaTotal, quantiaUtil);
const porcentagem = classificarPercentual(aproveitamento);

console.log("==============================================================")

console.log(`O total: ${quantiaTotal}`);
console.log(`A quantidade util: ${quantiaUtil}`);
console.log(`O porcentual: ${aproveitamento.toFixed(2)}%`);
console.log(`A classificacao: ${porcentagem}`);

console.log("==============================================================")