//declaracion de la promesa
function aleatorio() {
    let prom = new Promise((resolve, reject) => {
        let randomNum = Math.random();

        if (randomNum > 0.5) {
            //resolve(randomNum);
            resolve('la promesa se resuelve');
        } else {
            reject('El numero es menor de 0.5')
        }

    })
    return prom
}

aleatorio()
    .then((pMsg) => {
        console.log(pMsg);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Suscribete')
    })








