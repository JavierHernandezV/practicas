const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const equipos = [];

function solicitarEquipos() {
  return new Promise((resolve, reject) => {
    let contador = 1;

    const ingresarEquipo = () => {
      rl.question(`Equipo${contador}: `, (equipo) => {
        equipos.push(equipo);
        contador++;

        if (contador <= 8) {
          ingresarEquipo();
        } else {
          resolve();
        }
      });
    };

    ingresarEquipo();
  });
}

function jugarPartido(equipo1, equipo2) {
  return new Promise((resolve, reject) => {
    rl.question(`a. ${equipo1} - b. ${equipo2}: `, (ganador) => {
      resolve(ganador === 'a' ? equipo1 : equipo2);
    });
  });
}

function jugarRonda(equiposRonda) {
  return new Promise(async (resolve, reject) => {
    const ganadores = [];
    for (let i = 0; i < equiposRonda.length; i += 2) {
      const equipo1 = equiposRonda[i];
      const equipo2 = equiposRonda[i + 1];
      const ganador = await jugarPartido(equipo1, equipo2);
      ganadores.push(ganador);
    }
    resolve(ganadores);
  });
}

async function simularCampeonato() {
  console.log('Ingrese los nombres de los 8 equipos:');
  await solicitarEquipos();

  console.log('Cuartos de final:');
  let equiposRonda = equipos;
  for (let i = 0; i < 3; i++) {
    console.log(`Ronda ${i + 1}:`);
    equiposRonda = await jugarRonda(equiposRonda);
  }

  console.log('Semifinales:');
  console.log('Ronda 4:');
  equiposRonda = await jugarRonda(equiposRonda);

  console.log('Final:');
  console.log('Ronda 5:');
  equiposRonda = await jugarRonda(equiposRonda);

  console.log(`El campeón es: ${equiposRonda[0]}`);
  rl.close();
}

simularCampeonato();