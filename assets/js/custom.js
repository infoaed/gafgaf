/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header_video = $('#header_video'),
		$video = $header_video[0],
		$video_wrapper = $('#video_wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Intro.
		var $intro = $('#intro');

		if ($intro.length > 0) {

			// Hack: Fix flex min-height on IE.
				if (browser.name == 'ie') {
					$window.on('resize.ie-intro-fix', function() {

						var h = $intro.height();

						if (h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);

					}).trigger('resize.ie-intro-fix');
				}

			// Hide intro on scroll (> small).
				breakpoints.on('>small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'bottom',
						top: '25vh',
						bottom: '-50vh',
						enter: function() {
							$intro.addClass('hidden');
							$video.pause();
						},
						leave: function() {
							$intro.removeClass('hidden');
							$video.play();
						}
					});

				});

			// Hide intro on scroll (<= small).
				breakpoints.on('<=small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'middle',
						top: '15vh',
						bottom: '-15vh',
						enter: function() {
							$intro.addClass('hidden');
							$video.pause();
						},
						leave: function() {
							$intro.removeClass('hidden');
							$video.play();
						}
					});
										
				});
		
			// Fade audio in and out on header click
				$(document).ready(function() { 
					
					$video_wrapper.click(function() { 
						
						if ($header_video.prop("muted")) {
							$header_video.prop("volume", 0);
							$header_video.prop("muted", false);
						}

						var volume = $header_video.prop("volume");
						if (volume < 0.1) {
							$header_video.animate({volume: 1.0}, 3333);
						} else {
							$header_video.animate({volume: 0}, 666);
						}
						
					}); 
					
				});

		}
		

})(jQuery);

