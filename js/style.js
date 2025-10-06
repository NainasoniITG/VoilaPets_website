//Search bar
let searchBarOpen = document.getElementById('searchBarOpen');
let header_content = document.querySelector(".header-content");
let search = document.querySelector(".search-bar");
let body = document.getElementById('body')
const navBar = document.querySelector(".navigation-bar");
const burger = document.querySelector(".hamburger");
const cartIcon = document.getElementById("cart-icon");
const hamburgerMenu = document.getElementById("hamburgerMenu");
let close = document.getElementById('close-cart');
let text = document.querySelector(".announcement-bar-text");

searchBarOpen.addEventListener('click', (event) => {
    event.preventDefault();
    header_content.classList.add("deactive");
    search.classList.remove("deactive");
    search.classList.add("active");
    body.classList.add('scroll-out');
    text.style.padding = "8px 0px 22px 0px";
})
function searchBarClose() {
    header_content.classList.remove("deactive");
    search.classList.add("deactive");
    search.classList.remove("active")
    body.classList.remove('scroll-out')
    text.style.padding = "8px 0px 11px 0px";
}

function toggleMenu() {
    navBar.classList.toggle("active");
    body.classList.toggle('scroll-out')
    burger.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    cartIcon.addEventListener("click", function (e) {
        e.preventDefault();
        body.classList.add('scroll-out');
        hamburgerMenu.classList.toggle("hidden");
    });
    close.addEventListener("click", function (e) {
        e.preventDefault();
        hamburgerMenu.classList.add("hidden");
        body.classList.remove('scroll-out')
    });
});


