
/* Begin Dark Mode */
function activateDarkMode() {
    document.getElementsByTagName("body")[0].setAttribute("class", "dark-theme");
    document.cookie = "theme=dark";
}
function activateLightMode() {
    document.getElementsByTagName("body")[0].setAttribute("class", "light-theme");
    localStorage.setItem("color-scheme", "light");
    document.cookie = "theme=light";
}

window.onload = function() {
    if (document.cookie.match(/theme=dark/)) {
        activateDarkMode();
    } else {
        activateLightMode();
    }
}