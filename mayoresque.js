// Crea una funci�n para contar n�meros mayores que x en una lista
function contarMayores(lista, x) {
  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > x) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa cu�ntos n�meros quieres leer: ', (cantidad) => {
  let numeros = [];
  let contador = 0;

  const leerNumero = () => {
    rl.question(`Ingresa el n�mero ${contador + 1}: `, (numero) => {
      numeros.push(parseInt(numero, 10));
      contador++;

      if (contador < cantidad) {
        leerNumero();
      } else {
        rl.question('Ingresa el valor x con el que comparar: ', (valorX) => {
          const resultado = contarMayores(numeros, parseInt(valorX, 10));
          console.log(`De tu lista, ${resultado} valores son mayores a ${valorX}`);
          rl.close();
        });
      }
    });
  };

  leerNumero();
});



