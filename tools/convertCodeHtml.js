const fs = require('fs');

function transformCodeToHTML(inputFile) {
  const outputFile = inputFile + '.html';

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${inputFile}</title>
  <style>body {background: white; font-size: 10px;}</style>
</head>
<body>
  <code>
    <pre>`;

  const inputContent = fs.readFileSync(inputFile, 'utf-8')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const closingTags = `
    </pre>
  </code>
</body>
</html>`;

  const fullContent = htmlContent + inputContent + closingTags;

  fs.writeFileSync(outputFile, fullContent);
  console.log(`Generated ${outputFile}`);
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Please provide an input file.');
} else {
  transformCodeToHTML(inputFile);
}
