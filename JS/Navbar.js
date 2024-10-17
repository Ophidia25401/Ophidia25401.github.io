document.addEventListener('DOMContentLoaded', function() {
  // Fetch and insert the navbar
  fetch("NAVBAR/NAV.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("Nav_Bar").innerHTML = data;
      });

  // Handle the splash screen
  let splash_ran = localStorage.getItem('splashRan') === 'true';
  const splash = document.querySelector('.splash');

  if (!splash_ran) {
      // If splash hasn't run before, show it and set up the animation end listener
      splash.style.display = 'block'; // Ensure it's visible
      splash.addEventListener('animationend', () => {
          splash.style.display = 'none';
          localStorage.setItem('splashRan', 'true');
      });
  } else {
      // If splash has run before, remove it immediately
      splash.remove();
  }
});