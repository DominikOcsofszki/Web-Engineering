fetch('/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
        setUpNavFunctions();
    })


function setUpNavFunctions() {
    const toggleButton = document.getElementById('toggle-button');
    const navbar = document.getElementById('navbar');
    // navbar.addEventListener('mouseenter', openNav);
    const links = navbar.querySelectorAll('a');
    const longestEntry = getLongestMenuEntryWidth(links);


    const logo = document.getElementById('logo-svg');

    navbar.style.transition = 'width 0.2s ease-in-out';
    navbar.addEventListener('mouseenter', function() {
        navbar.style.width = `250px`;

        // navbar.style.width = `${longestEntry + 5}px`;
        links.forEach(link => {
            link.style.opacity = '1';
        });
        logo.style.opacity = '0.1';
        logo.style.transform = 'translateX(0%)';
        logo.style.transform = "scale(2.0)";

    });
    // #logo-svg {
    //  opacity: 1;
    //  z-index: -1;
    //  position:absolute;
    //  width: 100px;
    //  height: 100px;
    //  /* transform: scale(0.1); */
    //  right: 0;
    //  top:0;
    // }
    //
    navbar.addEventListener('mouseleave', function() {
        navbar.style.width = '1px';
        links.forEach(link => {
            link.style.opacity = '0';
        });
        logo.style.opacity = '1';
        // logo.style.transform = 'translateX(1000%)';
               logo.style.animationName= example; 


    });

    function getLongestMenuEntryWidth(links) {
        let maxWidth = 0;
        links.forEach(link => {
            const width = link.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });
        console.log(maxWidth)
        return maxWidth;
    }

}
