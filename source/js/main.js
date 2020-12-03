'use strict';
var body = $('body');
var DURATION = 300;
/* Menu */

(function() {
  var menuOpenBtn = $('.menu-toggle');
  var menuCloseBtn = $('.menu__close');
  var menu = $('.menu');

  var ModifierClass = {
    MENU: 'menu--opened',
    TOGGLE: 'menu-toggle--opened'
  };

  menu.on('click', function(evt) {
    evt.stopPropagation();
  })

  menuOpenBtn.on('click', function() {
    menuCloseBtn.on('click', closeMenu);

    menuOpenBtn.addClass(ModifierClass.TOGGLE);

    setTimeout(function() {
      menu.addClass(ModifierClass.MENU);
    }, DURATION + 50);
  });

  function closeMenu() {
    menuCloseBtn.off('click', closeMenu);
    menu.removeClass(ModifierClass.MENU);

    setTimeout(function() {
      menuOpenBtn.removeClass(ModifierClass.TOGGLE);
    }, DURATION + 50);
  }

})();

/* Слайдер проектов на главной */
(function(){
  var slider = $('.__js_latest-projects--single');

  slider.slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300
  });
})();

/* Анимация чисел */

(function() {
  var statistics = $('.statistics');
  var numbers = $('.__js_number');
  var animationIsDone = false;
  var offset = statistics.offset().top;

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop() + $(window).height();

    if (!animationIsDone && scroll >= offset) {
      numbers.each(function() {
        var endValue = parseInt($(this).attr('data-end-value'), 10);

        $(this).easy_number_animate({
          start_value: 0,
          end_value: endValue,
          duration: 2500
        });

      });

      animationIsDone = true;
    }
  });
})();
