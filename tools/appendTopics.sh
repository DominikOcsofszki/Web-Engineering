#!/bin/zsh

inputFile="$1"
echo $inputFile
outputFile=$inputFile.html
echo $outputFile
# sed => sd => download for mac: "brew install sd" if not installed 

echo "<!DOCTYPE html>
<html lang="en">
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1"
			<title>$inputFile</title>
			<style> body{background:white;font-size:10;}</style>
		</head>
		<body>
			<code>
				<pre>" > $outputFile

	cat $inputFile | sd '&' '&amp;' | sd '<' '&lt;' | sd '>' '&gt;'  >> $outputFile

echo "			</pre>
		</code>
	</body>
</html>" >> $outputFile

open $outputFile
