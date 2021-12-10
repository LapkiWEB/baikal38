   $(function () {

     $('.menu__btn').on('click', (function () {
       if (!$('.header__inner').hasClass('openDone')) {
         $('.header__inner').addClass('openDone');
       } else {
         $('.header__inner').removeClass('openDone');
       }
       if (!$('.menu__btn').hasClass('active')) {
         $('.menu__btn').addClass('active');
       } else {
         $('.menu__btn').removeClass('active');
       }
     }));
   })