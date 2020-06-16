
import { Swiper, Pagination, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Pagination, Navigation]);

	const slider = new Swiper('.slider .container .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination_block',
			type: 'bullets'
		},
		navigation: {
			prevEl: '.slider .container .slider__wrapperSwiper .slider__buttons .slider__btn_left',
			nextEl: '.slider .container .slider__wrapperSwiper .slider__buttons .slider__btn_right',
		}
	})

	const videos = document.querySelectorAll('.slider .container .slider__wrapperSwiper .slider__swiper-container .swiper-wrapper video')

	slider.on('slideChange', pauseVideo)
	/* 	const buttons = document.querySelectorAll('.slider .container .slider__wrapperSwiper .slider__buttons img');
	
		[...buttons].forEach(btn => {
			btn.addEventListener('click', () => {
				pauseVideo()
			})
		}) */

	function pauseVideo() {
		[...videos].forEach(video => {
			video.pause()
			// video.classList.contains('swiper-slide-active') ? false : video.pause()
		})
	}

})


