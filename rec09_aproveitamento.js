const entrada = require("readline-sync");

function calcularAproveitamento(Util, Total) {
    return (Util / Total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75 & percentual <= 89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const quantidadeTotal = entrada.questionFloat("Quantidade Total: ");
const quantidadeUtil = entrada.questionFloat("Quantidade Util: ");

const eficiencia = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento(eficiencia);

console.log("\n=== RELATÓRIO DE EFICIÊNCIA ===");
console.log(`Quantidade Total: ${quantidadeTotal}`);
console.log(`Quantidade util: ${quantidadeUtil}`);
console.log(`percentual: ${eficiencia.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);

