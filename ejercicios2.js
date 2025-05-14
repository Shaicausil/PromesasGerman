const decimal= new
    Promise((resolve,reject)=>{
        const numero= 0.4;
        if(numero >0.5){
            resolve("Promesa Resuelta");
        } else{
            reject("promesa rechazada")
        }
    });

    decimal .then((mensaje) =>{
        console.log(mensaje);
    })

    .catch((error)=>{
        console.error(error);
    });