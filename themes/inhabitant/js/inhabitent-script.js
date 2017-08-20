(function($){

	$('.icon-search').on('click', function() {
		event.preventDefault();
		$('.search-form').toggleClass('search-form-click');
		$('.search-field').focus();
		$('.menu-item-217').toggleClass('menu-item-217-click');
	});
	if ( $('.search-form-click') ) {
		$('.search-field').on('blur', function() {
			event.preventDefault();
			$('.search-form').toggleClass('search-form-click');
		$('.menu-item-217').toggleClass('menu-item-217-click');
		});
	}

	$(document).ready(function() {
	let x = $( '.content-area' ).height();
	console.log(x);
	$('.side-widget-area').css({
    height: `${x}px`,
	});
});

})(jQuery);
