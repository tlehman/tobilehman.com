function terminalOnClick(event) {
    document.getElementById("command").focus();
    console.log("focusing invisible textarea");
}

function command(target) {
    const input = target.value;
    const key = input[input.length-1];
    // If user hits Enter
    if(key === "\n") {
        console.log("Enter");
        // clear input
        target.value = " ";
        // copy terminal-line
        let promptNode = document.getElementById("prompt").cloneNode(true);
        let commandVisible = document.getElementById("commandVisible").cloneNode(false);
        let blinkNode = document.getElementById("blink").cloneNode(true);
        document.getElementById("commandVisible").removeAttribute("id");
        commandVisible.innerText += " ";
        document.getElementById("prompt").removeAttribute("id");
        document.getElementById("blink").remove();
        let newLine = document.createElement("div", {"class": "terminal-line"});
        newLine.appendChild(promptNode);
        newLine.appendChild(commandVisible);
        newLine.appendChild(blinkNode);
        document.getElementById("terminal-lines").appendChild(newLine);
        // font-size: 20px, scroll to y-position lines.count * font-size
        let terminal = document.getElementById("terminal");
        document.getElementById("terminal").scroll(0, terminal.scrollHeight);
    } else {
        document.getElementById("commandVisible").innerText = target.value;
    }
}

const commands = {
    "uname": "TobiOS"
};

window.onkeyup = function (event) {
    const cmd = document.getElementById("command");
    const key = event.key;
    const text = cmd.innerText;
    if (key === "Enter") {
        cmd.innerHTML += "<br />";
        cmd.innerText += title;
    } 
}
