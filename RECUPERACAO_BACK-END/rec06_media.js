const entrada = require(`readline-sync`);

let soma = 0;

for (let i = 1;i <= 6;i ++) {
    const tempo = entrada.questionInt(`quantos minutos foi o tempo ${i}: `);
    soma += tempo
}

const media = soma/6

console.log("=== RELATORIO ===");

console.log(`Total de todos os tempos: ${soma}`);
console.log(`A media do total de tempo: ${media}`);