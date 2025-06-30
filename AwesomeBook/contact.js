fetch('/navbar.html').then(res=>res.text())
.then(getplainHtml=>document.getElementById('navbar').innerHTML=getplainHtml)
.catch(error => console.log("Navbar loading failed",error));
