const btnLocalizar = document.getElementById('btnLocalizar');

btnLocalizar.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('LAT: ', position.coords.latitude);
            console.log('LNG: ', position.coords.longitude);

            const img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&markers=${position.coords.latitude},${position.coords.longitude}&zoom=18&size=800x600&sensor=false&key=AIzaSyB9CobDD06h6vgzmUpmoKIpCgSXc43B7B0`;
            const img = document.createElement('img');
            img.src = img_url;

            document.body.appendChild(img);
        });
    } else {
        alert('Tu navegador es cochambre!');
    }
});