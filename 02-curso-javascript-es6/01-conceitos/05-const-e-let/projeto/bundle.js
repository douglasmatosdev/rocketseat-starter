"use strict";

// variáveis const e let
// CONST

/**
 * 
 * uma constante é read-only, ou seja, somente leitura
 * não podemos atribuir outros valores 
 * 
 *  const a = 5;
 *  a = 3;
 *  console.log(a);
 * 
 */
// Podemos fazer mutação
// Ex.:
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario); // LET 

function teste(x) {
  // a variavel definida com let é acessível somente dentro do escopo on de ela foi definida,
  // neste caso dentro da função
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(7);
