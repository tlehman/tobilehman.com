/* css-favicon-append.go is a utility program to add a
   favicon to my custom-$DATE.css file. The favicon will
   be shown in the ::after pseudo-element of the page

   by Tobi Lehman <mail@tobilehman.com> on 2022-03-18
*/

package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"time"
)

func usage() {
	progname := "css-favicon-append.go"
	url := "example.com"
	ico := "http://example.com/favicon.ico"
	nick := "example"
	fmt.Printf("Usage:\n\t")
	fmt.Printf(
		"go run %s '%s' '%s' '%s'",
		progname, url, ico, nick,
	)
	fmt.Printf("\n\t")
	fmt.Printf("# That will download '%', cache it in the static/images/icons/ directory, then add the entry to the custom-*.css file and increment the date.\n\nThe reason we increment the date is to invalidate browser caches so they get the new favicons\n")
}

// download ico url to static/images/icons/$nick.$ext
// ext could be ico, png, jpg, svg, whatever
func download(icourlp *url.URL, nick string, ext string) {
	fmt.Printf("extension: %s\n", ext)
	// create cached fav icon file
	filename := fmt.Sprintf("static/images/icons/%s.%s", nick, ext)
	file, err := os.Create(filename)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	defer file.Close()
	// download the icon
	response, err := http.Get(icourlp.String())
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	// copy bytes from the icon response to the file
	io.Copy(file, response.Body)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}

func appendToCss(url string, nick string, ext string) {
	// find the current custom-$DATE.css file
	files, err := filepath.Glob("./static/css/custom-*.css")
	if err != nil {
		log.Fatal(err)
	}
	if len(files) != 1 {
		log.Fatal("there should only be one custom-$DATE.css file")
	}
	// open the current custom-$DATE.css file
	currentFilename := files[0]
	cssFile, err := os.OpenFile(currentFilename, os.O_APPEND | os.O_RDWR, 0660)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	// format the line to append
	cssline := fmt.Sprintf(
		"a[href*='%s']::after { background-image: url(\"/images/icons/%s.%s\"); }\n",
		url,
		nick,
		ext,
	)
	// append the line to the file
	fmt.Printf("Writing %s to %s\n", cssline, currentFilename);
	cssFile.WriteString(cssline)
	cssFile.Close()
	now := time.Now()
	newShortFilename := fmt.Sprintf("custom-%d-%02d-%02d.css", now.Year(), now.Month(), now.Day()) 
	newFilename := fmt.Sprintf("static/css/%s", newShortFilename)
	// find index of currentFilename in head.html
	content, err := os.ReadFile("./layouts/partials/head.html")
	shortFilename := strings.Split(currentFilename, "/")[2]
	startIndex := int64(strings.Index(string(content), shortFilename))
    // point head.html to new file
	headFile, err := os.OpenFile("./layouts/partials/head.html", os.O_RDWR, 0644)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	headFile.Seek(startIndex, 0)
	headFile.Write([]byte(newShortFilename))
	headFile.Close()

	// rename file to current-$TODAY.css (to invalidate browser caches)
	os.Rename(currentFilename, newFilename)
}

func parseUrlAndGetExt(ico string) (*url.URL, string) {
	icourlp, err := url.Parse(ico)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	// determine extension
	ext := strings.Split(icourlp.Path, ".")[1]
	return icourlp, ext
}

func main() {
	if len(os.Args) != 4 {
		usage()
		os.Exit(1)
	}
	url := os.Args[1]
	ico := os.Args[2]
	nick := os.Args[3]
	icourlp, ext := parseUrlAndGetExt(ico)
	download(icourlp, nick, ext)
	appendToCss(url, nick, ext)
}
