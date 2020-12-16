
function activateDarkMode() {
    document.getElementsByTagName("body")[0].setAttribute("class", "dark-theme");
}
function activateLightMode() {
    document.getElementsByTagName("body")[0].setAttribute("class", "light-theme");
}

window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && activateDarkMode()
);

window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && activateLightMode()
);