let boton = document.getElementById("boton");
let botonsubiendo = document.getElementById("botonsubiendo");


boton.addEventListener("click", function(){
    document.getElementById("seccion2").scrollIntoView({
        behavior: "smooth"
    })
})
botonsubiendo.addEventListener("click", function(){
    document.getElementById("seccion1").scrollIntoView({
        behavior: "smooth"
    })
})