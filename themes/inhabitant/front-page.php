<?php
/**
 *
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="front-page-header custom-hero"></header>
	</article>

	<main id="main" class="site-main" role="main">

		<h4 class="fp-shop-title">Shop Stuff</h4>
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

	
		<?php ?>
		<?php 
			$args = array( 'post_type' => 'post', 'order' => 'DESC', 'posts_per_page' => '3', 'orderby' => 'date' );
			$journal_posts = get_posts( $args );
		?>

		<h2 class='journal-title-fp'>Inhabitent Journal</h2>
		<div class="most-recent-journal">
			<?php foreach ( $journal_posts as $post ) : setup_postdata( $post ); ?>
				<div class='journal-recent-block-item'>
					<div class='journal-thumbnail-wrapper'>
						<?php if (has_post_thumbnail()) : ?>
							<?php the_post_thumbnail('medium' ); ?>
						<?php endif; ?>
					</div>
					<div class="words-wrapper">
						<div class='entry-meta-fp'>
							<?php inhabitent_posted_on(); ?> / <?php comments_number( '0 comments', '1 Comment', '% Comment' ); ?>
						</div>
						<h3 class="blog-post-title"><a href="<? echo get_post_permalink() ?>"><?php the_title(); ?> </a> </h3>
						<p class="read-more-link"><a href="<? echo get_post_permalink() ?>">Read Entry</a> </p>
					</div>
				</div>

			<?php endforeach; wp_reset_postdata(); ?>
		</div>

		<h2 class="adventures-title">Latest Adventures</h2>
		<div class='adventures-container'>
			<div class='adventures-img1-container'>
				<div class='adventures-img1'>
					<h3 class='nature'>Getting Back to Nature in a Canoe</h3>
					<p class='read-more-link'><a class='read-more' href=''>Read More</a></p>
				</div>
			</div>
			<div class='adventures-img2-container'>
				<div class='adventures-img2'>
					<h3 class='beach-friends'>A Night with Friends at the Beach</h3>
					<p class='read-more-link'><a class='read-more' href=''>Read More</a></p>
				</div>
			</div>
			<div class='adventures-img3-container'>
				<div class='adventures-img3'>
					<h3 class='mountain-view'>Taking in the View at Big Mountain</h3>
					<p class='read-more-link'><a class='read-more' href=''>Read More</a></p>
				</div>
			</div>
			<div class='adventures-img4-container'>
				<div class='adventures-img4'>
					<h3 class='stars'>Star-Gazing at the Night Sky</h3>
					<p class='read-more-link'><a class='read-more' href=''>Read More</a></p>
				</div>
			</div>
			<p class="more"><a class='more-adventures' href=''>More Adventures</a></p>
		</div>


	</main><!-- #main -->
<?php get_footer(); ?>