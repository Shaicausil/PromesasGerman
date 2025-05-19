
function esperarTresSegundos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}


async function proceso() {
  console.log("Esperando 3 segundos…");
  await esperarTresSegundos();
  console.log("Proceso terminado");
}


proceso();
