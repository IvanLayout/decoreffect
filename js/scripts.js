// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

// $(() => {
// 	if ($('.portfolio__slider').length) {
// 		new Swiper(".portfolio__slider", {
// 			loop: true,
// 			spaceBetween: 20,
// 			slidesPerView: 'auto',
// 			allowTouchMove: false,
// 			speed: 6000,
// 			preloadImages: false,
// 			lazy: {
// 				loadPrevNext: true,
// 				elementClass: 'lazyload',
// 				enabled: true,
// 				loadedClass: 'loaded',
// 				checkInView: true,
// 				loadOnTransitionStart: true
// 			},
// 			autoplay: {
// 				delay: 0,
// 				disableOnInteraction: false,
// 				pauseOnMouseEnter: true,
// 			},breakpoints: {
// 				'320': {
// 					spaceBetween: 15,
// 					slidesPerView: 2,
// 				},
// 				'480': {
// 					spaceBetween: 15,
// 					slidesPerView: 2,
// 				},
// 				'768': {
// 					spaceBetween: 15,
// 					slidesPerView: 3,
// 				},
// 				'1024': {
// 					spaceBetween: 15,
// 					slidesPerView: 4,
// 				},
// 				'1400': {
// 					spaceBetween: 20,
// 					slidesPerView: 4,
// 				}
// 			},
// 		})
// 	}

// });


$(() => {
	if ($('.portfolio__slider').length) {
		const swiper = new Swiper(".portfolio__slider", {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 'auto',
		allowTouchMove: false,
		speed: 6000,
		preloadImages: false,
		lazy: {
			loadPrevNext: true,
			elementClass: 'lazyload',
			enabled: true,
			loadedClass: 'loaded',
			checkInView: true,
			loadOnTransitionStart: true
		},
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		breakpoints: {
			'320': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 15,
					slidesPerView: 4,
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 4,
				}
		}
		});

	  // Мгновенная пауза при наведении
		$('.portfolio__slider').on('mouseenter', () => {
			swiper.autoplay.stop();
		});
		$('.portfolio__slider').on('mouseleave', () => {
			swiper.autoplay.start();
		});
	}


	$(function() {
		$('.marquee-content').marquee();
	});
});




$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
});