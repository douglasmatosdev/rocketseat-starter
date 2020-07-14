const usuario = {
  nome: 'Douglas',
  idade: 26,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  },
};

// pegando valores do objeto método antigo
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


function mostraDados({ nome, idade, endereco: { cidade } }) {
  console.log(nome, idade, cidade);
  
}

mostraDados(usuario);