// definindo uma função que recebe parâmetros e retorna a soma
function soma(a, b) {
  return a + b;
}
console.log(soma(1)); // NaN
console.log(soma());  // NaN


// definindo um função que recebe parâmetros, os quais ja
// possuem valores padrôes caso não sejam passados na chamada
// da função
function somaPadrao(a = 3, b = 6) {
  return a + b;
}
console.log(somaPadrao(1)); // 7
console.log(somaPadrao());  // 9


// usano arrow function
const somaPadraoArrow = (a = 3, b = 6) => a + 6;
console.log(somaPadraoArrow(1)); // 7
console.log(somaPadraoArrow());  // 9

