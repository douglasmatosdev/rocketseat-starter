"use strict";

// 4º exercício
// 4.1 Desestruturação simples
// A partir do seguinte objeto:
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
/*

Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

*/

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // 4.2 Desestruturação em parâmetros
// Na seguinte função: 

/*

function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas:

return `${nome} tem ${idade} anos.`;

*/

var newMostraInfo = function newMostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(newMostraInfo({
  nome: 'Diego',
  idade: 23
}));
