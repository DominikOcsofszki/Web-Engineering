window.addEventListener('DOMContentLoaded', () => {
    const navItems = document.getElementById('navItems');
    const path = window.location.pathname;
    const pathFolder = path.split('/').slice(0, -1).join('/') + '/';
    console.log('pathFolder: ', pathFolder);
    // const folderPath = '/Aufgaben/Aufgabe_7/';
    // console.log('path: ', path);
    // Fetch the list of files in the folder
    // fetch(folderPath)
    fetch(pathFolder)
        .then(response => response.text())
        .then(data => {
            // Parse the file names from the response
            const fileNames = data.split('\n');
            console.log('fileNames: ', fileNames);
            // Create navigation items for each file
            fileNames.forEach(fileName => {
                if (fileName.trim() !== '' && fileName.trim().includes('href')) {
                    console.log('fileName: ', fileName);
                    const myLink = fileName.trim().split('href="')[1].split('"')[0];
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = myLink
                    // link.textContent = fileName;
                    link.textContent = myLink;
                    listItem.appendChild(link);
                    navItems.appendChild(listItem);
                }
            });
        })

});