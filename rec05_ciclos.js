const entrada = require("readline-sync");

const produtosPorCiclo = entrada.questionInt("Quantos produtos a esteira produz por ciclo?: ");

console.log("\n=== PRODUÇÃO ACUMULADA ===");

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const acumulado = produtosPorCiclo * ciclo;
    console.log(`Ciclo ${ciclo}: ${acumulado} produtos`);
}