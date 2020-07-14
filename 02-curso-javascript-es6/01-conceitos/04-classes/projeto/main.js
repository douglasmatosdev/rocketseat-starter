// definindo uma classe
class TodoList {
  // constructor é o primeiro método a ser executado em uma classe
  constructor() { 
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Usando uma classe padrão simples');
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList(); // isntânciando a classe

document.getElementById('classepadrao').onclick = function() {
  // chamando a instância da classe acessando o método addTodo()
  MinhaLista.addTodo(); 
}




/* ******************************************************************************
*
* podemos trabalhas com o conceito de herança
* para isso demos criar um a nova classe e na classe que já existe adicionar
* extends e o nome da classe nova
*
********************************************************************************* */
// Ex.:

// definindo a classe pai
class Pai {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data)
  }
}


// definindo clase filho que herdará as propriedades da classe pai
class Filho extends Pai {

}

// definindo uma variável que recebe a instância da classe filho
// que por sua vez herda as propriedades da classe pai
var Heranca = new Filho();

document.getElementById('classecomheranca').onclick = function() {
  // Usando método da classe pai recebido por herança
  Heranca.add('Herdei do meu Pai'); 
}




/**********************************************************************
 * 
 *  Podemos ter uma classe que herda propriedades de uma classe pai
 *  e podemos na classe filho definir novas propriedades
 * 
 ***********************************************************************/
// Ex.:

// definindo a classe pai
class Papai {
  constructor() {
    this.dados = [];
  }

  adicionar(dado) {
    this.dados.push(dado);
    console.log(dado);
  }
}
// definindo a classe filho que extends a classe pai
class Filinho extends Papai{
  constructor() {
    // temos que definir o super() pois ele indica que 
    // vamos usar o constructor da classe pai
    super();

    this.minhapropriedade = 'Estou usando minha propriedade';
  }

  minhaPropriedade() {
    console.log(this.minhapropriedade);
  }
}

var Herda = new Filinho();

document.getElementById('herdaecrianovaspropriedades').onclick = function () {
  // usando o método herdado da classe pai
  Herda.adicionar('Estou usando minha herança');
  // usando método da própria classe
  Herda.minhaPropriedade();
}







/**************************************************************************
 *  
 *  Podemos ter em nossas classes métodos estáticos os quais podemos acessar.
 *  sem precisarmos usar o operador new.
 * 
 *  Porém, dentro do método estático não é possível usar o o this, pois o método
 *  estático não enxerga o restante da classe.
 *  Esse tipo de método é utiliza para quando queremos passar informções para
 *  eles e eles retornam alguma coisa.
 *   
 **************************************************************************/

 // Ex.:

 class Matematica {
   static soma(a, b) {
     return a + b;
   }
 }

 var resultado = Matematica.soma(5, 10);

 document.getElementById('classecommetodoestatico').onclick = function() {
  console.log(resultado);
 }