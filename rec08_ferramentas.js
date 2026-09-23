const entrada = require("readline-sync");

const cadastros = [];

for (let i = 0; i < 4; i++) {
    console.log(`\nCadastro das ferramentas ${i + 1}`);

    const nome = entrada.question("Nome: ");
    const quantidade = entrada.questionInt("Quantidade disponivel: ");
    const qntMinima = entrada.questionInt("Quantidade Minima: ");

    const cadastro = {
        nome,
        quantidade,
        qntMinima
    };

    cadastros.push(cadastro);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < cadastros.length; i++) {
    const item = cadastros[i];

    console.log(`\ncadastro: ${item.nome}`);
    console.log(`Quantidade disponivel: ${item.quantidade}`);
    console.log(`Quantidade minima: ${item.qntMinima}`);

    if (item.quantidade < item.qntMinima) {
        console.log("Situação: REPOR");
    } else {
        console.log("Situação: ESTOQUE SUFICIENTE");
    }
}