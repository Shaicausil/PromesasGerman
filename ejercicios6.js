
function saludarEnPromesa() {
  return new Promise((resolve, reject) => {
    
    resolve("Hola, Mundo");

  });
}

saludarEnPromesa()
  .then(mensaje => {
    console.log("Con .then():", mensaje);
  })
  .catch(error => {
    console.error("Error:", error);
  });


(async () => {
  try {
    const mensaje = await saludarEnPromesa();
    console.log("Con await:", mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
})();
