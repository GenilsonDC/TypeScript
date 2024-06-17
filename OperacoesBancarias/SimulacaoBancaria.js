"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function simulacaoBancaria() {
    var saldo = 0;
    var continuar = true;
    while (continuar) {
        console.log("************ MENU ************");
        console.log(" 1 Depositar");
        console.log(" 2 Sacar");
        console.log(" 3 Consultar Saldo");
        console.log(" 0 Encerrar");
        console.log("************  ~  ************\n");
        var opcao = parseInt(readlineSync.question("Opcao: ") || "0");
        switch (opcao) {
            case 1:
                var deposito = parseFloat(readlineSync.question("Digite o valor que deseja depositar: ") || "0");
                if (deposito <= 0) {
                    console.log("\nDigite um valor maior que zero! \n");
                }
                else {
                    saldo += deposito;
                    console.log("Saldo atual: ".concat(saldo.toFixed(1), "\n"));
                }
                break;
            case 2:
                var saque = parseFloat(readlineSync.question("Digite o valor que deseja sacar: ") || "0");
                if (saque <= 0) {
                    console.log("\nDigite um valor maior que zero! \n");
                }
                else {
                    if (saque > saldo) {
                        console.log("Saldo insuficiente!");
                        console.log("Saldo atual: ".concat(saldo.toFixed(1), "\n"));
                    }
                    else {
                        saldo -= saque;
                        console.log("Saldo atual: ".concat(saldo.toFixed(1), "\n"));
                    }
                }
                break;
            case 3:
                console.log("Saldo atual: ".concat(saldo.toFixed(1), "\n"));
                break;
            case 0:
                console.log("Programa encerrado.\n");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
    }
}
simulacaoBancaria();
