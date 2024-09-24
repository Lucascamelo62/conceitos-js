//Exercício 2: Decisão
//Percorrer uma lista de cidades, contendo as cidadas: São Paulo, Rio de Janeiro, Florianopolis e Recife. Para cada item, verificar se a cidade Florianopolis está presente na lista. Caso esteja, avisar
//Número da execução

//Declarando uma constante do tipo ARRAY
const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

//Implementando com o forEach
cidades.forEach((cidades, index) => {
    index++
    if (cidades == 'Florianópolis') {
        console.log('Execução', index + '\n', 'A cidade é Florianópolis!', '\n', '---------------')
    } else {
        console.log('Execução', index + '\n', 'A cidade não é Florianópolis', '\n', '---------------')
    }
})

//Implementando com for

for(index = 0; index < cidades.length; index ++) {
    if (cidades[index] == 'Florianópolis') {
        console.log('Execução', index + 1, '\n', 'A cidade é Florianópolis!', '\n', '--------------')
    } else {
        console.log('Execução', index + 1, '\n', 'A cidade não é Florianópolis!', '\n', '--------------')
    }
}