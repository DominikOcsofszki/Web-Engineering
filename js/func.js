
const nav= `
<a href="/" class="here"><img width=100 src="/img/hbrs_logo.png" alt="Home"/></a>
<a href="Aufgabe_1/Aufgabe_1.html" >Aufgabe_1</a>      
<a href="/kontake.html" >Kontake</a>          
<a href="/noten.html" >Noten</a>    
<a href="/zeit.html" >Zeit</a>
` ;

const foot= `
    <footer>
    <p>© 2023 Dominik Ocsofszki</p>
    </footer>
` ;


// window.addEventListener('DOMContentLoaded', () => {
//     let barnav = document.querySelector('mine[role="nav"]');
//     barnav.innerHTML = nav;
// });



// window.addEventListener('DOMContentLoaded', () => {
//     let barnav = document.querySelector('mine[role="foot"]');
//     barnav.innerHTML = foot;
// }); 
//
function insertHTML(name,roleName) {

window.addEventListener('DOMContentLoaded', () => {
        let bla = 'mine[role='+roleName+']'
    let barnav = document.querySelector(bla);
    // let barnav = document.querySelector('mine[role=foot]');
    barnav.innerHTML = name;
}); 

}
 insertHTML(foot, "foot");
 insertHTML(nav, "nav");