<?php
/**
 * 
 * 
 */
/**
 * The template for displaying all single products.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="products-content-area">
		<main id="main-product" class="site-main" role="main">
		
		<?php while ( have_posts() ) : the_post(); ?>

			<div class="product-content"><?php get_template_part( 'template-parts/content', 'single' ); ?></div>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>