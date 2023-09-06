const audios = document.querySelectorAll('audio');

function Parar() {
    audios.forEach(cancion => {
        cancion.pause();
        cancion.currentTime = 0;
    });
}

audios.forEach(cancion => {
    const boton = cancion.parentElement; 
    boton.innerText = "*Risa incontenible*";
    boton.addEventListener('click', () => {
        Parar();
        cancion.play();
    });
});

