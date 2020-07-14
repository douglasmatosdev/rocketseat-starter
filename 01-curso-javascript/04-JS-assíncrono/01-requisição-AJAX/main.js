// AJAX
// Desta forma a requisição será feita de forma assíncrona e não 
// vamos conseguir vrificar se a requisição foi bem sucedida.
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/douglasmatosdev');
xhr.send(null);

// Agora conseguimos trabalhar melhor a requisição
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { 
    console.log(JSON.parse(xhr.responseText));
  }
}