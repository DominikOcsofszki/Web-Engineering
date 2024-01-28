fetch('/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
        setUpNav();
    })

function setUpNav() {
    const toggleButton = document.getElementById('toggle-button');
    const navbar = document.getElementById('navbar');
    // navbar.addEventListener('mouseenter', openNav);
    const links = navbar.querySelectorAll('a');

    navbar.addEventListener('mouseenter', function () {
        const longestEntry = getLongestMenuEntryWidth(links);
        navbar.style.width = `${longestEntry}px`;
    });

    navbar.addEventListener('mouseleave', function () {
        navbar.style.width = '0px';
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
