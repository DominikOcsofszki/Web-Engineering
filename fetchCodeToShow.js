//
//
//
// function fetchCodeAndShow() {
// fetch('./Aufgaben/Aufgabe_1/')
//     .then(res => res.text())
//     .then(text => {
//         const transformedCodeText = transformCodeToHTML(text);
//         let oldelem = document.querySelector("body");
//         let newelem = document.createElement("body");
//         newelem.innerHTML = transformedCodeText;
//         // newelem.innerHTML = text;
//         oldelem.parentNode.replaceChild(newelem, oldelem);
//         // setUpNavFunctions();
//     })
// }
//
// function transformCodeToHTML(textInput) {
//     console.log(textInput);
//     textInput = textInput.replace(/&/g, '&amp;');
//     textInput = textInput.replace(/</g, '&lt;');
//     textInput = textInput.replace(/>/g, '&gt;');
//     console.log(textInput);
//     const output = ` <pre><code>
//         ${textInput} </code></pre>`
//     return output;
// }
//
//
