const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;
        if (descuento) {
            resolve('Descuento existe y ha sido aplicado');
        } else {
            reject('el producto no tiene descuento');
        }
    }, 5000);
})

aplicarDescuento
    .then(resultado => {
        console.log(resultado);
    })
    .catch(err => {
        console.log(err)
    })

console.log('carga seccion productos');