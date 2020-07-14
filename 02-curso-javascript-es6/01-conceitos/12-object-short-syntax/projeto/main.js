const nome = "Veronica";
const idade = 36;

const usuario = {
  nome: nome,
  idade: idade,
  sexo: "Feminino"
};

console.log(usuario);

// Quando o valor for igual a chave, podemos omitir os valores

const usuario2 = {
  nome, 
  idade, 
  sexo: "Feminino"
};

console.log(usuario2);

