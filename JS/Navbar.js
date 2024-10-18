document.addEventListener('DOMContentLoaded', function() {
  fetch("NAVBAR/NAV.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("Nav_Bar").innerHTML = data;
  });



});