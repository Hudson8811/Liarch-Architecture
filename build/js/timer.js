// Таймер
(function ($) {
	(function ($) {
		var minutes = 60;

		$.fn.countdown = function (prop) {
			var options = $.extend({
				callback: function () {},
				timestamp: 0
			}, prop);

			var left, m, s;

			(function tick() {
				// time left
				left = Math.floor((options.timestamp - (new Date())) / 1000);

				if (left < 0) {
					left = 0;
				}

				// minutes left
				m = Math.floor(left / minutes);
				left -= m * minutes;

				// seconds left
				s = left;

				options.callback(m, s);

				setTimeout(tick, 1000);
			})();

			return this;
		};
	})(jQuery);

	var countdown1 = $('[data-time-out]');
	countdown1.each(function(){
		var thisCD = $(this),
			ts = new Date(thisCD.attr('data-time-out'));
		if ((new Date()) > ts) {
			ts = (new Date()).getTime() + 30 * 60 * 1000;
		}

		thisCD.countdown({
			timestamp: ts,
			callback: function (minutes, seconds) {
				thisCD.find('.js-stock-countdown-m').html(minutes.toString().padStart(2,0));
				thisCD.find('.js-stock-countdown-s').html(seconds.toString().padStart(2,0));
			}
		});
	});
})(jQuery);
