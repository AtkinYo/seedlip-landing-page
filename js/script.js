let mobileMenuBtn = $('.hamburger-menu-btn');
let navCartBtn = $('.cart-btn');

/* Hamburger Menu Toggle */

function mobileMenu() {
  const mobileNav = $('.mobile-navbar');

  if (mobileNav) {
    mobileNav.toggleClass('mobile-navbar-reveal');
    $('body').toggleClass('overflow-hidden');
  }
}

/* Navbar Scroll Animation */
window.addEventListener('scroll', () => {
  let scrollPosition = 38;

  let navLogo = $('.nav-logo');
  let mobileNavbarBg = $('nav');

  if (window.scrollY < scrollPosition) {
    navLogo.removeClass('nav-logo-reveal');
    mobileNavbarBg.removeClass('mobile-navbar-bg');
    mobileMenuBtn.removeClass('mobile-nav-color');
    navCartBtn.removeClass('mobile-nav-color');
  } else {
    navLogo.addClass('nav-logo-reveal');
    mobileNavbarBg.addClass('mobile-navbar-bg');
    mobileMenuBtn.addClass('mobile-nav-color');
    navCartBtn.addClass('mobile-nav-color');
  }
});
