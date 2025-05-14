const promesaUno = new 
Promise((resolve)=>{
    setTimeout(()=>resolve("Promesa uno en ejecucion"),1000);
});
const promesaDos = new 
Promise((resolve)=>{
    setTimeout(()=>resolve("Promesa uno en ejecucion"),2000);
});
const promesaTres = new 
Promise((resolve)=>{
    setTimeout(()=>resolve("Promesa uno en ejecucion"),3000);
});
Promise.race(
    [promesaUno,promesaDos,promesaTres]
)
.then( (resultado)=>{
    console.log(resultado)
})
.catch((error) => {
    console.error(error);
   });
   