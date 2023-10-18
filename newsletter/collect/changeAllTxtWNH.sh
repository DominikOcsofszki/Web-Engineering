#!/bin/zsh



fd '.txt$' -x zsh enterLinksInWNH.sh {} > NEW.html 
fd '.html$' -x zsh enterLinksInWNH.sh {}  >> NEW.html
