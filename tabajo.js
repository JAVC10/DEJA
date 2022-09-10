


const imagen = document.querySelector(".uno");
const cuadro = document.querySelector(".img-container");
const corazon = document.querySelector(".dos");
const figura = document.querySelector(".figura");
const button3 = document.querySelector(".tres");
const fondo = document.querySelector(".fondo");
const button4 = document.querySelector(".cuatro");
const texto = document.querySelector(".texto");


button4.addEventListener("click", ()=>{
    texto.classList.toggle("mensaje");
});
window.addEventListener("click", e=>{
    if(texto.classList.contains("mensaje") && e.target != button4){
            texto.classList.toggle("mensaje");
        }
});



button3.addEventListener("click", ()=>{
    fondo.classList.toggle("fondo-2");
});
window.addEventListener("click", e=>{
    if(fondo.classList.contains("fondo-2") && e.target != button3){
            fondo.classList.toggle("fondo-2");
        }
});



imagen.addEventListener("click", ()=>{
    cuadro.classList.toggle("dos");
});
window.addEventListener("click", e=>{
    if(cuadro.classList.contains("dos") && e.target != imagen){
            cuadro.classList.toggle("dos");
        }
});



corazon.addEventListener("click", ()=>{
    alert("TE AMO");
    figura.classList.toggle("movimiento");
});
window.addEventListener("click", e=>{
    if(figura.classList.contains("movimiento") && e.target != corazon){
            figura.classList.toggle("movimiento");
        }
})

