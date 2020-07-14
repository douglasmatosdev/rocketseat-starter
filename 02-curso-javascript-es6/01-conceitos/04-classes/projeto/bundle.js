"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// definindo uma classe
var TodoList = /*#__PURE__*/function () {
  // constructor é o primeiro método a ser executado em uma classe
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Usando uma classe padrão simples');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList(); // isntânciando a classe

document.getElementById('classepadrao').onclick = function () {
  // chamando a instância da classe acessando o método addTodo()
  MinhaLista.addTodo();
};
/* ******************************************************************************
*
* podemos trabalhas com o conceito de herança
* para isso demos criar um a nova classe e na classe que já existe adicionar
* extends e o nome da classe nova
*
********************************************************************************* */
// Ex.:
// definindo a classe pai


var Pai = /*#__PURE__*/function () {
  function Pai() {
    _classCallCheck(this, Pai);

    this.data = [];
  }

  _createClass(Pai, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return Pai;
}(); // definindo clase filho que herdará as propriedades da classe pai


var Filho = /*#__PURE__*/function (_Pai) {
  _inherits(Filho, _Pai);

  function Filho() {
    _classCallCheck(this, Filho);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filho).apply(this, arguments));
  }

  return Filho;
}(Pai); // definindo uma variável que recebe a instância da classe filho
// que por sua vez herda as propriedades da classe pai


var Heranca = new Filho();

document.getElementById('classecomheranca').onclick = function () {
  // Usando método da classe pai recebido por herança
  Heranca.add('Herdei do meu Pai');
};
/**********************************************************************
 * 
 *  Podemos ter uma classe que herda propriedades de uma classe pai
 *  e podemos na classe filho definir novas propriedades
 * 
 ***********************************************************************/
// Ex.:
// definindo a classe pai


var Papai = /*#__PURE__*/function () {
  function Papai() {
    _classCallCheck(this, Papai);

    this.dados = [];
  }

  _createClass(Papai, [{
    key: "adicionar",
    value: function adicionar(dado) {
      this.dados.push(dado);
      console.log(dado);
    }
  }]);

  return Papai;
}(); // definindo a classe filho que extends a classe pai


var Filinho = /*#__PURE__*/function (_Papai) {
  _inherits(Filinho, _Papai);

  function Filinho() {
    var _this;

    _classCallCheck(this, Filinho);

    // temos que definir o super() pois ele indica que 
    // vamos usar o constructor da classe pai
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filinho).call(this));
    _this.minhapropriedade = 'Estou usando minha propriedade';
    return _this;
  }

  _createClass(Filinho, [{
    key: "minhaPropriedade",
    value: function minhaPropriedade() {
      console.log(this.minhapropriedade);
    }
  }]);

  return Filinho;
}(Papai);

var Herda = new Filinho();

document.getElementById('herdaecrianovaspropriedades').onclick = function () {
  // usando o método herdado da classe pai
  Herda.adicionar('Estou usando minha herança'); // usando método da própria classe

  Herda.minhaPropriedade();
};
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


var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var resultado = Matematica.soma(5, 10);

document.getElementById('classecommetodoestatico').onclick = function () {
  console.log(resultado);
};
