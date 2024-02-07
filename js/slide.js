let index = 1;
showSlide(index);

function fade(n) {
    showSlide( index += n );
}

function slide(n) {
    showSlide( index = n );
}

setInterval(function time(){
    showSlide( index += 1 )
}, 10000);

function showSlide(n){
    let i;
    let slide = document.getElementsByClassName('slide');
    let control = document.getElementsByClassName('btn btn-number');

    if(n > slide.length){
        index = 1;
    }

    if(n < 1){
        index = slide.length();
    }

    for(i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }

    for(i = 0; i < control.length; i++){
        control[i].className = control[i].className.replace("active", "");
    }

    slide[index-1].style.display = 'block';
    control[index-1].className += ' active';
}

//Galeria de imágenes
window.onload = function () {
    // Variables
    const IMAGENES = [
        "/assets/galery/La_Pampa/wood-frame-casa-la-pampa.webp",
        "/assets/galery/La_Pampa/cocina-llave-en-mano-la-pampa.webp",
        "/assets/galery/La_Pampa/wood-frame-argentina.webp",
        "/assets/galery/La_Pampa/constructora-en-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-en-seco-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-llave-en-mano.webp",
        "/assets/galery/La_Pampa/construccion-en-seco-argentina.webp",
        "/assets/galery/La_Pampa/construccion-en-seco-en-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-de-casas-la-pampa.webp",
        "/assets/galery/La_Pampa/wood-frame-la-pampa.webp",
        "/assets/galery/La_Pampa/prefabricadas-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-llave-en-mano-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-de-viviendas-en-la-pampa.webp",
        "/assets/galery/La_Pampa/vivienda-llave-en-mano.webp",
        "/assets/galery/La_Pampa/habitacion-casa-llave-en-mano.webp",
        "/assets/galery/La_Pampa/casa-construccion-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-de-casa-rural-la-pampa.webp",
        "/assets/galery/La_Pampa/casas-prefabricadas-de-calidad.webp",
        "/assets/galery/La_Pampa/baño-construccion-casas-en-la-pampa.webp",
        "/assets/galery/La_Pampa/casas-de-madera.webp",
        "/assets/galery/La_Pampa/casas-llave-en-mano.webp",
        "/assets/galery/La_Pampa/antebaño-casa-la-pampa.webp",
        "/assets/galery/La_Pampa/cocina-llave-en-mano.webp",
        "/assets/galery/La_Pampa/construccion-de-calidad-la-pampa.webp",
        "/assets/galery/La_Pampa/ampliaciones-en-seco-la-pampa.webp",
        "/assets/galery/La_Pampa/construccion-en-seco-baño.webp",
        "/assets/galery/La_Pampa/baño-reforma-en-seco.webp"
    ];
    const IMAGENESB = [
        "/assets/galery/La_Plata/construccion-de-casa-en-city-bell.webp",
        "/assets/galery/La_Plata/casa-de-arquitecto-en-city-bell.webp",
        "/assets/galery/La_Plata/construccion-en-city-bell.webp",
        "/assets/galery/La_Plata/construccion-en-city-bell-antebaño.webp",
        "/assets/galery/La_Plata/construccion-melchor-romero.webp",
        "/assets/galery/La_Plata/construccion-de-vivienda-melchor-romero.webp",
        "/assets/galery/La_Plata/construccion-en-seco-melchor-romero.webp",
        "/assets/galery/La_Plata/ampliaciones-melchor-romero.webp",
        "/assets/galery/La_Plata/baño-en-wood-frame-la-plata.webp",
        "/assets/galery/La_Plata/vivienda-construccion-en-sicardi.webp",
        "/assets/galery/La_Plata/vivienda-en-sicardi.webp",
        "/assets/galery/La_Plata/wood-frame-habitacion.webp",
        "/assets/galery/La_Plata/wood-frame-en-sicardi.webp",
        "/assets/galery/La_Plata/construccion-en-seco-en-sicardi.webp",
        "/assets/galery/La_Plata/baño-vivienda-construccion-en-sicardi.webp",
        "/assets/galery/La_Plata/construccion-en-sicardi.webp",
        "/assets/galery/La_Plata/quincho-la-plata.webp",
        "/assets/galery/La_Plata/quinchos-modernos-con-estilo.webp",
        "/assets/galery/La_Plata/quincho-moderno-la-plata.webp",
        "/assets/galery/La_Plata/quincho-en-seco-la-plata.webp",
        "/assets/galery/La_Plata/construccion-en-seco-quincho.webp",
        "/assets/galery/La_Plata/construccion-de-quincho-moderno.webp",
        "/assets/galery/La_Plata/construccion-de-quincho-la-plata.webp"
    ];
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#prev');
    let $botonAvanzar = document.querySelector('#next');
    let $botonRetrocederB = document.querySelector('#prevB');
    let $botonAvanzarB = document.querySelector('#nextB');
    let $imagen = document.querySelector('#imagen');
    let $imagenB = document.querySelector('#imagenB');

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function pasarFotoB(){
        if(posicionActual >= IMAGENESB.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagenB();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function retrocederFotoB() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENESB.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagenB();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function renderizarImagenB () {
        $imagenB.style.backgroundImage = `url(${IMAGENESB[posicionActual]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonAvanzarB.addEventListener('click', pasarFotoB);
    $botonRetrocederB.addEventListener('click', retrocederFotoB);
    // Iniciar
    renderizarImagen();
    renderizarImagenB();
}