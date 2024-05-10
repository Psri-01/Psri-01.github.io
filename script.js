const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section"); // Assuming all your sections have the class "section"

window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 100) {
    navbar.classList.add('navbarLight');
  } else {
    navbar.classList.remove('navbarLight');
  }
}

sections.forEach(section => {
  section.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.collapse');
    // Use Bootstrap's collapse toggle method instead of directly manipulating classes
    navbarCollapse.bsCollapse('hide'); 
  });
});
