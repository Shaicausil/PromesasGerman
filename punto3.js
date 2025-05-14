function paso1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Paso 1 completado");
        resolve();
      }, 1000);
    });
  }
  function paso2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Paso 2 completado");
        resolve();
      }, 1000);
    });
  }
  function paso3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Paso 3 completado");
        resolve();
      }, 1000);
    });
  }
  paso1()
  .then(paso2)
  .then(paso3)
  .then(()=>{
    console.log("Todos los pasos han sido completados")
  })