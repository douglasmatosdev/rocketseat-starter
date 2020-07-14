import axios from 'axios';
/*
Exercícios: Módulo 03

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

Exercício
Transforme os seguintes trechos de código utilizando async/await:
*/

// Função dealy aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve('s'), 1000));

async function umPorSegundo() {
  console.log('1'+await delay());
  console.log('2'+await delay());
  console.log('3'+await delay());
  
}
umPorSegundo();


const getUserFromGithub = async user => {
  try {
    const response = await axios.get(`http://api.github.com/users/${user}`);
    console.log(response.data);
  } catch {
    console.warn("Usuário não existe");
  }
}
getUserFromGithub('douglasmatosdev');
getUserFromGithub('douglasmatosdevCOMERROR');



class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);
            
    } catch {
      console.warn("Repositário não existe");
    }

  }
}

Github.getRepositories('douglasmatosdev/pokemon');
Github.getRepositories('douglasmatosdev/pokemonError');

const buscaUsuarios = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.warn("Usuário não existe");
  }
}
buscaUsuarios('diego3g');