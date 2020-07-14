// yarn add @babel/plugin-proposal-object-rest-spread

// REST OPERATOR COM OBJETOS

const usuario = {
  nome: 'Verônica',
  idade: 36,
  sexo: "Feminino"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


// REST OPERATOR COM ARRAYS

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// REST OPERATOR EM PARÂMETRO DE FUNÇÃO
// SEM REST
function soma(a, b, c, d) {
  return a + b + c + d;
}
console.log(soma(1, 2, 3, 4));

// COM REST
function somaRest(...params) {
  // return params;
  return params.reduce((total, next) => total + next );
}
console.log(somaRest(1, 2, 3, 4));

function maisRest(a, b, ...params) {
  return params;
}
console.log(maisRest(1, 3, 4, 4, 5, 6, 7 ));



// SPREAD OPERATOR - unindo 2 arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);


// SPREAD OPERATOR - copiando todas as propriedades de um objeto alterando só uma

const usuario1 = {
  nome: 'Veronica',
  idade: 36,
  sexo: "Feminino"
};

const usuario2 = { ...usuario1, nome: 'Joanna', idade: 3 };

console.log(usuario2);
