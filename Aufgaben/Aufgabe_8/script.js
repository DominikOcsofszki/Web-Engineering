
// async function fetchAsync() {

//     const data = await fetch('./fetch_site.json')
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => console.log(error));

//     const html = data.html;
//     const css = data.css;
//     const js = data.js;
//     const other = data.other;

//     // const htmlHeadings = data.html[0].content;
//     // const htmlParagraph = data.html[1].content;

//     // const headingsContent = htmlHeadings;
//     // const paragraphContent = htmlParagraph;

//     const headingsContent = data.html.headings.content;
//     const paragraphContent = data.html.paragraph.content;
//     document.getElementById('headings').textContent = headingsContent;
//     document.getElementById('paragraph').textContent = paragraphContent;

//     // getsth(data);
//     // function getsth(data) {
//     //     document.getElementById('headings').textContent = headingsContent;

//     // }
// }
// fetchAsync();

async function fetchAsync() {
    try {
        const response = await fetch('./fetch_site.json');
        const data = await response.json();

        const htmlElements = Object.keys(data.html);
        htmlElements.forEach(element => {
            if (element === null) return;
            console.log(element);

            const content = data.html[element].content;
            document.getElementById(element).textContent = content;
        });

        const cssElements = Object.keys(data.css);
        cssElements.forEach(element => {
            if (element === null) return;

            console.log(element);
            //ToDo change to higher order function
            const content = data.css[element].content;
            document.getElementById(element).textContent = content;
        });

        const jsElements = Object.keys(data.javascript);
        jsElements.forEach(element => {
            if (element === null) return;
            console.log(element);
            const content = data.javascript[element].content;
            document.getElementById(element).textContent = content;
        });

        const otherElements = Object.keys(data.other);
        otherElements.forEach(element => {
            if (element === null) return;
            console.log(element);
            const content = data.other[element].content;
            document.getElementById(element).textContent = content;
            // let item = document.createElement(element);
            // item.textContent = content;
            // console.log(item);
            // document.append(item);
        });
    } catch (error) {
        console.log(error);
    }
}

fetchAsync();