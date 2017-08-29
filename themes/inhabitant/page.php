<?php
/**
 * The template for displaying all pages.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>
<?php get_sidebar(); ?>

		<main id="primary-home" class="site-main" role="main">
			

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->

<?php get_footer(); ?>