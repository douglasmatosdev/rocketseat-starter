const arr = [1, 2, 3, 4, 5, 6];

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

const newArr = arr.map(item => item * 2);
console.log(newArr);


const teste = () => "Douglas";
const teste1 = () => [12, 45, 1, 2, 34, 99];
const teste2 = () => ["Douglas", "Verônica", "Joanna", "Brian", "Brenda"];
const teste3 = () => {
  return { nome: "Mr.Robot" }
};
const teste4 = () => ({ nome: "Mr.Robot" });


console.log(teste());
console.log(teste1());
console.log(teste2());
console.log(teste3());
console.log(teste4());
