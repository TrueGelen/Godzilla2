import Rellax from 'rellax'

window.addEventListener('load', () => {
	new Rellax('.rellaxHelicopters', {
		speed: (window.innerWidth > 768) ? 6 :
			(window.innerWidth > 560) ? 3 : 2,
		// speed: 6,
		center: true,
		round: true,
		vertical: true,
		horizontal: false
	})
})