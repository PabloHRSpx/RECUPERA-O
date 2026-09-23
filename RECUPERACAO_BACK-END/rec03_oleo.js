const entrada = require(`readline-sync`);

const oleo = entrada.question("Digite a porcentagem do oleo: ");

console.log("=== RELATORIO ===")

console.log(`A porcentagem do oleo: ${oleo}%`);

if (oleo > 40 && oleo <= 80) {

    console.log("Nivel da maquina: NIVEL NORMAL");
} else {
    
    console.log("Nivel da maquina: INSPECAO NECESSARIA");
}