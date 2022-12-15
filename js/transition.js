let box3 = document.getElementById("box3");

box3.addEventListener("click", function() {
    if(box3.classList.contains("box3-old")) {
        box3.classList.add("box3-new");
        box3.classList.remove("box3-old");
    }
    else {
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old");
    }
})