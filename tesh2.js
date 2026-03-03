/*
 * desenvolver uma aplicacao que baseado no input binario, passa realizar as operacoes artimetica de soma e subtracao produto de entrada o resultado em binario exeplo 0001 0/1 0001 0=soma 1=subtracao resultado somente 4 casas

*/


function binaryOperation(input) {
    const { num1, operator, num2 } = input;
    let result = 0;
    if (operator === '0') {
        result = parseInt(num1, 2) + parseInt(num2, 2);
    } else if (operator === '1') {
        result = parseInt(num1, 2) - parseInt(num2, 2);
    }

    if (num1.length !== 4 || num2.length !== 4) {
        throw new Error('Os numeros binarios devem ter 4 casas');
    }
    if (operator !== '0' && operator !== '1') {
        throw new Error('Operador invalido. Use 0 para soma e 1 para subtracao');
    }

    return result.toString(2).padStart(4, '0');
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro numero binario: ", (num1) => {
    rl.question("Digite o operador (0 para soma, 1 para subtracao): ", (operator) => {
        rl.question("Digite o segundo numero binario: ", (num2) => {
            try {
                const result = binaryOperation({ num1, operator, num2 });
                console.log(`Resultado: ${result}`);
            } catch (err) {
                console.error(err.message);
            } finally {
                rl.close();
            }
        });
    });
});

module.exports = binaryOperation;


