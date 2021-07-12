const switchBtn = document.getElementById("switchBtn");
const mainNav = document.getElementsByClassName("main-navigation")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const navTitle = document.getElementsByClassName("nav-title")[0];
const mainContent = document.getElementsByClassName("main-content")[0];
const dropdownContent = document.getElementsByClassName("dropdown-content");

switchBtn.addEventListener("click", () => {
    mainNav.classList.toggle("top-main-navigation")
    navLinks.classList.toggle("top-nav-links")
    navTitle.classList.toggle("top-nav-title")
    switchBtn.classList.toggle("top-switch-btn")
    mainContent.classList.toggle("top-main-content")

    for (let i = 0; i < dropdownContent.length; i++) {
        dropdownContent[i].classList.toggle("top-dropdown-content")
    }
})