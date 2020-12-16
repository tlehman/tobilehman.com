function terminalOnClick(event) {
    document.getElementById("command").focus();
    console.log("focusing invisible textarea");
}

function command(target) {
    const input = target.value;
    const key = input[input.length-1];
    // If user hits Enter
    if(key === "\n") {
        // clear input
        target.value = " ";
        enter();
        if(input.match(/ *clear/)) {
            let lines = document.getElementsByClassName("terminal-line");
            for(var i = 0; i < lines.length-1; i++) {
                lines[i].remove();
            }
        } else if(input.match(/dark/)) {
            activateDarkMode();
        } else if(input.match(/light/)) {
            activateLightMode();
        } else if(input.match(/cd (.*)/)) {
            window.location.pathname = input.split(/\s/)[1];
        }
    } else {
        document.getElementById("commandVisible").innerText = target.value;
    }
}

function enter() {
    let promptNode = document.getElementById("prompt").cloneNode(true);
    let commandVisible = document.getElementById("commandVisible").cloneNode(false);
    let blinkNode = document.getElementById("blink").cloneNode(true);
    document.getElementById("commandVisible").removeAttribute("id");
    commandVisible.innerText += " ";
    document.getElementById("prompt").removeAttribute("id");
    document.getElementById("blink").remove();
    let newLine = document.createElement("div");
    newLine.setAttribute("class", "terminal-line");
    newLine.appendChild(promptNode);
    newLine.appendChild(commandVisible);
    newLine.appendChild(blinkNode);
    document.getElementById("terminal-lines").appendChild(newLine);
    // font-size: 20px, scroll to y-position lines.count * font-size
    let terminal = document.getElementById("terminal");
    document.getElementById("terminal").scroll(0, terminal.scrollHeight);
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
