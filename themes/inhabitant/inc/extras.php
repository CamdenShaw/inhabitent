<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * @package RED_Starter_Theme
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function red_starter_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'red_starter_body_classes' );

//Change the logo on the WP login screen to be Inhabitent's logo
function inhabitent_login_logo() {
	echo '<style type="text/css">
#login h1 a, .login h1 a {background-image:url(wp-content/themes/inhabitant/assets/images/inhabitent-logo-text-dark.svg) ; margin:0 auto; background-size: 100% ; width: 100%;}
</style>';
}
add_filter( 'login_head', 'inhabitent_login_logo' );

//Update the URL that the logo points to be the site's homepage URL (instead of wordpress.org).

function inhabitent_login_logo_url() {
	return get_bloginfo( 'url' );
}
add_filter( 'login_headerurl', 'inhabitent_login_logo_url' );

function inhabitent_login_title() {
	return 'Inhabitent';
}
add_filter( 'login_headertitle', 'inhabitent_login_title');

function inhabitent_about_dynamic_css() {
	if( ! is_page_template( 'page-templates/about.php' )) {
		return;
	}
	$image = CFS()->get( 'about_header_image' );
	if ( ! $image ) {
		return;
	}
	$hero_css = ".page-template-about .entry-header {
		background:
		linear-gradient( to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100% ), url({$image}) no-repeat center bottom;
		height: 100vh;
		background-size: cover, cover;
		margin: 0 auto;
		padding: 0;
	}";
	wp_add_inline_style( 'tent-style', $hero_css );
}
add_action( 'wp_enqueue_scripts', 'inhabitent_about_dynamic_css' );

function inhabitent_front_page_dynamic_css() {
	if( ! is_front_page()) {
		return;
	}
	$image = CFS()->get( 'f_p_header_image' );
	if ( ! $image ) {
		return;
	}
	$logo = CFS()->get( 'f_p_header_logo');
	$hero_css = ".page-template-default .front-page-header {
		background: url('./wp-content/themes/inhabitant/assets/images/inhabitent-logo-full.svg') no-repeat center center,
		linear-gradient( to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100% ), url({$image}) no-repeat center bottom;
		height: 100vh;
		width: 100vw;
		min-width: 1120px;
		background-size: 25%, cover, cover;
		margin: 0 auto;
	}";
	wp_add_inline_style( 'tent-style', $hero_css );
}
add_action( 'wp_enqueue_scripts', 'inhabitent_front_page_dynamic_css' );

function custom_excerpt_length( $length ) {
	return 50;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function inhabitent_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html( 'Footer Widget' ),
		'id'            => 'footer-widget',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title-footer">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'inhabitent_widgets_init' );

?>