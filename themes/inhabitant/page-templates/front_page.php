<?php
/**
 * Template Name: Front Page
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="front-page-header custom-hero">
					<div class="container">
					</div>
				</header>
			</article>

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

				<div class "most-recent-journal">
					<?php ?>
					<?php 
						$args = array( 'post_type' => 'post', 'order' => 'DESC', 'posts_per_page' => '3', 'orderby' => 'date' );
						$journal_posts = get_posts( $args );
					?>
					<?php foreach ( $journal_posts as $post ) : setup_postdata( $post ); ?>
					<div class='journal-recent-block-item'>
						<div class='journal-thumbnail-wrapper'>
							<?php if (has_post_thumbnail()) : ?>
								<?php the_post_thumbnail('medium' ); ?>
							<?php endif; ?>
						</div>
					</div>
					<div class='entry-meta'>
						<?php inhabitent_posted_on(); ?> / <?php comments_number( '0 comments', '1 Comment', '% Comment' ); ?> / <?php inhabitent_posted_by(); ?>
					</div>
					<a href="<? echo get_post_permalink() ?>"><?php the_title(); ?> </a>
				</div>

				<?php endforeach; wp_reset_postdata(); ?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>