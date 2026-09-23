const entrada = require("readline-sync");

function calcularPercentual(Util, Total) {
    return (Util / Total) * 100;
}

function calcularPercentual(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75 && percentual <= 89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const quantidadeTotal = entrada.questionFloat("Quantidade Total: ");
const quantidadeUtil = entrada.questionFloat("Quantidade Util: ");

const percentual = calcularPercentual(quantidadeTotal, quantidadeUtil);
const classificacao = calcularPercentual(percentual);

console.log("\n=== RELATÓRIO DE EFICIÊNCIA ===");
console.log(`Quantidade Total: ${quantidadeTotal}`);
console.log(`Quantidade util: ${quantidadeUtil}`);
console.log(`percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);

