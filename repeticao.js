//Repetição por Array

const cidade = ['Fortaleza', 'São Paulo', 'Belo Horizonte']

cidade.forEach((elemento, index) => {
    console.log('Execução número: ' + index)
    console.log(elemento)
})

for (let index = 0; index < cidade.length; index ++) {
    console.log('Elemento ' + index + ': ' + cidade[index])
}