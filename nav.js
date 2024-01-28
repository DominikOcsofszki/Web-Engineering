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

    navbar.addEventListener('mouseenter', function () {
        navbar.style.width = `${longestEntry + 5}px`;
        navbar.style.transition = 'width 0.2s ease-in-out';
        links.forEach(link => {
            link.style.opacity = '1';
        });
    });


    navbar.addEventListener('mouseleave', function () {
        navbar.style.width = '0px';
        links.forEach(link => {
            link.style.opacity = '0';
        });
    });

    function getLongestMenuEntryWidth(links) {
        console.log(links);
        let maxWidth = 0;
        links.forEach(link => {
            const width = link.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });
        return maxWidth;
    }

}
