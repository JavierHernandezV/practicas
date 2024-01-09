// Función para calcular el promedio de una lista de números
function calcularPromedio(lista) {
  const suma = lista.reduce((acumulador, valor) => acumulador + valor, 0);
  return suma / lista.length;
}

// Función para contar cuántos valores son mayores que el promedio en una lista
function contarMayoresAlPromedio(lista) {
  const promedio = calcularPromedio(lista);
  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > promedio) {
      contador++;
    }
  }

  return contador;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa cuántos datos quieres ingresar: ', (cantidad) => {
  let datos = [];
  let contador = 0;

  const ingresarDato = () => {
    rl.question(`Ingresa el dato ${contador + 1}: `, (dato) => {
      datos.push(parseFloat(dato));
      contador++;

      if (contador < cantidad) {
        ingresarDato();
      } else {
        const cantidadMayoresAlPromedio = contarMayoresAlPromedio(datos);
        console.log(`De tus datos ingresados, ${cantidadMayoresAlPromedio} son mayores que el promedio.`);
        rl.close();
      }
    });
  };

  ingresarDato();
});