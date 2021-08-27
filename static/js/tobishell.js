var term = new Terminal({
    cursorBlink: "block",
    rows: 10,
    cols: 80
});
var entries = [];
var curr_line = "";
term.open(document.getElementById("terminal"));
term.write("Welcome to tobilehman.com $ ");
var PS1="$ ";
const pages = [
    {path: "."},
    {path: ".."},
    {path: ".secret.txt"},
    {path: "about"},
    {path: "posts"},
    {path: "projects"},
];
function prompt() {
    term.write("\r\n");
    curr_line = curr_line.trim();
    console.log(curr_line);
    const { groups: { cmd, args } } = /^(?<cmd>[a-z]+) *(?<args>.*)$/.exec(curr_line);

    console.log("curr_line = " +  curr_line);
    console.log(JSON.stringify(entries));

    switch(cmd) {
        case "clear":
            entries.push(curr_line);
            term.clear();
            curr_line = "";
            term.write(PS1 + curr_line);
            break;
        case "uname":
            term.write("TobiOS");
            if(args == "-a") {
                term.write(" 33.5");
            }
            curr_line = "";
            term.write("\r\n");
            term.write(PS1 + curr_line);
            break;
        case "ls":
            for(var i = 0; i < pages.length; i++) {
                if(!pages[i].path.startsWith(".")) {
                    term.write(pages[i].path);
                    term.write("\t");
                } else {
                    if(curr_line.match(/\-a/)) {
                        term.write(pages[i].path);
                        term.write("\t");
                    }
                }
            }
            entries.push(curr_line);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1 + curr_line);
            break;
        case "cd":
            window.location.href = args;
            break;
        default:
            term.write("tobish: command not found: " + curr_line);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1 + curr_line);
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
        term.write(PS1 + curr_line);
    } else {
        curr_line += key;
        term.write(key);
    }
});
