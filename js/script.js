/* Hamburger Menu Toggle */
const mobileMenuBtn = $('.hamburger-menu-btn');
const navCartBtn = $('.cart-btn');

function mobileMenu() {
  const scrollPosition = 38;

  const mobileNav = $('.mobile-navbar');

  if (mobileNav) {
    mobileNav.toggleClass('mobile-navbar-reveal');
    $('body').toggleClass('overflow-hidden');
  }
}

/* Navbar Scroll Animation */
window.addEventListener('scroll', () => {
  const scrollPosition = 38;

  const navLogo = $('.nav-logo');
  const mobileNavbarBg = $('nav');

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

/* Swiper JS Plugin */

const productSwiper = new Swiper('.product__container__swiper', {
  // Optional parameters
  loop: true,
});

const ingredientSwiper = new Swiper('.ingredients__container__swiper', {
  grabCursor: true,
  effect: 'creative',
  loop: true,

  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-120%', 0, -500],
    },
    next: {
      shadow: true,
      translate: ['120%', 0, -500],
    },
  },
});

const spanBtn = $('.ingredients-btn-span');

const hover = () => {
  spanBtn.addClass('grow');
};

const leave = () => {
  spanBtn.removeClass('grow');
};

new Splide('.splide', {
  perPage: 3,
  rewind: true,
  width: 1000,

  breakpoints: {
    768: {
      perPage: 2,
      width: 768,
    },
    525: {
      perPage: 1,
      width: 330,
    },
  },
}).mount();
