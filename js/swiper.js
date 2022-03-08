// swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay:5000,
    },
    direction: 'horizontal',
    effect: 'slide',
    loop: true,
  
    // If we need pagination
    // 하단 버튼 UI
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });