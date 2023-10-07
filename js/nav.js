const nav= `
<a href="/" class="here"><img width=100 src="/img/hbrs_logo.png" alt="Home"/></a>
<a href="Aufgabe_1/Aufgabe_1.html" >Aufgabe_1</a>      
<a href="/kontake.html" >Kontake</a>          
<a href="/noten.html" >Noten</a>    
<a href="/zeit.html" >Zeit</a>
` ;
// const foot= `
//     <mine id="footer"> <footer>
//     <p>© 2023 Dominik Ocsofszki</p>
//     </footer></mine>
// ` ;

const foot= `
    <footer>
    <p>© 2023 Dominik Ocsofszki</p>
    </footer>
` ;


window.addEventListener('DOMContentLoaded', () => {
    let barnav = document.querySelector('mine[role="navigation"]');
    barnav.innerHTML = nav;
});  //(*1)



window.addEventListener('DOMContentLoaded', () => {
    let barnav = document.querySelector('mine[role="foot"]');
    barnav.innerHTML = foot;
});  //(*1)

























//(*1) https://gomakethings.com/ditching-jquery/#get-html-from-another-page
