document.addEventListener('DOMContentLoaded'
, function() {
    fetch("NAVBAR/NAV.html")
    .then(Response => Response.text())
    .then(data => {
     document.getElementById("Nav_Bar").innerHTML = data; 
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash');
    
    splash.addEventListener('animationend', () => {
      splash.style.display = 'none';
    
    });
  });