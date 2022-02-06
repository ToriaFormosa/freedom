window.addEventListener('load', () => {
	const breakpoint = 640;
	const awardsCarouselEl = document.querySelector('.js-awards-carousel');
	let width = document.documentElement.clientWidth;
	let carousel = null;
	let isInit = false;

	if (awardsCarouselEl) {
		if (width < breakpoint) {
			initCarousel(awardsCarouselEl);
			isInit = true;
		}

		window.addEventListener('resize', () => {
			width = document.documentElement.clientWidth;

			if (width < breakpoint && !isInit) {
				initCarousel(awardsCarouselEl);
				isInit = true;
			} else if (width >= breakpoint && isInit) {
				carousel.destroy();
				isInit = false;
			}
		});

		function initCarousel(el) {
			carousel = new Swiper(el, {
				slidesPerView: 1.28,
				speed: 300,
				spaceBetween: 24,
				loop: true
			});
		}
	}
});