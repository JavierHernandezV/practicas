// Función para verificar si una matriz contiene números consecutivos desde 1 hasta n^2
function verificaConsecutivos(matriz) {
  const n = matriz.length;
  const numeros = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      numeros.add(matriz[i][j]);
    }
  }

  for (let i = 1; i <= n * n; i++) {
    if (!numeros.has(i)) {
      return false;
    }
  }

  return true;
}

// Función para verificar si una matriz es un cuadrado mágico
function esCuadradoMagico(matriz) {
  const n = matriz.length;
  const sumaObjetivo = (n * (n * n + 1)) / 2;

  // Verificar filas y columnas
  for (let i = 0; i < n; i++) {
    let sumaFila = 0;
    let sumaColumna = 0;
    for (let j = 0; j < n; j++) {
      sumaFila += matriz[i][j];
      sumaColumna += matriz[j][i];
    }
    if (sumaFila !== sumaObjetivo || sumaColumna !== sumaObjetivo) {
      return false;
    }
  }

  // Verificar diagonales
  let sumaDiagonalPrincipal = 0;
  let sumaDiagonalSecundaria = 0;
  for (let i = 0; i < n; i++) {
    sumaDiagonalPrincipal += matriz[i][i];
    sumaDiagonalSecundaria += matriz[i][n - 1 - i];
  }

  return sumaDiagonalPrincipal === sumaObjetivo && sumaDiagonalSecundaria === sumaObjetivo;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el tamaño de la matriz (nxn): ', (n) => {
  const matriz = [];
  console.log(`Ingrese los ${n}x${n} elementos de la matriz separados por espacios:`);

  const leerFila = (fila) => {
    rl.question(`Fila ${fila + 1}: `, (inputFila) => {
      const elementos = inputFila.split(' ').map(Number);
      if (elementos.length !== n) {
        console.log(`La fila debe contener ${n} elementos.`);
        leerFila(fila);
      } else {
        matriz.push(elementos);
        if (fila < n - 1) {
          leerFila(fila + 1);
        } else {
          if (verificaConsecutivos(matriz)) {
            if (esCuadradoMagico(matriz)) {
              console.log('La matriz es un cuadrado mágico.');
            } else {
              console.log('La matriz no es un cuadrado mágico.');
            }
          } else {
            console.log('La matriz no está conformada por números consecutivos desde 1 hasta n^2.');
          }
          rl.close();
        }
      }
    });
  };

  leerFila(0);
});