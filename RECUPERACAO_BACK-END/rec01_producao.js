const entrada = require(`readline-sync`);

const caixas = entrada.questionInt("Digite a quantidade de caixas produzidas por hora: ");

const quantidade = entrada.questionInt("Digite a quantidade de horas trabalhada: ");

const total = quantidade * caixas;

console.log("=== RELATORIO ===")

console.log(`A quantidade de caixas produzidas por hora: ${caixas}`);
console.log(`A quantidade de horas trabalhadas: ${quantidade}`);
console.log(`O total de caixas produzidas: ${total}`);

