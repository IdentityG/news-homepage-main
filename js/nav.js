const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', (e) => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === "false") {
    navList.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    console.log(visibility)
  } else if (visibility === "true") {
    navList.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
