const hamburger = document.querySelector("#hamburger");
const hamburger_check = document.querySelector("#hamburger_check");
const mobileNavMenu = document.querySelector(".mobile_nav_menu");

function initPage() {
    hamburger_check.checked = false;
    mobileNavMenu.classList.remove("show_mobile_nav_menu");
}

function toggleMenu() {
    if (hamburger_check.checked) {
        mobileNavMenu.classList.remove("show_mobile_nav_menu");
        hamburger_check.checked = false;
    } else {
        mobileNavMenu.classList.add("show_mobile_nav_menu");
        hamburger_check.checked = true;
    }
}

console.log(hamburger);
console.log(mobileNavMenu);

initPage();
hamburger.addEventListener("click", toggleMenu);
