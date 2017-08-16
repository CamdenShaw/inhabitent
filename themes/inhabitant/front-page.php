<?php
/**
 *
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
				<p><a href="<? echo get_post_permalink() ?>"><?php the_title(); ?> </a> </p>
				<p><a href="<? echo get_post_permalink() ?>">Read Entry</a> </p>
			</div>

			<?php endforeach; wp_reset_postdata(); ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>