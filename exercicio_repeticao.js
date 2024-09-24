//Exercicio 1: Estrutura de repetição - Percorrer uma lista de nomes, contendo os nomes Eduardo, Maria, Fernando, João e Francisco. 
//Deve ser colocado: Numero da execução + nome de quem está sendo executado + separadores;

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']
//Utilizando forEach
nomes.forEach((nomes, index) => {
    index ++
    console.log('Execução ', index, '\n' , 'Nome: ', nomes, '\n', '----------------', '\n')
})

//Utilizando for

for (index = 0; index < nomes.length; index ++) {
    console.log('Execução ', index + 1, '\n', 'Nome: ', nomes[index], '\n', '----------------', '\n')
}

