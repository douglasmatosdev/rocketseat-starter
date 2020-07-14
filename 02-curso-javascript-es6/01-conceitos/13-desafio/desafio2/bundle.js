"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Rocketseat'
}]; // Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (idade) {
  return idade.idade;
});
console.log(idades); // Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var funcionarioMenor = usuarios.filter(function (funcionario) {
  return funcionario.empresa === 'Rocketseat' && funcionario.idade < 18;
});
console.log(funcionarioMenor); // Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var funcionarioGoogle = usuarios.find(function (funcionario) {
  return funcionario.empresa === 'Google';
});
console.log(funcionarioGoogle); // Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

var envelhecendoFuncionarios = usuarios.map(function (funcionario) {
  funcionario.idade *= 2;
  return funcionario;
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(envelhecendoFuncionarios);
