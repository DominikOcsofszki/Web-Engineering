const nav= `
    <a href="/" class="here"><img width=100 src="/img/hbrs_logo.png" alt="Home"/></a>
    <a href="Aufgabe_1/Aufgabe_1.html" >Aufgabe_1</a>      
    <a href="/kontake.html" >Kontake</a>          
    <a href="/noten.html" >Noten</a>    
    <a href="/zeit.html" >Zeit</a>
` ;

    window.addEventListener('DOMContentLoaded', () => {
      let barnav = document.querySelector('nav[role="navigation"]');
      barnav.innerHTML = nav;
    });  //(*1)





























//(*1) https://gomakethings.com/ditching-jquery/#get-html-from-another-page
