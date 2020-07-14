"use strict";

var usuario = {
  nome: 'Douglas',
  idade: 26,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
}; // pegando valores do objeto método antigo
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraDados(usuario);
