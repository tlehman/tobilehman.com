var term = new Terminal({
    cursorBlink: "block",
    rows: 8,
    cols: 80
});

var entries = [];
var curr_line = "";
function shortPwd() {
    return pwd.replace("/home/tobi", "~") + "/";
}
var delimiter = "\t";
term.open(document.getElementById("terminal"));
term.focus();
term.write("Welcome to tobilehman.com\r\n");
var PS1 = () => `${shortPwd()}$ `;
term.write(PS1());
const fs = {
    "/home/tobi": [".", "..", "archive", "about", "contact", "gpus", "interest", "projects", "posts"],
    "/home/tobi/projects": [".", ".."],
    "/home/tobi/contact": [".", ".."],
    "/home/tobi/posts": [".", ".."],
    "/home/tobi/about": [".", ".."],
    "/home/tobi/archive": [".", "..", "hgttg.mp3"]
};
const commands = [
    { name: "back", handler: () => window.history.back() },
    { name: "cd", handler: (args) => {
            if (args == "..") {
                var href = window.location.href;
                var hrefParts = href.split("/");
                hrefParts.reverse();
                hrefParts.shift();
                hrefParts.shift();
                hrefParts.reverse();
                window.location.href = hrefParts.join("/");
            }
            else if (args == "~" || args == "/home/tobi") {
                window.location.href = "/";
            } else {
                window.location.href = args;
            }
        }
    },
    { name: "clear", handler: () => {
            entries.push(curr_line);
            term.clear();
            curr_line = "";
            term.write(PS1() + curr_line);
        }
    },
    { name: "ls", handler: (args) => {
        const path = args.startsWith("-") || args == "" ? pwd : args;
        const items = fs[path];
        // ls -1 shows each item on new line
        if(curr_line.match(/\-1/)) {
            delimiter = "\r\n";
        } else {
            delimiter = "\t";
        }
        // If there are items in the "filesystem". Otherwise just spoof it
        if(!items && curr_line.match(/\-a/)) {
            term.write(".");
            term.write(delimiter);
            term.write("..");
        }
        // Assuming there are items in the "filesystem"
        for(var i = 0; items && i < items.length; i++) {
            if(!items[i].startsWith(".")) {
                term.write(items[i]);
                term.write(delimiter);
            } else {
                if(curr_line.match(/\-a/)) {
                    term.write(items[i]);
                    term.write(delimiter);
                }
            }
        }
        // Special case, if path == "posts", then show the blog posts:
        if(path === "/home/tobi/posts") {
            // Display all hugo-generated listItems (see habitmelon/layouts/_default/list.html)
            for(var i = 0; i < listItems.length; i++) {
                if(listItems[i].split("/").length >= 3) {
                    term.write(listItems[i].split("/")[2]);
                    term.write(delimiter);
                }
            }
        }

        entries.push(curr_line);
        curr_line = "";
        term.write("\r\n");
        term.write(PS1() + curr_line);
    }},
    { name: "pwd", handler: () => {
            term.write(pwd);
            curr_line = "";
            term.write("\r\n");
            term.write(PS1() + curr_line);
        }
    },
    
    { name: "mail", handler: () => {
        curr_line = "";
        term.write("mail@tobilehman.com\r\n");
        term.write(PS1() + curr_line);
    } },
    { name: "uname", handler: (args) => {
        term.write("TobiOS");
        if(args == "-a") {
            term.write(" 33.5");
        }
        curr_line = "";
        term.write("\r\n");
        term.write(PS1() + curr_line);
    }}
];
function prompt() {
    term.write("\r\n");
    curr_line = curr_line.trim();
    const { groups: { cmd, args } } = /^(?<cmd>[a-z]+) *(?<args>.*)$/.exec(curr_line);

    if(cmd == "help") {
        term.write("Here are all the commands you can type: ");
        term.write("\r\n");
        commands.forEach((command, i) => {
            term.write("  " + command.name);
            if((i+1) % 8 == 0) {
                term.write("\r\n  ");
            } else {
                term.write(" ");
            }
        });
        term.write("\r\n");
        term.write(PS1());
        return;
    }

    const command_handler = commands.filter((command) => command.name == cmd)[0]?.handler;
    if(command_handler) {
        command_handler(args);
    } else {
        term.write("tobish: command not found: " + curr_line);
        curr_line = "";
        term.write("\r\n");
        term.write(PS1() + curr_line);
    }
}

term.on("key", function(key, ev) {
    if(ev.keyCode === 13) {
        entries.push(curr_line);
        prompt();
        // scroll to bottom of container div if it's in mobile mode
        const t = document.getElementById("terminal"); t.scrollTop = t.scrollHeight;
    } else if(ev.keyCode === 8) {
        curr_line = curr_line.slice(0, -1);
        term.write("\r\n");
        term.write(PS1() + curr_line);
    } else {
        curr_line += key;
        term.write(key);
    }
});
