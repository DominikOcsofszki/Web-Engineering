#!/bin/zsh
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
				<pre>" > final_html.html

cat Aufgabe_1.html | sd '&' '&amp;' | sd '<' '&lt;' | sd '>' '&gt;'  >> final_html.html 

echo "			</pre>
		</code>
	</body>
</html>" >> final_html.html

open final_html.html
