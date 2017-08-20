<?php
/**
 * 
 * 
 */
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

<?php get_sidebar(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<div class='social-buttons'>
				<div class='facebook read-more-link'><a href="facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> Like</a></div>
				<div class='twitter read-more-link'><a href="twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</a></div>
				<div class='pinterest read-more-link'><a href="pinterest.com" target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i> Pin</a></div>
			</div>

			<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>