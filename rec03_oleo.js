const entrada = require("readline-sync");

const oleo = entrada.questionFloat("Qual o nivel do oleo?:  ");

console.log(`Nivel do oleo: ${oleo} %`);

if (oleo >= 40 && oleo <= 80) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA");
}