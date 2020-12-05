'use strict';
var body = $('body');
var DURATION = 300;
var preloader = $('.preloader');
var header = $('.header');
var anAwards = $('.an-awards');

/* Preloader */
(function(){
 $(window).on('load', function () {
    preloader.delay(350).fadeOut('slow');

    AOS.init({
      duration: 1000
    });
  });
})();

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

/* Анимация блоков */

(function(){
  AOS.init({
    duration: 1000
  });
})();

(function(){
  var openModalBtns = $('.__js_open-modal');
  var modal;
  var modalCloseBtn;

  openModalBtns.each(function() {

    $(this).on('click', function(evt) {
      evt.preventDefault();
      var target = $(this).attr('href');
      modal = $(target);

      var overlay = setOverlay();
      body.append(overlay);
      overlay.fadeIn(DURATION);

      modalCloseBtn = modal.find('.modal__close');
      modalCloseBtn.on('click', closeModal);

      modal.delay(DURATION).fadeIn(DURATION);
    });

  });
/*
  openModalBtns.forEach(btn => {
    btn.onclick = evt => {
      evt.preventDefault();

      modal.style.display = 'block';
      setTimeout(() => {
        modal.style.opacity = 1;
      }, 50);
      document.body.appendChild(setOverlay());
      closeBtn.onclick = closeModal;
    };
  });*/

/*
		function closeModal() {
			let overlay = document.querySelector('.' + overlayClass);
			modal.style.opacity = 0;

			setTimeout(() => {
				modal.style.cssText = 'display: none;';
				document.body.removeChild(overlay);
			}, 450);
    }*/

    function closeModal() {
      var overlay = $('.overlay');
      modalCloseBtn.off('click', closeModal);
      modal.fadeOut(DURATION);
      overlay.delay(DURATION).fadeOut(DURATION);

      setTimeout(function() {
        overlay.remove()
      }, DURATION * 2 + 50);

    }

    function setOverlay() {
      var overlay = $('<div class="overlay"></div>');
      overlay.on('click', closeModal);
      return overlay;
    }
})();
