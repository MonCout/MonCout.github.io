// -------------------- Menu -------------------- //

let buttonMenu = document.getElementById("bx-menu");
let menu = document.getElementById("nav-menu");
let buttonMenuX = document.getElementById("bx-x");
let linksMenuA = document.getElementById("links-enlaces-menuA");
let linksMenuB = document.getElementById("links-enlaces-menuB");
let linksMenuC = document.getElementById("links-enlaces-menuC");
let linksMenuD = document.getElementById("links-enlaces-menuD");



buttonMenu.addEventListener("click", () => {
    menu.style.transition = ".40s";
    menu.style.left = "0%";
    buttonMenu.style.display = "none";
    buttonMenuX.style.display = "flex";

});


buttonMenuX.addEventListener("click", () => {
    menu.style.transition = ".4s";
    menu.style.left = "-200%";
    buttonMenu.style.display = "flex";
    buttonMenuX.style.display = "none";
});

linksMenuA.addEventListener("click", () => {
    menu.style.transition = ".4s";
    menu.style.left = "-200%";
    buttonMenu.style.display = "flex";
    buttonMenuX.style.display = "none";
});

linksMenuB.addEventListener("click", () => {
    menu.style.transition = ".4s";
    menu.style.left = "-200%";
    buttonMenu.style.display = "flex";
    buttonMenuX.style.display = "none";
});

linksMenuC.addEventListener("click", () => {
    menu.style.transition = ".4s";
    menu.style.left = "-200%";
    buttonMenu.style.display = "flex";
    buttonMenuX.style.display = "none";
});

linksMenuD.addEventListener("click", () => {
    menu.style.transition = ".4s";
    menu.style.left = "-200%";
    buttonMenu.style.display = "flex";
    buttonMenuX.style.display = "none";
});


// -------------------- Scroll reveal -------------------- //
