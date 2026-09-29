const entrada = require(`readline-sync`);

const ferramentas = [];

for (let i = 0; i <= 3; i ++) {
    const nome = entrada.question(`Digite o nome da ferramenta ${i+1}: `);
    const quantidade = entrada.questionInt("Digite a quantidade de ferramentas: ");
    const minimo = entrada.questionInt("Digite o minimo de ferramentas: ");

    const ferramenta = {nome, quantidade,minimo};

    ferramentas.push (ferramenta)
}

for (let i = 0;i < ferramentas.length; i++) {

    const item = ferramentas[i];
    console.log(`Nome da ferramenta: ${item.nome}`)
    console.log(`Quantidade de ferramentas: ${item.quantidade}`)
    console.log(`Minimo de ferramentas: ${item.minimo}`)


    if (item.quantidade < item.minimo) {
        console.log("REPOR");
    } else {
        console.log("ESTOQUE SUFICIENTE");
    }
    console.log("===============================================================")

}