//declaracion de la promesa
let prom = new Promise((resolve, reject) => {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve('La promesa se resuelve');
    } else {
        reject('El numero es menor de 0.5')
    }

})

//consumicion de la promesa
prom
    .then((pMsg) => {
        console.log(pMsg)
    })
    .catch((err) => {
        console.log(err);
    })


