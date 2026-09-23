const entrada = require(`readline-sync`);

const peca = entrada.question("Digite o nome da peca: ");

const comprado = entrada.questionInt("Digite a quantidade de pecas compradas: ");

const preco = entrada.questionFloat("Digite o preco unitario: R$");

const total = comprado * preco;

console.log("=== RELATORIO ===")

console.log(`O nome da peca: ${peca}`);
console.log(`A quantidade de pecas compradas: ${comprado}`);
console.log(`O valor unitario de cada peca: ${preco}`);
console.log(`O valor total da compra: R$${total.toFixed(2)}`);