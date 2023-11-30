const button = document.getElementById("button");
const opinion = document.querySelectorAll(".opinion");
const barras = document.querySelectorAll(".barra-inside");
const porcentajes = document.querySelectorAll(".porcentaje");

button.addEventListener("click",function(){

    let isValid = true;
    for (let i = 0; i < opinion.length; i++) {
        if (parseInt(opinion[i].value) < 0) {
            isValid = false;
            break; 
        }
    }

    if (!isValid) {
        alert("¡Error! La opinión no puede ser igual a 0. Por favor, ingresa valores válidos.");
        return; 
    }  

    let total = 0 ;
    for (a = 0; a < opinion.length; a++ ){
        total += parseInt(opinion[a].value);
        }
    for (let i = 0; i < opinion.length; i++) {
        let  opinionInt = parseInt(opinion[i].value)
        let porcentajeValue = (opinionInt * 100) / total;
        let porcentajeInt = Math.floor(porcentajeValue) 
        barras[i].style.backgroundColor = "blue";
        barras[i].style.width = porcentajeInt + "%";
        porcentajes[i].innerHTML = porcentajeInt + "%";
    }
})