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


     $('.excursion__slider-inner').slick({
       prevArrow: '<button class="slick-arrow slick-prev"><div class="hand"><img src="images/icons/slider-left.png" alt=""></div></button>',
       nextArrow: '<button class="slick-arrow slick-next"><div class="hand"><img src="images/icons/slider-right.png" alt=""></div></button>',
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       responsive: [{
           breakpoint: 1350,
           settings: {
             slidesToShow: 2,
           }
         },
         {
           breakpoint: 975,
           settings: {
             slidesToShow: 1,
           }
         },
         {
           breakpoint: 550,
           settings: {
             slidesToShow: 1,
           },
         },
       ]
     });

     $(".link-popup").magnificPopup();
   })