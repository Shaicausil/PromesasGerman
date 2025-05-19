
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function procesarNombres(nombres) {
  for (const nombre of nombres) {
    await delay(1000);
    console.log(`Procesado: ${nombre}`);
  }
}

const listaDeNombres = ['Ana', 'Luis', 'María', 'Carlos'];

procesarNombres(listaDeNombres)
  .then(() => {
    console.log('Todos los nombres han sido procesados.');
  })
  .catch(err => {
    console.error('Error al procesar nombres:', err);
  });
