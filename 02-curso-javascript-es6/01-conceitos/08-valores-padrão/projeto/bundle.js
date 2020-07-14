"use strict";

// definindo uma função que recebe parâmetros e retorna a soma
function soma(a, b) {
  return a + b;
}

console.log(soma(1)); // NaN

console.log(soma()); // NaN
// definindo um função que recebe parâmetros, os quais ja
// possuem valores padrôes caso não sejam passados na chamada
// da função

function somaPadrao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(somaPadrao(1)); // 7

console.log(somaPadrao()); // 9
// usano arrow function

var somaPadraoArrow = function somaPadraoArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + 6;
};

console.log(somaPadraoArrow(1)); // 7

console.log(somaPadraoArrow()); // 9
