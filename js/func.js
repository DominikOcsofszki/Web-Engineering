

const generate=`
<mine role="nav"></mine>
<mine role="headline"></mine>
<mine role="generate"></mine>

<mine role="foot"></mine>
`



const nav= `
<a href="/" class="here"><img width=100 src="/img/hbrs_logo.png" alt="Home"/></a>
<a href="/Aufgaben/Aufgabe_1/src/Aufgabe_1.html" >Aufgabe_1</a>      
<a href="/Aufgaben/Aufgabe_2/src/Aufgabe_2.html" >Aufgabe_2</a>      
<a href="/kontake.html" >Kontake</a>          
<a href="/noten.html" >Noten</a>    
<a href="/zeit.html" >Zeit</a>
` ;

const footold= `
<footer>
<p><a  href="/index.html"> home </a>
© 2023 Dominik Ocsofszki</p> 
</footer>
` ;

const foot= `
<footer>
<p><a  href="/index.html"> home </a>
© 2023 Dominik Ocsofszki 
<a href="/Aufgaben/Aufgabe_1/src/Aufgabe_1.html.html" > show code</a>
</p> 
</footer>
` ;


const headline=`<h1 style="text-align:center;"> 
Einführung in Web Engineering 
<h1/>`;


function insertHTML(name,roleName) {
    window.addEventListener('DOMContentLoaded', () => {
	let bla = 'mine[role='+roleName+']'
	let barnav = document.querySelector(bla);
	barnav.innerHTML = name;
    }); 
}
function insertAll() {
    insertHTML(generate, "generate")
    insertHTML(foot, "foot");
    insertHTML(nav, "nav");
    insertHTML(headline, "headline");
}


insertAll()
