const ServiceApi = require('../service/api')
class ServiceApi {

    GetOperacoes = () => {
        return ['adicao', 'subtracao', 'multiplicacao', 'divisao', 'potencia', 'sqrt'];
    };

    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Entrada inválida');
        }
        return num1 + num2;
    }

    Subtracao(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Entrada inválida');
        }
        return a - b;
    };

    Multiplicacao(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Entrada inválida');
        }
        return a * b;
    };

    Divisao(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Entrada inválida');
        }
        if (b === 0) {
            throw new Error('Divisão por zero');
        }
        return a / b;
    };

    Potencia(base, exponent) {
        if (isNaN(base) || isNaN(exponent)) {
            throw new Error('Entrada inválida');
        }
        return Math.pow(base, exponent);
    };

    Sqrt (number) {
        if (isNaN(number)) {
            throw new Error('Entrada inválida');
        }
        if (number < 0) {
            throw new Error('Não é possível calcular a raiz quadrada de um número negativo');
        }
        return Math.sqrt(number);
    };
}
