
async function fetchAsync() {

    const data = await fetch('./fetch_site.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));

    const html = data.html;
    const css = data.css;
    const js = data.js;
    const other = data.other;

    const htmlHeadings = data.html[0].content;
    const htmlParagraph = data.html[1].content;

    // const headingsContent = htmlHeadings;
    // const paragraphContent = htmlParagraph;

    const headingsContent = data.html.headings.content;
    const paragraphContent = data.html.paragraph.content;

    // for (let i = 0; i < data.length; i++) {
    // document.getElementById('headings').textContent += data[i].html.headings.content;
    // }

    document.getElementById('headings').textContent = headingsContent;
    document.getElementById('paragraph').textContent = paragraphContent;

    // getsth(data);

    // function getsth(data) {
    //     document.getElementById('headings').textContent = headingsContent;

    // }
}