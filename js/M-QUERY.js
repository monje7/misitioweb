let barMenu = document.getElementById("barMenu");
let mainMenu = document.getElementById("mainMenu");

barMenu.addEventListener("click", function(){
    if (mainMenu.classList.contains("main-menu")){
         mainMenu.classList.add("main-menu-visible");
         mainMenu.classList.remove("main-menu");
    }
    else {
        mainMenu.classList.remove("main-menu-visible");
        mainMenu.classList.add("main-menu");
    }
});