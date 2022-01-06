const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.menu-btn');

navToggle.addEventListener('click', function () {
  const visibility = nav.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    document.body.style.overflow = 'hidden';
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'scroll';
  }
});
