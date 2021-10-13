var term = new Terminal({
    cursorBlink: "block",
    rows: 10,
    cols: 80
});
var entries = [];
var curr_line = "";
function shortPwd() {
    var path = pwd.replace("/home/tobi", "~");
    return path + "/";
}
term.open(document.getElementById("terminal"));
term.write("Welcome to tobilehman.com\r\n");
var PS1 = () => `${shortPwd()}$ `;
term.write(PS1());
const fs = {
    "/home/tobi": [".", "..", "archive", "about", "contact", "gpus", "interest", "projects", "posts"],
    "/home/tobi/projects": [".", ".."],
    "/home/tobi/contact": [".", ".."],
    "/home/tobi/posts": [".", ".."],
    "/home/tobi/about": [".", ".."],
    "/home/tobi/about": [".", "..", "hgttg.mp3"]
};
function prompt() {
    term.write("\r\n");
    curr_line = curr_line.trim();
    const { groups: { cmd, args } } = /^(?<cmd>[a-z]+) *(?<args>.*)$/.exec(curr_line);

    switch(cmd) {
        case "cd":
            if(args == "..") {
                var href = window.location.href;
                var hrefParts = href.split("/");
                hrefParts.reverse();
                hrefParts.shift();
                hrefParts.shift();
                hrefParts.reverse();
                window.location.href = hrefParts.join("/");
            }
            else if(args == "~" || args == "/home/tobi") {
                window.location.href = "/";
            } else {
                window.location.href = args;
            }
            break;
        case "clear":
            entries.push(curr_line);
            term.clear();
            curr_line = "";
            term.write(PS1() + curr_line);
            break;
        case "ls":
            const path = args.startsWith("-") || args == "" ? pwd : args;
            const items = fs[path];
            for(var i = 0; items && i < items.length; i++) {
                if(!items[i].startsWith(".")) {
                    term.write(items[i]);
                    term.write("\t");
                } else {
                    if(curr_line.match(/\-a/)) {
                        term.write(items[i]);
                        term.write("\t");
                    }
                }
            }
            entries.push(curr_line);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1() + curr_line);
            break;
        case "pwd":
            term.write(pwd);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1() + curr_line);
            break;
        case "mail":
            curr_line = "";
            term.write("mail@tobilehman.com\r\n");
            term.write(PS1() + curr_line);
            break;
        case "uname":
            term.write("TobiOS");
            if(args == "-a") {
                term.write(" 33.5");
            }
            curr_line = "";
            term.write("\r\n");
            term.write(PS1() + curr_line);
            break;
        default:
            term.write("tobish: command not found: " + curr_line);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1() + curr_line);
            break;
    }
}

term.on("key", function(key, ev) {
    if(ev.keyCode === 13) {
        entries.push(curr_line);
        prompt();
    } else if(ev.keyCode === 8) {
        curr_line = curr_line.slice(0, -1);
        term.write("\r\n");
        term.write(PS1() + curr_line);
    } else {
        curr_line += key;
        term.write(key);
    }
});
