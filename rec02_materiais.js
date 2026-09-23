const entrada = require("readline-sync");

const peca = entrada.question("Nome da peca: ");
const quantidade = entrada.questionInt("Quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Preço unitário: R$ ");

const total = quantidade * precoUnitario;

console.log("\n=== RESUMO DA COMPRA ===");
console.log(`peca: ${peca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`preco unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);