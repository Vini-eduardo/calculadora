var teclado = require("prompt-sync")();
function menu() {
    console.clear();
    console.log("--------- Calculadora -------");
    console.log("------- Selecione a Operação --------");
    console.log();
    console.log("Digite a operação desejada:");
    console.log("+ - Adição");
    console.log("- - Subtração");
    console.log("* - Multiplicação");
    console.log("/ - Divisão");
    console.log("! - Sair");
    var opcao = teclado("Digite a operação --> ");
    selecao(opcao);
}
menu();
function selecao(opcao) {
    switch (opcao) {
        case "!":
            sair();
            break;
        case "+":
            adicao();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
        default: break;
    }
}
function adicao() {
    var numeroUm = parseFloat(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var numeroDois = parseFloat(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var res = numeroUm + numeroDois;
    console.log("O valor da adi\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(res));
    console.log("Clique Enter para continuar");
    teclado();
    menu();
}
function subtracao() {
    var numeroUm = parseFloat(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var numeroDois = parseFloat(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var res = numeroUm - numeroDois;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(res));
    console.log("Clique Enter para continuar");
    teclado();
    menu();
}
function multiplicacao() {
    var numeroUm = parseFloat(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var numeroDois = parseFloat(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var res = numeroUm * numeroDois;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(res));
    console.log("Clique Enter para continuar");
    teclado();
    menu();
}
function divisao() {
    var numeroUm = parseFloat(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var numeroDois = parseFloat(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var res = numeroUm / numeroDois;
    console.log("O valor da divis\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(res));
    console.log("Clique Enter para continuar");
    teclado();
    menu();
}
function sair() {
    console.clear();
    console.log("Fim do Programa.");
    process.exit(0);
}
