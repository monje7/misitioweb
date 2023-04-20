

let cont = document.getElementById("imgboxx");
let imgUno = document.getElementById("imgMini1");
let imgDos = document.getElementById("imgMini2");
let imgTres = document.getElementById("imgMini3");
let imgCuatro = document.getElementById("imgMini4");

let boxImgMini1 = document.getElementById("BoxImgMini1")
let boxImgMini2 = document.getElementById("BoxImgMini2")
let boxImgMini3 = document.getElementById("BoxImgMini3")
let boxImgMini4 = document.getElementById("BoxImgMini4")

imgUno.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-1-thumbnail.jpg")
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.add("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgDos.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-2-thumbnail.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.add("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgTres.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-3-thumbnail.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.add("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgCuatro.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-4-thumbnail.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.add("img-mini-a")
})

let btnRestar = document.getElementById("btnRestar");
let cantBox = document.getElementById ("cantBox");
let numeroElementos = document.getElementById("numeroElementos");
let btnCantidad = document.getElementById ("btnCantidad");
let btnSumar = document.getElementById("btnSumar");
// btnSumar.addEventListener("click" , function(){
//    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
//    // leemos el numero de la interfaz
//    // convertimos el numero leido en texto leido
//    // añadimos uno al valor total
//    // convertimos el resultado de las operaciones a texto
//    // agreagamos el nuevo valor*/

//    let nodeToAdd = document.createElement("p");

//    let nodeText  = document.createTextNode("6");
   
//    numeroElementos.innerHTML="";
//    let numeroElementosInt = parseInt(numeroElementosTxt);
//    let totalElementosInt = numeroElementosInt + 1;
//    let totalElementosTxt = totalElementosInt.toString();
//    numeroElementos.innerHTML = totalElementosTxt;  
// });
// btnRestar.addEventListener("click" , function(){
//     let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
//     // leemos el numero de la interfaz
//     // convertimos el numero leido en texto leido
//     // añadimos uno al valor total
//     // convertimos el resultado de las operaciones a texto
//     // agreagamos el nuevo valor*/
 
//     let nodeToAdd = document.createElement("p");
 
//     let nodeText  = document.createTextNode("6");
   
//     numeroElementos.innerHTML="";
//     let numeroElementosInt = parseInt(numeroElementosTxt);
//     let totalElementosInt = numeroElementosInt - 1;
//     let totalElementosTxt = totalElementosInt.toString();
//     numeroElementos.innerHTML = totalElementosTxt;  
//  });

let click= 0;

btnSumar.addEventListener("click", function(){
    if (click == 50){
        click =50;
   
    }else{
        click = click + 1
        numeroElementos.innerHTML = click
    }
})
btnRestar.addEventListener("click", function(){
    if (click== 0){
        click=  0;
   
    }else{
        click = click - 1
        numeroElementos.innerHTML = click
    }
});
