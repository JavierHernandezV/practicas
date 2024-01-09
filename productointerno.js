// Función para calcular el producto interno de dos listas
function productoInterno(a, b) {
  if (a.length !== b.length) {
    throw new Error('Las listas deben tener la misma longitud para calcular el producto interno.');
  }

  let resultado = 0;

  for (let i = 0; i < a.length; i++) {
    resultado += a[i] * b[i];
  }

  return resultado;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa los elementos de la lista A separados por espacios: ', (inputA) => {
  const listaA = inputA.split(' ').map(Number);

  rl.question('Ingresa los elementos de la lista B separados por espacios: ', (inputB) => {
    const listaB = inputB.split(' ').map(Number);

    try {
      const resultado = productoInterno(listaA, listaB);
      console.log(`El producto interno de las listas A y B es: ${resultado}`);
    } catch (error) {
      console.error(error.message);
    }

    rl.close();
  });
});
