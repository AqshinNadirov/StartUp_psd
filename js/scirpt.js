window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__text'),
    menuItem = document.querySelectorAll('.header__text_active'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__text_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__text_active');
        })
    })
})



$(document).ready(function(){
    $('.about__img_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
         ]
    });

    $('.works__subtitle, .read__more').on('click', function (e) {
      e.preventDefault(); // Default Browser 
  });
  });
          