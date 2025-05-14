const segundos = (milisegundos) =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`Esperamos ${milisegundos}` );
        }, milisegundos);
        });
    };

    segundos(2000).then((mensaje) =>{
        console.log(mensaje);

    }).catch((error) => {
        console.error(error);
    });
