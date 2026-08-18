const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList = "fade";
    }, 2000)
});
function showSideBar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "flex";
    
}
