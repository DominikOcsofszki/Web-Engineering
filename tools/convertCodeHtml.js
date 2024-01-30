const htmlCode =`<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <script id="replace_with_navbar" src="/nav.js"></script>

<div class="codepen">

  <section class="code">
    <div class="editor">
      <header class="editor__header">
        <h3 class="editor__heading">HTML</h3>
        <button>⌄</button>
      </header>
      <div class="editor__code">
        <textarea class="editor__input">

`
const htmlCodeEnd = `
            
        </textarea>
      </div>
    </div>
    </div>

  </section>

</div>
</body>

</html>
`


const fs = require('fs');

function transformCodeToHTML(inputFile) {
  const outputFile = inputFile + '.html';

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${inputFile}</title>
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

  // const fullContent = htmlContent + inputContent + closingTags;
  const fullContent = htmlCode + inputContent + htmlCodeEnd;

  fs.writeFileSync(outputFile, fullContent);
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Please provide an input file.');
} else {
  transformCodeToHTML(inputFile);
}
