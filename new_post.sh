#!/bin/sh
printf 'Enter short title (spaces will get turned into dashes): '
read title
hugo new --kind post-bundle posts/$(echo $title | sed 's/ /-/g')
