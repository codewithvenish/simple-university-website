// Hamburger Menu Toggle
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right="0px";
}
function hideMenu(){
    navLinks.style.right="-500px";
}

// Back to top icon
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  
      document.querySelector('.back-to-top').style.display = 'block';
    } else {
      document.querySelector('.back-to-top').style.display = 'none';
    }
  }