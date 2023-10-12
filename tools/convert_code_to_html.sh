#!/bin/zsh

inputFile="$1"
echo $inputFile
outputFile=$inputFile.html
echo $outputFile

echo "<!DOCTYPE html>
<html lang="en">
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1"
			<title></title>
		</head>
		<body>
			<code>
				<pre>" > $outputFile
				# <pre>" > final_html.html

	cat $inputFile | sd '&' '&amp;' | sd '<' '&lt;' | sd '>' '&gt;'  >> $outputFile
# cat Aufgabe_1.html | sd '&' '&amp;' | sd '<' '&lt;' | sd '>' '&gt;'  >> final_html.html 

echo "			</pre>
		</code>
	</body>
</html>" >> $outputFile
# </html>" >> final_html.html

open $outputFile
