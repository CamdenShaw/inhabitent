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


$(window).load(function() {
	$('.BodyA').css({
		'line-height' : '1.8rem',
		'margin' 			: '0',
		'font-size'		: '0.9rem',
		'font-family'	: 'Merriweather'
	});
	
	let x = $( '.content-area' ).height() - 50 ;
	console.log(x);
	$('.side-widget-area').css({
    height: `${x}px`,
	});
});

})(jQuery);
