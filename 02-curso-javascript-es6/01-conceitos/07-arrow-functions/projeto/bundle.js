"use strict";

var arr = [1, 2, 3, 4, 5, 6];
/** 
* 
* este é o método de declaraçao de função anônima normal do javascript
*
* const newArr = arr.map(function(item) {
* return item * 2;
* })
*
* console.log(newArr);
*
*/
// Usando arrow function quando for declarar funções anônimas

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return "Douglas";
};

var teste1 = function teste1() {
  return [12, 45, 1, 2, 34, 99];
};

var teste2 = function teste2() {
  return ["Douglas", "Verônica", "Joanna", "Brian", "Brenda"];
};

var teste3 = function teste3() {
  return {
    nome: "Mr.Robot"
  };
};

var teste4 = function teste4() {
  return {
    nome: "Mr.Robot"
  };
};

console.log(teste());
console.log(teste1());
console.log(teste2());
console.log(teste3());
console.log(teste4());
