// fs is the "file system" of the website, it roughly maps 
// onto the directory structure of the website
// format
function rand() { return Math.floor(Math.random() * 256)}
const fs = {
    "/": [],
    "/etc": {
        "fstab": "/dev/brain     /           ext4    defaults,noatime  1   1"
    },
    "/dev": {
        "null": null,
        "random": function(size) { const bytes = new Uint8Array(size); for(var i=0; i < size; i++) { bytes[i] = rand(); } return bytes },
        "brain": "&#129504;"
    },
    "/lib": {
        "terminal.js": "/js/terminal.js",
        "math-canvas.js": "/js/math-canvas.js",
        "stl_viewer.min.js": "/js/stl_viewer.min.js",
        "three.min.js": "/js/three.min.js",
        "webgl_detector.js": "/js/webgl_detector.js",
    },
    "/mnt": {

    },
    "/home/tobilehman.com": {
        "about": [],
        "tags": [],
        "posts": [],
        "projects": []
    },
    "/tmp/": { }, // User-editable :)
    "/var": {
        "log": {
            "b.log": "/posts",
            "stats": "I don't collect any stats yet"
        }
    }
};
var pwd = "/";
// valid commands people can type in 
const commands = {
    "ls": function(args) { },
    "cd": function(args) { },
    "cat": function(path) { },
    "clear": function(args) { },
    "uname": function(args) { return (args === "a") ? "TobiOS tobilehman.com SMP Friday, May 27, 1988" : "TobiOS"; },
    "whomami": function(args) { return "tobi" },
    "man": function(args) { },
};

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
            window.location.pathname = input.match(/cd (.*)\/?\n?/)[1];
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

window.onkeyup = function (event) {
    const cmd = document.getElementById("command");
    const key = event.key;
    const text = cmd.innerText;
    if (key === "Enter") {
        cmd.innerHTML += "<br />";
        cmd.innerText += title;
    } 
}
