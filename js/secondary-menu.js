//////////////////// HAMBURGER MENU
var menuSecondary = document.querySelector(".secondary-menu");
var hambBtn = document.querySelector("#hamb-btn");
var toggle = document.querySelector("#hamb-menu-container")

toggle.addEventListener("click", function() {
    if ( hambBtn.classList.contains("hamb-closed") ){
        hambBtn.classList.remove("hamb-closed");
        hambBtn.classList.add("hamb-open");
        menuSecondary.classList.add("open");
    } else {
        hambBtn.classList.remove("hamb-open");
        hambBtn.classList.add("hamb-closed");
        menuSecondary.classList.remove("open");
    }
});
