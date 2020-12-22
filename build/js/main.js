'use strict';

//var { default: Swiper } = require("swiper");

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

/* Слайдер проектов */
(function(){
	var mySwiper = new Swiper('.__js_slider-single', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		/*navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},*/

		// And if we need scrollbar
		/*scrollbar: {
			el: '.swiper-scrollbar',
		},*/
	});
})();

/* слайдер отзывов */

(function() {
	var mySwiper = new Swiper('.__js_testimonials-carousel', {
		slidesPerView: 'auto',
		spaceBetween: 60,
		loop: true,
		navigation: {
			nextEl: '.testimonials__nav-btn--next',
			prevEl: '.testimonials__nav-btn--prev',
		},
	});
})();

/* Карусель проектов */
(function(){
  //var carousel = $('.__js_slider-carousel');

  /*carousel.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		margin: 30,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300
	}); */

	var mySwiper = new Swiper('.__js_slider-carousel', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: false,

		// If we need pagination
		/*pagination: {
			el: '.swiper-pagination',
		},*/

		// Navigation arrows
		/*navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},*/

		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
})();

/* Слайдер новостей */
(function(){
	var sliderNews = new Swiper('.__js_slider-news', {
		pagination: {
			el: '.swiper-pagination',
		},
		loop: true,
		speed: 300
	});
})();

(function(){
	var sliderNews2 = new Swiper('.__js_slider-news-2', {
		slidesPerView: 1,
		loop: true,
		speed: 600,
		navigation: {
			prevEl: '.news-sb-slider__arrow--prev',
			nextEl: '.news-sb-slider__arrow--next'
		},
		breakpoints: {
			1560: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 2
			}
		}
	});
})();

(function(){
	var sliderNews3 = new Swiper('.__js_slider-news-3', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 300,
		loop: false,
		navigation: {
			prevEl: '.news-sb-page__related-arrow--prev',
			nextEl: '.news-sb-page__related-arrow--next'
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 50
			},
			768: {
				slidesPerView: 2
			}
		}
	});
})();

/* Анимация чисел */

(function() {// ToDo: сделать запуск анимации сразу после загрузки страницы если блок находитсяя на первом экране
  var statistics = $('.statistics');
  var numbers = $('.__js_number');
  var animationIsDone = false;

	if ($('*').is('.statistics')) {
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
	}


})();

/* Анимация блоков */

/*(function(){
  AOS.init({
    duration: 1000
  });
})();*/

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

/* mixitup filter */
(function() {
	/*var containerEl = document.querySelector('.__js_mixitup-container');
	var select = document.querySelector('.__js_mixitup-select');
	var mixer = mixitup(containerEl);

	select.onchange = function () {
		var value = select.value;
		console.log(value);

		if (value !== 'all') {
			mixer.filter('.__js_' + value);
		}
	};
})();
	};*/
})();

/* packery init */
(function() {
	var select = $('.__js_filter-select');
	var filterItem = $('.filter__item');
	var filterItemAll = $('.filter__item[data-filter="*"]');
	var filterActiveClass = 'filter__item--active';


	var grid = $('.__js_works-filter').isotope({
		itemSelector: '.works__item',
		layoutMode: 'packery',
		packery: {
			gutter: 0
		},
	});

	$('.masonry').isotope({
		itemSelector: '.masonry-item',
		layoutMode: 'packery'
	});

	select.on('change', function () {
		var value = select.val();
		var filterValue = value !== '*' ? '.__js_' + value : value;

		if (value !== '*') {
			var filterValue = '.__js_' + value;
			filterItem.removeClass(filterActiveClass);
		} else {
			filterItemAll.addClass(filterActiveClass);
			var filterValue = value;
		}

		grid.isotope({ filter: filterValue });
	});

	filterItem.on('click', function() {
		var filterValue = $(this).attr('data-filter');
		$(this).addClass(filterActiveClass).siblings().removeClass(filterActiveClass);
		grid.isotope({ filter: filterValue });
	});



})();

/* Паралакс фона при скролле */
(function() {
	var bg = $('.__js_bg-parallax-container');
	var bgInner = bg.find('.__js_bg-parallax-inner');

	if (bg.length) {
		var bgHeight = bg.innerHeight();
		var bgInnerHeight = bgInner.innerHeight();
		var bgOffset = bg.offset().top;
		var hideBgInnerHeight = bgInnerHeight - bgHeight;
		var halfWindowHeight = $(window).height() / 2;
		var ratio = hideBgInnerHeight / halfWindowHeight;

		$(window).on('resize', function() {
			bgHeight = bg.innerHeight();
			bgInnerHeight = bgInner.innerHeight();
			bgOffset = bg.offset().top;
			hideBgInnerHeight = bgInnerHeight - bgHeight;
			halfWindowHeight = $(window).height() / 2;
			ratio = hideBgInnerHeight / halfWindowHeight;
		});


		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
			var scrollPlusHalfWindowHeight = scroll + halfWindowHeight;

			if (scrollPlusHalfWindowHeight >= bgOffset && scroll <= bgOffset) {
				var difference = bgOffset - scrollPlusHalfWindowHeight;
				var shift = difference * ratio;
				bgInner.css('top', shift + 'px');
			}
		});
	}

})();

/* Анимация подвала */
/*(function() {

  $(window).on('load', function() {
    var footer = $('.footer');
    var footerHeight = footer.innerHeight();
    var footerOffset = footer.offset().top;

    footer.css('transform', 'translateY(-' + footerHeight +'px)');

    $(window).on('scroll', function() {
      var scroll = $(window).scrollTop() + $(window).height();
      var difference = scroll - footerOffset;

      //console.log(scroll);
      if(scroll > footerOffset) {

        var shift = difference - footerHeight;
        console.log(shift);
        footer.css('transform', 'translateY(' + shift +'px)');
      }
    });

    $(window).on('resize', function() {
      footerHeight = footer.innerHeight();
      footer.css('transform', 'translateY(-' + footerHeight +'px)');
    });
  });

})();*/

// Одинаковая высота у блоков в сетке
(function(){
	$(window).on('load', function () {
		setEqualHeight($('.article-list__list'));

		$(window).resize(function () {
			setEqualHeight($('.article-list__list'));
		});
	});

	function setEqualHeight(row) {
		if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
			row.each(function() {
				var tallestcolumn = 0;

				$(this).find('li').each(function () {
					var currentHeight = $(this).find('.article-preview__content').height();

					if (currentHeight > tallestcolumn) {
						tallestcolumn = currentHeight;
					}
				});

				$(this).find('.article-preview__content').height(tallestcolumn);
			});
		} else {
			$('.article-preview__content').removeAttr('style');
		}
	}
})();
