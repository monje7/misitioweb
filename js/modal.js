// let main = document.querySelector(".img-box");
// let miniOne = document.querySelector(".img-mini-1")
// let miniTwo = document.querySelector(".img-mini-2")
// let miniThree = document.querySelector(".img-mini-3")
// let miniFour = document.querySelector(".img-mini-4")
// let border1 = document.getElementById("border1")
// let border2 = document.getElementById("border2")
// let border3 = document.getElementById("border3")
// let border4 = document.getElementById("border4")

// miniOne.addEventListener("click", function () {
//     miniOne.classList.add("img-vis")
//     // miniOne.classList.add("border-vis")
//     border1.classList.add("bord")
//     main.setAttribute("src", "img/image-product-1.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border2.classList.remove("bord")
//     border3.classList.remove("bord")
//     border4.classList.remove("bord")

// })
// miniTwo.addEventListener("click", function () {
//     miniTwo.classList.add("img-vis")
//     border2.classList.add("bord")
//     main.setAttribute("src", "img/image-product-2.jpg")
//     miniOne.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border3.classList.remove("bord")
//     border4.classList.remove("bord")

// })

// miniThree.addEventListener("click", function () {
//     miniThree.classList.add("img-vis")
//     border3.classList.add("bord")
//     main.setAttribute("src", "img/image-product-3.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniOne.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border2.classList.remove("bord")
//     border4.classList.remove("bord")

// })
// miniFour.addEventListener("click", function () {
//     miniFour.classList.add("img-vis")
//     border4.classList.add("bord")
//     main.setAttribute("src", "img/image-product-4.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniOne.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border2.classList.remove("bord")
//     border3.classList.remove("bord")

// })

let less = document.getElementById("less");
let more = document.getElementById("more");
let number = document.getElementById("number")
let price = document.getElementById("price")
let click = 1;
let total = 125000;

more.addEventListener("click", function () {
    if (click == 50) {
        click = 50;
    } else {
        click = click + 1;
        number.innerHTML = click;
        total = total + 125000;
        price.innerHTML = "$" + total.toLocaleString("es");
    }
})

less.addEventListener("click", function () {
    if (click == 1) {
        click = 1;

    } else {
        click = click - 1
        number.innerHTML = click
        total = total - 125000;

        price.innerHTML = "$" + total.toLocaleString("es");
    }
});

// let = document.getElementById("carShop");

let thubnail = document.querySelectorAll(".container-img");
let border = document.querySelectorAll(".border");
let opactity = document.querySelectorAll(".img")
let mainImg = document.querySelectorAll(".btn-img")
let arr = ["img/image-product-1.jpg", "img/image-product-2.jpg", "img/image-product-3.jpg", "img/image-product-4.jpg"];
let main = document.getElementById("mainPrin");
let mainModal = document.querySelector(".main-modal");
let bodyBoxTwo = document.getElementById("bodyBox")
let coverMain = document.getElementById("coverMain")
let rowCircle = document.querySelectorAll(".circle-row")
let right = document.getElementById("right")
let exit = document.getElementById("ex")

main.addEventListener("click", function () {
    mainModal.classList.add("main-modal-vis")
    bodyBoxTwo.classList.add("body-vis")
    coverMain.classList.add("cover-main")
    exit.classList.add("visible")

    coverMain.addEventListener("click", function () {
        bodyBoxTwo.classList.remove("cover-main")
        mainModal.classList.remove("main-modal-vis")
        coverMain.classList.remove("cover-main")
        exit.classList.remove("visible")

    })
    if (document.querySelector(".main-modal-vis") != null) {
        for (let i = 0; i < thubnail.length; i++) {
            thubnail[i].addEventListener("click", function () {
                for (let ind = 3; ind < i + 1; ind++) {
                    if (i == ind) {
                        console.log("BORDE " + (i))
                        border[ind - 4].classList.add("bord")
                        border[i].classList.add("bord")
                        opactity[ind - 3].classList.add("img-vis")
                        opactity[i + 2].classList.add("img-vis")
                        for (let im = 0; im < mainImg.length; im++) {
                            mainImg[im].setAttribute("src", arr[i - 4])
                        }
                    } else {
                        for (let ind = 7; ind >= 0; ind--) {
                            border[ind].classList.remove("bord")
                            opactity[ind + 1].classList.remove("img-vis")
                            opactity[ind + 2].classList.remove("img-vis")
                        }
                    }
                }
            })

            let cont = 0
            let contSecond = 4
            let reverse = 3
            let reverseSecond = 7
            // for (let index = 0; index < thubnail.length; index++) {
            for (let row = 0; row < rowCircle.length; row++) {
                rowCircle[row].addEventListener("click", function () {
                    border[7].classList.remove("bord")
                    border[6].classList.remove("bord")
                    border[5].classList.remove("bord")
                    border[4].classList.remove("bord")
                    border[3].classList.remove("bord")
                    border[2].classList.remove("bord")
                    border[1].classList.remove("bord")
                    border[0].classList.remove("bord")
                    opactity[9].classList.remove("img-vis")
                    opactity[8].classList.remove("img-vis")
                    opactity[7].classList.remove("img-vis")
                    opactity[6].classList.remove("img-vis")
                    opactity[5].classList.remove("img-vis")
                    opactity[4].classList.remove("img-vis")
                    opactity[3].classList.remove("img-vis")
                    opactity[2].classList.remove("img-vis")
                    opactity[1].classList.remove("img-vis")
                    opactity[0].classList.remove("img-vis")

                    console.log("CONT " + cont)
                    // border[7].classList.remove("bord")
                    // border[0].classList.remove("bord")
                    // if(cont!= 0){
                    //     reverse = cont
                    //     console.log("AAA " + reverse)
                    // }
                    if (row == 1) {
                        for (let im = 0; im < mainImg.length; im++) {
                            mainImg[im].setAttribute("src", arr[cont])
                        }
                        console.log("CONTSECOND " + contSecond)
                        // border[cont].classList.add("bord")
                        // border[cont + 4].classList.add("bord")
                        // border[cont + 3].classList.remove("bord")
                        // border[cont + 2].classList.remove("bord")
                        border[cont].classList.add("bord")
                        opactity[cont + 1].classList.add("img-vis")
                        border[contSecond].classList.add("bord")
                        opactity[contSecond + 2].classList.add("img-vis")
                        cont = cont + 1

                        contSecond = contSecond + 1
                        if (cont == 4) {
                            cont = 0
                            contSecond = 4

                        }


                        // if( cont == 2){
                        //     border[0].classList.remove("bord")
                        // }
                    }

                    if (row == 0) {
                        for (let im = 0; im < mainImg.length; im++) {
                            mainImg[im].setAttribute("src", arr[reverse])
                        }
                        console.log("RE " + reverse)
                        border[reverse].classList.add("bord")
                        border[reverseSecond].classList.add("bord")
                        opactity[reverse + 1].classList.add("img-vis")
                        opactity[reverseSecond + 2].classList.add("img-vis")
                        // border[reverseSecond].classList.add("bord")
                        // border[reverseSecond].classList.remove("bord")
                        // if (reverse == reverse-1) {
                        //     console.log("REMOVE " + (reverse+1))
                        //     // border[(reverse + 1)].classList.remove("bord")

                        // }
                        reverse = reverse - 1
                        reverseSecond = reverseSecond - 1

                        if (reverseSecond == 3) {
                            reverse = 3
                            reverseSecond = 7
                        }
                    }


                })
                // }
            }

        }
    }
    // for (let index = 0; index < 2; index++) {
    //     rowCircle[index].addEventListener("click", function () {

    //         if (index == 1) {
    //             let cont = 0
    //             console.log("INDEZ " + index)
    //             console.log("CONT " + cont)

    //             for (let ind = 0; ind < cont +1; ind++) {
    //                 console.log("IND-MAIN " + ind)
    //                 for (let i = 0; i < ind + 1; i++) {

    //                     console.log("IND " + ind)
    //                     console.log("I " + i)
    //                     if (ind == i) {
    //                         console.log("IGUAL")
    //                         console.log("IND-T " + ind)
    //                         console.log("I-T " + i)

    //                     } else {
    //                         console.log("No igual")
    //                     }
    //                 }
    //             }
    //             cont = cont + 1
    //         }

    //     })
    // }
})
if (document.querySelector(".main-modal-vis") == null) {
    for (let i = 0; i <= 4; i++) {
        thubnail[i].addEventListener("click", function () {
            for (let ind = 0; ind < i + 2; ind++) {
                border[i].classList.add("bord")
                opactity[i + 1].classList.add("img-vis")
                border[ind].classList.remove("bord")
                border[ind + 2].classList.remove("bord")
                opactity[ind + 1].classList.remove("img-vis")
                opactity[ind + 3].classList.remove("img-vis")
                for (let im = 0; im < mainImg.length; im++) {
                    mainImg[im].setAttribute("src", arr[i])
                }
            }
        })
    }
}