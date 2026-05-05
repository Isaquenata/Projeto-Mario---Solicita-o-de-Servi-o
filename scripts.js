

const formulario = document.querySelector('.formulario');
const mascara = document.querySelector('.mascara-formulario');

function mostrarForm(){
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm(){
    formulario.style.left = "-257px";
    formulario.style.transform = "translate(0)";
    mascara.style.visibility = "hidden";
}