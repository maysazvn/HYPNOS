document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navLinks = document.getElementById("navLinks");

  /* Desabilitar click menu
  const links = document.querySelectorAll(".navLinks a");
  for(i=0; i<links.length; i++){
    links[i].addEventListener("click", function(evt){
      evt.preventDefault();
    });
  }
  */

  

  menu.addEventListener("click", function(evt){
    navLinks.classList.toggle("active");

    const icon = menu.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

  });
});