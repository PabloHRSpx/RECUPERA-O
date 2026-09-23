const entrada = require(`readline-sync`);

const ferramentas = [];

for (let i = 0; i <= 3; i ++) {
    const nome = entrada.question(`Digite o nome da ferramenta ${i+1}: `);
    const quantidade = entrada.questionInt("Digite a quantidade de ferramentas: ");
    const minimo = entrada.questionInt("Digite o minimo de ferramentas: ");
    ferramentas.push (nome,quantidade,minimo)
}

if (quantidade < minimo && ferramentas.length) {
    console.log(`Nome da ferramenta: ${ferramentas[i]}`);
    console.log(`Quantidade de ferramenta: ${ferramentas[i]}`);
    console.log(`Minimo de ferramentas: ${ferramentas[i]}`);
    console.log("REPOR")
}