
fetch('https://example.com/page.html')
  .then(response => response.text()) 
  .then(html => {
    let parser = new DOMParser(); 
    let doc = parser.parseFromString(html, 'text/html'); 

    
    let scripts = doc.getElementsByTagName('script');
    for (let script of scripts) {
      let scriptElement = document.createElement('script'); 
      scriptElement.textContent = script.textContent; 
      document.body.appendChild(scriptElement); 
    }
  })
  .catch(error => console.error('Error:', error)); 
