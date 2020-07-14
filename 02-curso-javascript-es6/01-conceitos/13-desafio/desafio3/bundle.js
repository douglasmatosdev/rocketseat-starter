"use strict";

// 3° EXERCICIO
// Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr.map(function (item) {
  return item + 10;
})); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

var mostraIdadeArrow = function mostraIdadeArrow(usuario) {
  return usuario.idade;
};

console.log(mostraIdadeArrow(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

var mostraUsuarioArrow = function mostraUsuarioArrow() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuarioArrow()); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promiseArrow = function promiseArrow() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
