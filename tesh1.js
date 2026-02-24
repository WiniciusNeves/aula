/*
 desenvolver uma aplicao que consiga validar se a funcao matematica insecida contem a estrutura conrreta dde paranteses e chaves, ou seja, se a funcao tiver um parenteses de abertura, deve conter um parenteses de fechamento, e o mesmo para as chaves. A funcao deve retornar true se a estrutura estiver correta e false caso contrario. exeplo: "f(x) = (x + 2) * {x - 3}" deve retornar true, enquanto "f(x) = (x + 2 * {x - 3}" deve retornar false.
*/

const readline = require('readline');

function validarEstrutura(funcao){
    let pilha = [];
    for (let char of funcao) {
        if (char === '(' || char === '{') {
            pilha.push(char);
        } else if (char === ')' || char === '}') {
            if (pilha.length === 0) return false;
            let topo = pilha.pop();
            if ((char === ')' && topo !== '(') || 
                (char === '}' && topo !== '{')) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a função matemática: ", (entrada) => {
    console.log(validarEstrutura(entrada));
    rl.close();
});