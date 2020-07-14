var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar JavaScript',
  'Acessar comunidade da RocketSeat'
]; 


function renderTodos() {
  listElement.innerHTML = ''; // limpa input após adicionar um todo

  // percorrendo o array
  for (todo of todos) {
    // cria um elemento li com o texto inserido no input
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    // cria um elemento a com o texto excluir e com atributos href e onclick. 
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var pos = todos.indexOf(todo); // capturando a posição de cada indice
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); 
    // removendo elemendo de acordo com o seu respectivo indice no array
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

buttonElement.onclick = addTodo;


function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}