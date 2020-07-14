const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Rocketseat' },
];

// Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(idade => idade.idade);
console.log(idades);


// Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
const funcionarioMenor = usuarios.filter(funcionario => {
  return funcionario.empresa === 'Rocketseat' && funcionario.idade < 18;
});
console.log(funcionarioMenor);


// Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const funcionarioGoogle = usuarios.find(funcionario => {
  return funcionario.empresa === 'Google';
})
console.log(funcionarioGoogle);


// Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
const envelhecendoFuncionarios = usuarios.map(funcionario => {
   funcionario.idade *= 2
   return funcionario;
}).filter(item=> item.idade <=50);
console.log(envelhecendoFuncionarios);

