const menu = document.querySelector(".home-menu");

window.onscroll = function () {
    console.log(this.scrollY)
    if (this.scrollY > 50) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
}