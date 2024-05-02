
const teclado = require(`prompt-sync`)();

function menu(){
    console.clear();
    console.log("--------- Calculadora -------");
    console.log("------- Selecione a Operação --------");
    console.log();
    console.log("Digite a operação desejada:");
    console.log("+ - Adição");
    console.log("- - Subtração");
    console.log("* - Multiplicação");
    console.log("/ - Divisão");
    console.log("! - Sair")
    let opcao : string = teclado("Digite a operação --> ");
    selecao(opcao);
}
menu();

function selecao(opcao: string):void {
    switch (opcao){
        case `!` : sair(); break;
        case `+`: adicao(); break;
        case `-` : subtracao(); break;
        case `*` : multiplicacao(); break;
        case `/` : divisao(); break;
        default : break;
    }
}

function adicao(): void {
    let numeroUm = parseFloat(teclado(`Digite o 1º número: `));
    let numeroDois = parseFloat(teclado(`Digite o 2º número: `));
    const res = numeroUm + numeroDois;
    console.log(`O valor da adição de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${res}`);
    console.log(`Clique Enter para continuar`);
    teclado();
    menu();
}

function subtracao(): void {
    let numeroUm = parseFloat(teclado(`Digite o 1º número: `));
    let numeroDois = parseFloat(teclado(`Digite o 2º número: `));
    const res = numeroUm - numeroDois;
    console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${res}`);
    console.log(`Clique Enter para continuar`);
    teclado();
    menu();
}

function multiplicacao(): void {
    let numeroUm = parseFloat(teclado(`Digite o 1º número: `));
    let numeroDois = parseFloat(teclado(`Digite o 2º número: `));
    const res = numeroUm * numeroDois;
    console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${res}`);
    console.log(`Clique Enter para continuar`);
    teclado();
    menu();
}

function divisao(): void {
    let numeroUm = parseFloat(teclado(`Digite o 1º número: `));
    let numeroDois = parseFloat(teclado(`Digite o 2º número: `));
    const res = numeroUm / numeroDois;
    console.log(`O valor da divisão de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${res}`);
    console.log(`Clique Enter para continuar`);
    teclado();
    menu();
}

function sair(): void{
    console.clear();
    console.log(`Fim do Programa.`);
    process.exit(0);
}