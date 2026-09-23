const entrada = require("readline-sync");

const vibracao = entrada.questionFloat("Digite a vibracao do equipamento (mm/s): ");

let classificacao;

if (vibracao <= 3) {
    classificacao = "ESTAVEL";
} else if (vibracao <= 6) {
    classificacao = "ATENÇÃO";
} else {
    classificacao = "CRÍTICA";
}

console.log("\n=== SITUAÇÃO DO EQUIPAMENTO ===");
console.log(`vibracao: ${vibracao} mm/s`);
console.log(`classificacao: ${classificacao}`);