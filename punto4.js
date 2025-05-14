const prom = [
    new Promise((res) => setTimeout(() => res("Primero"), 1000)),
    new Promise((res) => setTimeout(() => res("Segundo"), 1000)),
    new Promise((res) => setTimeout(() => res("Tercero"), 1000))
]
    Promise.all(prom).then((resultados)=>{
        console.log("SE ejecutaron todas las promesas", resultados);
    })



    
