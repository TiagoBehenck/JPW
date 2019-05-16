
var numeros = [25,16,4,9];

function raizes(numeros) {
  return numeros.map(function(numero) {
    console.log(Math.sqrt(numero));
  });
}

raizes(numeros);