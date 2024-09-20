const paises = ['Brasil', 'Alemanha', 'Argentina'] //Lista de dados
console.log(paises[0]) //Acessando um indice especifico do array
console.log('Tamanho do array: ' + paises.length) //Exibindo o tamanho do array

//Operações com arrays
paises.push('EUA') //Incluindo mais um elemento no final do array
paises.pop() //Retirando o ultimo elemento do final do array
paises.unshift('França') //Incluindo mais um elemento no inicio do array
paises.shift() //Retirando um elemento do inicio do array
console.log(paises)