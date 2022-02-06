$(window).on('load', function () {
	let passSwitcher = $('.field__pass-switcher');

	passSwitcher.on('click', function () {
		let input = $(this).prev();
		if (input.attr('type') === 'password') {
			$(this).addClass('open');
			input.attr('type', 'text');
		} else {
			$(this).removeClass('open');
			input.attr('type', 'password');
		}
		return false;
	})
})