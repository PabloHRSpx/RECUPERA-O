const entrada = require(`readline-sync`);

const cadastro = [];

for (let i = 0;i <= 5; i ++) {
    const setores = entrada.question(`Digite o nome de um setor ${i+1}: `);
    cadastro.push (setores);
};

console.log("=== RELATORIO ===");

for (let setor = 0;setor < cadastro.length;setor ++) {
    console.log(`Setor ${setor+1} - ${cadastro[setor]}`);
}