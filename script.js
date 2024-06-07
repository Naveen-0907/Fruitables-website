window.onscroll = function() {
  stickyNavbar();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}

// Toggle menu function for small screens
function toggleMenu() {
  const navbarCollapse = document.getElementById("navbarCollapse");
  if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      
  } else {
      navbarCollapse.classList.add("show");
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}