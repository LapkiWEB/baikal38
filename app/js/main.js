   $(function () {

     new WOW().init();

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
       prevArrow: document.querySelector('.slick-prev'),
       nextArrow: document.querySelector('.slick-next'),
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

     const anchors = document.querySelectorAll('a[href*="#"]')

     for (let anchor of anchors) {
       anchor.addEventListener("click", function (event) {
         event.preventDefault();
         const blockID = anchor.getAttribute('href')
         document.querySelector('' + blockID).scrollIntoView({
           behavior: "smooth",
           block: "start"
         })
       })
     }



     
   })