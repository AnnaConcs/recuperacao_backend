const entrada = require("readline-sync");

const funcoes = require('./funcoesOrcamento');


const cliente = entrada.question("Nome do Cliente: ");
const valorMateriais = entrada.questionFloat("Valor dos Materiais: R$ ");
const horas = entrada.questionFloat("Horas de servico: ");

const maoDeObra = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorMateriais, horas);
const desconto = funcoes.verificarDesconto(total);

console.log("\n=== RELATÓRIO DE MANUTENÇÃO ===");
console.log(`Nome cliente: ${cliente}`);
console.log(`Mão de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);