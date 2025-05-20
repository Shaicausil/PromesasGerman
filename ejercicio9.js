
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function busquedaSimulada(id) {
  const retraso = 500 + Math.random() * 1000;
  return delay(retraso).then(() => `Resultado ${id} (tardó ${Math.round(retraso)} ms)`);
}


async function ejecutarBusquedas() {

  const promesas = [
    busquedaSimulada(1),
    busquedaSimulada(2),
    busquedaSimulada(3)
  ];

  console.log("Iniciando búsquedas en paralelo…");

  try {

    const resultados = await Promise.all(promesas);
    console.log("Todas las búsquedas completadas:");
    resultados.forEach(res => console.log(res));
  } catch (error) {
    console.error("Alguna búsqueda falló:", error);
  }
}


ejecutarBusquedas();
