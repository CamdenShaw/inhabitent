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
#login h1 a, .login h1 a {background-image:url(wp-content/themes/inhabitant/images/inhabitent-logo-text-dark.svg) ; margin:0 auto; background-size: 100% ; width: 100%;}
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