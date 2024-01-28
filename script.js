

// const navbar = document.getElementById('navbar');
// navbar.style.width = '0px';

// const toggleButton = document.getElementById('toggle-button');
document.getElementById('toggle-button').addEventListener('click', function () {
    console.log("toggle");
})
// function toggleNav() {
//     console.log("toggleNav");
// }
//
// toggleButton.addEventListener('click', toggleNav);

// navbar.addEventListener('mouseenter', openNav);
// console.log("navbar");
//     function openNav() {
//         console.log("openNav");
//         navbar.style.width = "10000px";
//     }

// const navbar = document.getElementById('navbar');
// // const navbar = document.getElementsByClassName('sidenav');
// const links = navbar.querySelectorAll('a');
//
// navbar.addEventListener('mouseenter', function () {
//     // const longestEntry = getLongestMenuEntryWidth(links);
//     // navbar.style.width = `${longestEntry}px`;
//     navbar.style.width = `1000px`;
// });
//
// navbar.addEventListener('mouseleave', function () {
//     navbar.style.width = '0px';
// });
// // function openNav() {
// //     document.getElementById("mySidenav").style.width = "250px";
// // }
// //

//
// function getLongestMenuEntryWidth(links) {
//     console.log(links);
//     let maxWidth = 0;
//     links.forEach(link => {
//         const width = link.offsetWidth;
//         if (width > maxWidth) {
//             maxWidth = width;
//         }
//     });
//     return maxWidth;
// }