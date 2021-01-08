'use strict';

var body = $('body');
var DURATION = 300;
var preloader = $('.preloader');
var header = $('.header');
var anAwards = $('.an-awards');


function setOverlay(cb) {
	var overlay = $('<div class="overlay"></div>');
	overlay.on('click', cb);
	return overlay;
}

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
  });

  menuOpenBtn.on('click', function() {
		var overlay = setOverlay(closeMenu);//
		body.append(overlay);

    menuCloseBtn.on('click', closeMenu);
    menuOpenBtn.addClass(ModifierClass.TOGGLE);

    setTimeout(function() {
			overlay.fadeIn(DURATION);

      menu.addClass(ModifierClass.MENU);
    }, DURATION + 50);
  });

  function closeMenu() {
    menuCloseBtn.off('click', closeMenu);
		menu.removeClass(ModifierClass.MENU);
		var overlay = $('.overlay').fadeOut(DURATION);

    setTimeout(function() {
			menuOpenBtn.removeClass(ModifierClass.TOGGLE);
			overlay.remove();
    }, DURATION + 50);
  }
})();

/* Меню 2 */
(function() {
	var toggleBtn = $('.header-toggle');
	var header = $('.header--aside');

	toggleBtn.on('click', function() {

		if($(this).hasClass('on')) {
			close();
		} else {
			var overlay = setOverlay(close);
			body.append(overlay);

			$(this).removeClass('off').addClass('on');

			setTimeout(function() {
				overlay.fadeIn(DURATION);
				header.addClass('header--opened');
			}, 500);
		}
	});

	function close() {
		var overlay = $('.overlay');

		toggleBtn.addClass('off').removeClass('on');

		setTimeout(function() {
			overlay.fadeOut(DURATION);
			header.removeClass('header--opened');

			setTimeout(function() {
				overlay.remove();
			}, DURATION)


		}, 500);
	}

	$(window).on('resize', function() {
		if ($(window).width() >= 1200) {
			close();
		}
	});
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

	var thumbsForLatestProjects = new Swiper('.__js_slider-thumbs', {
		slidesPerView: 3,
		loop: false,
		freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
    }
  }
	});

	var latestProjectsSlider = new Swiper('.__js_slider-simple', {
		slidesPerView: 1,
		loop: false,
		thumbs: {
      swiper: thumbsForLatestProjects,
		},
		navigation: {
			nextEl: '.slider__nav-btn--next',
			prevEl: '.slider__nav-btn--prev',
		}
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

(function(){
	var sliderSingle2 = new Swiper('.__js_slider-single-2', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: false,
		navigation: {
			prevEl: '.works-arrow--prev',
			nextEl: '.works-arrow--next'
		},
		pagination: {
			el: '.slide-counter-2',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					'<span class="' + totalClass + '"></span>';
			}
		}
	});
})();

/* Карусель проектов */
(function(){
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


	var modernCarousel = new Swiper('.__js_slider-carousel-double', {
		slidesPerView: 1,
		loop: false,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 70,
			},
		},

		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		/*navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},*/

	});
})();

/* слайдер первого экрана */
(function() {
	var mySwiper = new Swiper('.__js_hero-banner', {
		slidesPerView: 1,
		loop: false,

		pagination: {
			el: '.swiper-pagination',
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
			prevEl: '.arrow-square--prev',
			nextEl: '.arrow-square--next'
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

/* Прокрутка к следующей секции */
(function() {
	var scrollToBtn = $('.__js_to-next-section');

	if(scrollToBtn.length) {
		scrollToBtn.on('click', function(evt) {
			evt.preventDefault();
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;

			$('html').animate({ scrollTop: destination }, 1100); //1100 - скорость
		});
	}
})();

/* Модальное окно с формой на странице контактов */
(function() {
	var openContactsModalBtn = $('.__js_open-contacts-modal');
	var contactsModal = $('.contacts__modal');
	var closeContactsModalBtn = contactsModal.find('.contacts__modal-close');

	openContactsModalBtn.on('click', function(evt) {
		evt.preventDefault();

		contactsModal.fadeIn(DURATION);
		closeContactsModalBtn.on('click', closeModal);
	});

	function closeModal() {
		contactsModal.fadeOut(DURATION);
		//closeContactsModalBtn.oFF('click', closeModal);
	}
})();

// Слайдер тарифов
(function(){
	var optionsTariff = {
		slidesPerView: 1,
		spaceBetween: 10,
		initialSlide: 1,
		speed: 300,
		loop: false,
		centeredSlides: true,
		centeredSlidesBounds: true,
	};

	var priceList = undefined;

	if ($('.__js_slider-price').length > 0) {
		$(window).resize(function () {
			initPriceSlider();
		});
	}

	initPriceSlider();

	function initPriceSlider() {
		if (window.matchMedia('(max-width: 1199px)').matches && priceList == undefined) {
			var slider = $('.pricing__slider-container');

			priceList = new Swiper('.__js_slider-price', optionsTariff);

			priceList.on('slideChange', function () {
				priceList.activeIndex === 0 ? slider.addClass('hide-left') : slider.removeClass('hide-left');
				priceList.activeIndex === priceList.slides.length - 1 ? slider.addClass('hide-right') : slider.removeClass('hide-right');
			});
		} else if (window.matchMedia('(min-width: 1200px)').matches && priceList != undefined) {
			priceList.destroy();
			priceList = undefined;
		}
	}
})();

// Слайдер an-awards
(function(){
	var sliderNews4 = new Swiper('.__js_slider-awards', {
		slidesPerView: 1,
		speed: 300,
		loop: true,
		navigation: {
			prevEl: '.arrow-square--prev',
			nextEl: '.arrow-square--next'
		},
		pagination: {
			el: '.slide-counter',
			type: 'fraction',
		},
	});
})();

/* круговая диаграмма */
(function(){
	var diagrams = document.querySelectorAll('.__js_diagram');
	var specialization = document.querySelector('.specialization');
	var windowHeight = window.innerHeight;
	var animationDone = false;

	if (diagrams && specialization) {
		diagrams.forEach(function(item) {
			var progress = item.querySelector('.diagram__circle--progress');
			var progresslength = Math.round(progress.getTotalLength());
			progress.setAttribute('stroke-dasharray', '0 ' + progresslength);
		});

		window.onscroll = function () {
			var offset = specialization.getBoundingClientRect().top;

			if (offset <= windowHeight && !animationDone) {
				diagrams.forEach(function(item) {
					var progress = item.querySelector('.diagram__circle--progress');
					var progresslength = Math.round(progress.getTotalLength());
					var percent = item.querySelector('.diagram__percent').textContent;
					var percentValue = parseFloat(percent, 10);
					var progressFill = percentValue * progresslength / 100;
					progress.style.strokeDasharray = progressFill + ' ' + progresslength;
				});

				animationDone = true;
			}
		}
	}
})();

/* Анимация чисел */
(function() {
  var statistics = $('.statistics');
  var numbers = $('.__js_number');
	var animationIsDone = false;
	var scroll = $(window).scrollTop() + $(window).height();

	if ($('*').is('.statistics')) {
		var offset = statistics.offset().top;

		if (!animationIsDone && scroll >= offset) {
			animateNumbers();
		}

		$(window).on('scroll', function() {
			scroll = $(window).scrollTop() + $(window).height();

			if (!animationIsDone && scroll >= offset) {
				animateNumbers();
			}
		});
	}

	function animateNumbers() {
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

      var overlay = setOverlay(closeModal);
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

	setTimeout(function () {
		$('.masonry').isotope({
			itemSelector: '.masonry-item',
			layoutMode: 'packery'
		});
	}, 100);

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

// homepage fullpages
(function(){
	if (window.matchMedia("(min-width: 992px) and (min-height: 550px)").matches) {
		initFullPage();
	}

	// Рассчитываем высоту блоков
	var block = $('.dark'),
			top = [],
			bottom = [];

	block.each(function () {
		top.push($(this).offset().top);
		bottom.push($(this).offset().top + $(this).outerHeight());
	});

	// Меняем цвет хэдера и футера при скролле на малых разрешениях
	$(window).scroll(function () {
		if (window.matchMedia("(max-width: 991px)").matches) {
			var scroll = $(this).scrollTop(),
					isDark = false;

			$.each(top, function (i, val) {
				if (scroll >= val && scroll <= bottom[i]) {
					isDark = true;
				}
			});

			if (isDark) {
				setDark();
			} else {
				removeDark();
			}

			if (scroll > 0 && isDark) {
				$('.header-3').removeClass('bg-dark').addClass('bg-light');
				$('.footer-3').removeClass('bg-dark').addClass('bg-light');
			} else if (scroll > 0 && !isDark) {
				$('.header-3').removeClass('bg-light').addClass('bg-dark');
				$('.footer-3').removeClass('bg-light').addClass('bg-dark');
			} else if (scroll == 0) {
				$('.header-3').removeClass('bg-light bg-dark');
				$('.footer-3').removeClass('bg-light bg-dark');
			}
		}
	});

	$(window).resize(function () {
		if (window.matchMedia("(min-width: 992px) and (min-height: 550px)").matches) {
			if ((!$('#fullpage').hasClass('fullpage-wrapper')) || $('#fullpage').hasClass('fp-destroyed')) {
				initFullPage();
			}
		} else {
			if ($('#fullpage').hasClass('fullpage-wrapper')) {
				$.fn.fullpage.destroy('all');
			}
		}
	});

	function initFullPage() {
		if ($('#fullpage') && $('#fullpage').length > 0) {
			$('#fullpage').fullpage({
				licenseKey: 'KEY',
				navigation: true,
				navigationTooltips: false,
				afterLoad: function (origin, destination, direction) {
					var current = $(destination["item"]);
					if (current.hasClass('dark')) {
						setDark();
					} else {
						removeDark();
					}
				}
			});
		}
	}

	function setDark() {
		$('.header-3').addClass('header-3--dark');
		$('.footer-3').addClass('footer-3--dark');
		$('#fp-nav').addClass('dark');
	}

	function removeDark() {
		$('.header-3').removeClass('header-3--dark');
		$('.footer-3').removeClass('footer-3--dark');
		$('#fp-nav').removeClass('dark');
	}
})();
