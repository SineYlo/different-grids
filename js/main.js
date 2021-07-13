document.addEventListener('DOMContentLoaded', function() {

  // Swiper
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'clip',

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
})
