const splash = document.querySelector('.splash');
const sideBar = document.querySelector(".sidebar");
console.log(sideBar);

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList = "fade";
        splash.addEventListener('transitionend', () => {
            splash.remove();
        });
    }, 2000)
});
function showSideBar() {
    sideBar.style.display = "flex";
}
function hideSideBar() {
    event.stopPropagation(); // Empêche le clic de remonter jusqu'à nav#menu
    //console.log("Clic détecté !");
    sideBar.style.display = "none";
}
