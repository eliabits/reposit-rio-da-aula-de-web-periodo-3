const pessoa = {
    nome: 'Marjory',
    idade: '30',
    endereco:{
        cidade: 'palmares',
        estado: 'pernambuco'
    },
    saudar(){
        return 'olá, seu nome é ${this.name}'
    }

}
console.log(Object.keys(pessoa)) //retorna um array com as chaves do objeto
console.log(Object.values(pessoa)) //retorna um array com os valores do objeto
console.log(Object.entries(pessoa)) //retorna um array de arrays, onde cada sub-array é um par chave-valor do objeto

for (const [chave, valor] of Object.entries(pessoa)){
    if(typeof valor !== 'function'){ //ignora a função saudar
        console.log(`${chave}: ${valor}`)
}
}

//acessar os dados dentro da const
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.endereco.cidade)

//desestruturando pessoa
const {nome, idade, endereco:{cidade, estado}} = pessoa
console.log(idade)
console.log(estado)

const {nome: apelido = 'Desconhecido'} = pessoa //fallback para 'Desconecido' caso nome não exista
console.log(apelido)

const nome2 = 'ana';
const idade2 = 25;
const usuario = {nome2, idade2 } //shorthand property names, equivalente a nome: nome, idade: idade
console.log(usuario)

const x = 10, y = 20;
const ponto = {x, y} //shorthand property names para x: x, y: y
console.log(ponto)

const chave = 'status';
const config = {
    [chave]: 'ativo' //computed property name, a chave do objeto será o valor da variável chave
}
console.log(config)

const clonePessoa = {...pessoa, idade:42} //spread operator para criar uma cópia do objeto pessoa
console.log(pessoa)
console.log(clonePessoa)

//copiando o objeto pessoa, mas modificando o endereço para evitar que ambos compartilhem o mesmo objeto endereco
clonePessoa.endereco.cidade = 'Recife' //modificando a cidade do clonePessoa, mas isso também modifica a cidade de pessoa, pois o endereço é um objeto e é referenciado
console.log(pessoa.endereco.cidade) //mostra 'Recife' porque ambos pessoa e clonePessoa compartilham o mesmo objeto endereco
console.log(clonePessoa.endereco.cidade) //mostra 'Recife' também

//deepclone para criar uma cópia completa do objeto pessoa, incluindo objetos aninhados
const clonepessoa2 = {...pessoa, endereco: {...pessoa.endereco}} //criando uma cópia do objeto endereco para evitar compartilhamento
clonepessoa2.endereco.cidade = 'Olinda' //modificando a cidade do clonepessoa2, isso não afeta o objeto pessoa
console.log(pessoa.endereco.cidade) //mostra 'Recife' porque o objeto endereco de pessoa não foi modificado
console.log(clonepessoa2.endereco.cidade) //mostra 'Olinda' porque o objeto endereco de clonepessoa2 foi modificado, mas não afeta pessoa
//outra forma de fazer deep clone é usando JSON.parse(JSON.stringify(pessoa)), mas isso tem limitações, como não copiar funções ou propriedades com valores undefined
//const clonezãopessoa = structuredClone(pessoa) //usando structuredClone para criar uma cópia profunda do objeto pessoa
//clonezãopessoa.endereco.cidade = 'Caruaru' //modificando a cidade do clonezãopessoa, isso não afeta o objeto pessoa
//console.log(pessoa.endereco.cidade) //mostra 'Recife' porque o objeto endereco de pessoa não foi modificado
//console.log(clonezãopessoa.endereco.cidade) //mostra 'Caruaru' porque o objeto endereco de clonezãopessoa foi modificado, mas não afeta pessoa

//o que é map? Map é uma estrutura de dados que armazena pares chave-valor, onde as chaves podem ser de qualquer tipo, incluindo objetos. Diferente dos objetos comuns, os mapas mantêm a ordem de inserção dos elementos e possuem métodos específicos para manipulação, como set(), get(), has() e delete().
const mapa = new Map()
mapa.set('nome', 'eliabe')
mapa.set('signo', 'peixes')
mapa.set({id: 1})
console.log(mapa.get('nome')) //retorna 'eliabe'
console.log(mapa.get('signo')) //retorna 'peixes'
console.log(mapa.has('nome')) //retorna true
console.log(mapa.size) //retorna 3, o número de elementos no mapa
//mapa.delete('signo') //remove o elemento com a chave 'signo'
console.log(mapa.has('signo')) //retorna false, pois o elemento foi removido
//mapa.clear() //remove todos os elementos do mapa
console.log(mapa.size) //retorna 0, pois o mapa está vazio 

for (const [chave, valor] of mapa){
    console.log(`${chave}: ${valor}`)
}
 
//set não aceita valores repetidos
const conjunto = new Set([1,2,4,5,2,3,6,5,7,8,9,4,5,1,2,3,6,1,0,2,1,2,1,2,1222,22,22,22,2])
console.log(conjunto) //mostra {1, 2, 4, 5, 3, 6, 7, 8, 9, 0, 1222, 22} sem os valores repetidos
conjunto.add(10) //adiciona o valor 10 ao conjunto
console.log(conjunto.has(10)) //retorna true, pois o valor 10 foi adicionado

const arraycomduplicadas = [1,2,3,4,5,2,3,6,7,8,9,1,2,3]
const conjunto2 = new Set(arraycomduplicadas) //criando um conjunto a partir de um array, isso remove os valores duplicados
console.log(conjunto2) //mostra {1, 2, 3, 4, 5, 6, 7, 8, 9} sem os valores repetidos