//declaracion de la promesa
function aleatorio() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNum = Math.random();

            if (randomNum > 0.5) {
                //resolve(randomNum);
                resolve('la promesa se resuelve');
            } else {
                reject('El numero es menor de 0.5')
            }
        }, 1000);

    })
    return prom
}

//async await

async function main() {
    try {
        const msg = await aleatorio();
        const msg2 = await aleatorio();
        const msg3 = await aleatorio();
        console.log(msg);
        console.log(msg2);
        console.log(msg3);
    }
    catch (err) {
        console.log(err);
    }

}

main();




