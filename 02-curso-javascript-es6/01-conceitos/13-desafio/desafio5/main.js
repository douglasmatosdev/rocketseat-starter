// 5º Exercício
// Utilizando o operador de rest/spread (...) realize as seguintes operações:

// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.

// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);




// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));





// 5.2 Spread
// A partir do objeto e utilizando o operador spread:
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
const usuario2 = { ...usuario, nome: 'Gabriel' }
console.log(usuario2);


// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras', uf: 'SC', pais: 'Brasil' }};
console.log(usuario3);




// 6º Exercício
// Converta o seguinte trecho de código utilizando Template Literals:
const usuarioTeste = 'Diego';
const idadeTeste = 23;
// console.log('O usuário ' + usuarioTeste + ' possui ' + idadeTeste + ' anos');
console.log(`O usuário ${usuarioTeste} possui ${idadeTeste} anos.`);




// 7º exercício
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nomeObj = 'Diego';
const idadeObj = 23;

const usuarioObj = {
 nome: nomeObj,
 idade: idadeObj,
 cidade: 'Rio do Sul',
};

const usuarioNewObj = {
  nomeObj,
  idadeObj,
  cidade: 'Rio do Sul'
}

console.log(usuarioNewObj);
