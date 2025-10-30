document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navLinks = document.getElementById("navLinks");

  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menu.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
});