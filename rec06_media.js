const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const medicao = entrada.questionFloat(`Digite os 6 tempos, tempo ${i}: `);
    soma += medicao;
}

const media = soma / 6;

console.log("\n=== RESULTADO DOS TEMPOS ===");
console.log(`Soma dos tempos: ${soma}`);
console.log(`Média dos tempos: ${media}`);