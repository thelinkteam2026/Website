function shiningHeader(id) {
    let header = document.querySelector(id);
    console.log(header);
    header.style.textShadow = "gold 0px 0px 20px";

    setTimeout(() => {
        header.style.textShadow = "none";
    }, 2000);
}
