#!/bin/bash
frida -U -f org.owasp.mastestapp.MASTestApp-iOS -l ../MASTG-DEMO-0044/script.js -o output.txt
