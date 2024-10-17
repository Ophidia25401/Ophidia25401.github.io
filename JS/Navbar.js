document.addEventListener('DOMContentLoaded'
, function() {
    fetch("NAVBAR/NAV.html")
    .then(Response => Response.text())
    .then(data => {
     document.getElementById("Nav_Bar").innerHTML = data; 
    });
});

let splash_ran = localStorage.getItem("splashran") === "true";

if (!splash_ran){
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash');
    
    splash.addEventListener('animationend', () => {
      splash.style.display = 'none';
      localStorage.setItem("splashran","true");
    
    });
  });
  }