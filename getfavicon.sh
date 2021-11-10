#!/bin/sh

# Usage:
#   ./getfavicon.sh <URL> <filename>
wget -S -O - https://www.google.com/s2/favicons?domain=$1 -o static/images/icons/$2
