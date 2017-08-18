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

			<div class="shop-stuff">
				<?php
					$terms = get_terms( 'product-type' );
						if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
							echo '<ul>';
							foreach ( $terms as $term ) {
								echo '<li><img class="' . $term->slug . '" src="./wp-content/themes/inhabitant/assets/images/' . $term->slug . '.svg">';
								echo '<p>' . $term->description . '</p> <a href="' . get_term_link( $term ) . '">' . $term->name . ' Stuff </a></li>';
							}
							echo '</ul>';
					}
				?>
			</div>

			<div class "most-recent-journal">
				<?php ?>
				<?php 
					$args = array( 'post_type' => 'post', 'order' => 'DESC', 'posts_per_page' => '3', 'orderby' => 'date' );
					$journal_posts = get_posts( $args );
				?>

				<div class='journal-recent-block-item'>
					<h2 class='journal-title-fp'>Inhabitent Journal</h2>
					<?php foreach ( $journal_posts as $post ) : setup_postdata( $post ); ?>
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

			<?php endforeach; wp_reset_postdata(); ?>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

	<div class='adventures-container'>
				<div class='adventures-img1-container'>
					<div class='adventures-img1'>
						<h3 class='nature'>Getting Back to Nature in a Canoe</h3>
						<a href=''>Read More</a>
					</div>
				</div>
				<div class='adventures-img2-container'>
					<div class='adventures-img2'>
						<h3 class='beach-friends'>A Night with Friends at the Beach</h3>
						<a href=''>Read More</a>
					</div>
				</div>
				<div class='adventures-img3-container'>
					<div class='adventures-img3'>
						<h3 class='mountain-view'>Taking in the View at Big Mountain</h3>
						<a href=''>Read More</a>
					</div>
				</div>
				<div class='adventures-img4-container'>
					<div class='adventures-img4'>
						<h3 class='stars'>Star-Gazing at the Night Sky</h3>
						<a href=''>Read More</a>
					</div>
				</div>
				<a href=''>More Adventures</a>
			</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>