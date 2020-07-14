import * as funcoes from './funcoes';
// import { sum, sub } from './funcoes'; // importando
import { sum as somaTeste, sub as subTeste } from './funcoes'; // imoportando e renomeando
// import soma from './soma'; // importando 
import somaFunciton from './soma'; // importando e renomeando


// console.log(soma(1, 2));
// console.log(sub(4, 2));

console.log(somaFunciton(5, 10))


console.log(somaTeste(5, 5));
console.log(subTeste(10, 5));


console.log(funcoes.sum(2, 2));
console.log(funcoes.sub(10, 5));
console.log(funcoes.mul(5, 5));
console.log(funcoes.mod(2, 2));
