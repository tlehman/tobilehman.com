package main

import (
	"fmt"
	"io/ioutil"
    "strings"
	"log"
	"path/filepath"
)

func main() {
	files, err := filepath.Glob("./content/posts/**/*.md")
	if err != nil {
		log.Fatal(err)
	}

    var bookReviewCount = 0

	for _, file := range files {
        var title string
        bytesRead, _ := ioutil.ReadFile(file)
        content := string(bytesRead)
        lines := strings.Split(content, "\n");
        for _, line := range lines {
            bookReviewCount += 1
            if strings.HasPrefix(line, "title") {
                title = strings.Split(line, "\"")[1]
            }
            if strings.HasPrefix(line, "tags") {
                if strings.Index(line, "book-review") > 0 {
                    fmt.Println(title)
                }
            }
        }
    }
}
