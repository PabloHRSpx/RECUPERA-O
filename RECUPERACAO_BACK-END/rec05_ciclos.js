const entrada = require(`readline-sync`);

let produtos = 0;

for (let ciclo = 1; ciclo <= 12; ciclo ++) {
    const produzidos = entrada.questionInt(`Digite a quantidade de produtos produzidos no ciclo ${ciclo}: `);
    produtos += produzidos
    console.log(`Total da producao acumulada: ${produtos}`);
    console.log("---------------------------------");
}

console.log(`O total da producao foi: ${produtos}`);