const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

// método antigo de trabalhar com async await sempre tendo que
// usar o .then() e .catch()
// minhaPromise().then(response => console.log(response));

// método com ES8
// Ao definir uma funcção usando async, altomaticamente retornará uma Promise
async function executaPromise() {
  // ao definir await em uma linha, a próxima linha só será executada após a primeira
  console.log("ES8 " + await minhaPromise());
  console.log("ES8 " + await minhaPromise());
  console.log("ES8 " + await minhaPromise());

  // da forma antiga, teriamos que fazer o seguinte
  minhaPromise().then(response => {
    console.log("ES6 " + response);

    minhaPromise().then(response => {
      console.log("ES6 " + response);

      minhaPromise().then(response => {
        console.log("ES6 " + response);
      });
    });
  });


}
executaPromise();



// podemos usar async e await em arrow function
const executaPromiseArrow = async () => {
  console.log("arrow " + await minhaPromise());
  console.log("arrow " + await minhaPromise());
  console.log("arrow " + await minhaPromise());
}


executaPromiseArrow();

