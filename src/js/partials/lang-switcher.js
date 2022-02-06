window.addEventListener('load', () => {
	const parent = document.querySelector('.lang-switcher');
	let icon = document.querySelector('.lang-switcher__flag use');

	parent.addEventListener('change', (e) => {
		icon.setAttribute('xlink:href', `./images/sprite.svg#${e.target.value}`)
	});
});