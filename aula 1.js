'-----------------------------------------------------------------'
function soma(a, b) {
    return a + b;
}
const somar = (a, b) => a+b;
const dobrar = (a) => a * 2;
const quadrado = a => a*a;
'-----------------------------------------------------------------'
function conectar(host = 'localhost', porta = 3000){
    return `${host}:${porta}`;
}
console.log(conectar());
console.log(conectar('127.0.0.1'))
console.log(conectar('127.0.0.1', 8080))
'-----------------------------------------------------------------'
function mostrarTudo(...args){
    console.log('recebi: ', args);}
mostrarTudo("é o helio", "eliabe", "cachumba");
'-----------------------------------------------------------------'
function somartudo(...numeros){
    console.log(numeros)
    return numeros.reduce((total, n)=> total+n, 0)
}
console.log(somartudo(52,152,51));
'-----------------------------------------------------------------'
function listar(primeiro, ...outros){
    console.log('primeiro: ', primeiro)
    console.log('outros: ', outros)
}
listar('helio', 'eliabe', 'catatonico');

const original = [10,20,30];
const copia = original;
original.push(50);
console.log(original)
console.log(copia)
typeof null

'ola mundo'.indexOf('mundo')
'ha'.repeat(10)
'5'.padStart(3, '0')
'5'.padEnd(3, '-')
'ola mundo'.slice(4, 9)
'ola mundo'.replace('mundo', 'imundo')
g