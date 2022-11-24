

let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu");

barMenu.addEventListener("click", function() {
    
    if (main_Menu.classList.contains("main-menu")) {
        main_Menu.classList.add("menu-bloque-visible");
        main_Menu.classList.remove("menu-bloque-oculto");
        main_Menu.classList.remove("main-menu");
    }
    else {
        main_Menu.classList.remove("menu-bloque-visible");
        main_Menu.classList.add("menu-bloque-oculto");
        main_Menu.classList.add("main-menu");
    }
    
});
