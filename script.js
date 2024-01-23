const navbar = document.getElementById('navbar');
const links = navbar.querySelectorAll('a');

navbar.addEventListener('mouseenter', function () {
    const longestEntry = getLongestMenuEntryWidth(links);
    navbar.style.width = `${longestEntry}px`;
});

navbar.addEventListener('mouseleave', function () {
    navbar.style.width = '';
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