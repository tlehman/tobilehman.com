
const commands = {
    "uname": "TobiOS"
};
window.onkeyup = function (event) {
    const cmd = document.getElementById("command");
    const key = event.key;
    const text = cmd.innerText;
    if(key === "Backspace") {
        cmd.innerText = text.substring(0, text.length-1);
    } else if(key === "Enter") {
        cmd.innerHTML += "<br />";
        cmd.innerText += title;
    } else if(key.length === 1) {
        cmd.innerText += key;
    }

}
