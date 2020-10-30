const swiper = new Swiper('.swiper-container', {    
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    parallax: true,
    speed: 1200,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });