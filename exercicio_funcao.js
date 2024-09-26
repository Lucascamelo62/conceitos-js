//Exercicio 3 - Funções
//Criar uma função que soma 2 numeros e retorna o numero somado, deve ser enviado por parametro os dois numeros
//Retorno: Numero 1 Numero 2 e Soma

function calculadora(valor1, valor2) {
    const soma = valor1 + valor2
    return 'Valor 1: ' + valor1 + '\n' + 'Valor 2: ' + valor2 + '\n' + 'Soma: ' + soma
}

const valores = calculadora(50, 2)
console.log(valores)