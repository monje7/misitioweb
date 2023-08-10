let button = document.getElementById("button");
let buttonX = document.getElementById("buttonX");
let containerSeacher = document.getElementById("containerSeacher");
let containerQuery = document.getElementById("containerQuery");
let container = document.getElementById("container");
let mainSearcher = document.getElementById("mainSearcher");


button.addEventListener("click",function(){
    containerQuery.classList.remove("main-searcher-query-hidden");
});
buttonX.addEventListener("click",function(){
    containerQuery.classList.add("main-searcher-query-hidden");
})