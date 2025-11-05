const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// initilizing Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        e1: '.swipper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navgation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },

   breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 1
    },
    1024: {
        slidesPerView: 1
    }
   }
});
// ===== Fade-in Animation on Scroll =====
const reviewCards = document.querySelectorAll('.review-card');

window.addEventListener('scroll', () => {
  reviewCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});
