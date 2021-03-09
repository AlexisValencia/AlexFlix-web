$(document).ready(function(){

    const fila = document.querySelector(".contenedor-carousel");
    /*Obtiene todos los elementos*/
    const peliculas = document.querySelectorAll(".pelicula"); 

    const flechaIzquierda = $("#flecha-izquierda");
    const flechaDerecha = $("#flecha-derecha");

    /*--------- Evento boton carousel a la derecha ----------*/
    flechaDerecha.on("click", function(){
        fila.scrollLeft += fila.offsetWidth;
        const indicadorActivo = document.querySelector(".indicadores .activo");
        /*Pregunta si hay elemento siguiente*/
        if(indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add("activo");
            indicadorActivo.classList.remove("activo");
        }
    });

    /*--------- Evento boton carousel a la izquierda ----------*/
    flechaIzquierda.on("click", function(){
        fila.scrollLeft -= fila.offsetWidth;
        const indicadorActivo = document.querySelector(".indicadores .activo");
        /*Pregunta si hay elemento anterior*/
        if(indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add("activo");
            indicadorActivo.classList.remove("activo");
        }
    });
    /*Redondeo hacia arriba de la paginación*/
    const numeroPaginas = Math.ceil(peliculas.length / 5);
    for(let i=0;i<numeroPaginas;i++){
        /*Para crear un elemento, en este caso un boton*/
        const indicador = document.createElement("button");

        if(i===0){
            indicador.classList.add("activo");
        }
        document.querySelector(".indicadores").appendChild(indicador);
        indicador.addEventListener("click", (e)=>{
            fila.scrollLeft = i*fila.offsetWidth;
            document.querySelector(".indicadores .activo").classList.remove("activo");
            e.target.classList.add("activo");
        });
    } 

    /* ------------ HOVER -----------*/
    peliculas.forEach((pelicula)=>{
        pelicula.addEventListener('mouseenter', (e)=>{
            const elemento = e.currentTarget; /*Se obtiene el elemento al que se le pone el cursor*/
            /*Añade el efecto hover después de un tiempo*/
            setTimeout(()=>{
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            },100);
        });
    });

    fila.addEventListener('mouseleave',() => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    });
});