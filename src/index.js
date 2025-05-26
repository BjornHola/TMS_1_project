const quoteSwiper = new Swiper('.swiper', {
loop: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 40
    }
 } 
})

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.style.display = 'flex';
  });
});
