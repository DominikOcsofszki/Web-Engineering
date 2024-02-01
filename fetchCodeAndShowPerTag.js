//
// const link = "/Aufgaben/Aufgabe_1/Aufgabe_1.html"
// /**
//  // * @param  {string} link 
//  */
// export function fetchCodeAndShowPerTag(link) {
//     console.log(link.includes('.html'));
//     console.log(link.includes('.css'));
//     console.log(link.includes('.js'));
//
//     fetch(link)
//         .then(res => res.text())
//         .then(text => {
//             // console.log(text)
//             const transformedCodeText = transformCodeToHTML(text);
//             let oldelem = document.querySelector("textarea#html-textarea");
//             oldelem.innerHTML = transformedCodeText;
//         })
// }
//
// function transformCodeToHTML(textInput) {
//     // console.log(textInput);
//     textInput = textInput.replace(/&/g, '&amp;');
//     textInput = textInput.replace(/</g, '&lt;');
//     textInput = textInput.replace(/>/g, '&gt;');
//     // console.log(textInput);
//     const output = ` <pre><code>
//         ${textInput} </code></pre>`
//     // return output;
//     return textInput;
// }
//
// fetchCodeAndShow(link)
