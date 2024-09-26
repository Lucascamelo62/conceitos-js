//Função: Ela precisa ser chamada e pode ou não receber parametros, e pode ou não retornar dados;

function gerarNome() {
    const nome = 'Lucas'
    const sobrenome = ' Camelo'
    const idade = 30

    console.log('Nome completo: ', nome + sobrenome, '\n', 'Idade: ', idade)
}

gerarNome()

function gerarNomeParametros(nome, sobrenome, idade) {
    console.log(nome + sobrenome, idade)
}

gerarNomeParametros('Lucas', ' Silva', 20)

function gerarNomeParametroReturn(nome, sobrenome) {    
    return 'Nome: ' + nome + sobrenome
}

const nome = gerarNomeParametroReturn('Lucas', ' Camelo')
console.log(nome)