const entrada = require(`readline-sync`);

const vibracao = entrada.questionFloat("Digite o nivel de vibracao em mm/s: ");

console.log(`O valor da vibracao: ${vibracao}mm/s`);

console.log("=== RELATORIO ===")

if (vibracao <= 3) {
    console.log("Situacao: ESTAVEL");
} else if (vibracao > 3 && vibracao <= 6) {
    console.log("Situacao: ATENCAO");
} else {
    console.log("Situacao: CRITICA");
}