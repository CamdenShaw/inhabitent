<?php
/**
 * ARCHIVE PRODUCT
 * 
 */

get_header(); ?>

		<main id="primary" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>


			<header class="page-header">
				<?php
					add_filter( 'get_the_archive_title', 'modify_archive_title', 10, 1 );
					function modify_archive_title( $title ) {
						return '<h1 class="page-title">Shop Stuff</h1>';
					}
					the_archive_title();
					the_archive_description( '<div class="taxonomy-description">', '</div>' );
				?>

				<?php
					$terms = get_terms( 'product-type' );
						if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
							echo '<ul>';
							foreach ( $terms as $term ) {
								echo '<li class="stuff"> <a href="' . get_term_link( $term ) . '">' . $term->name . '</a></li>';
							}
							echo '</ul>';
					} ?>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>

			<div class='products-wrapper'>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php
						get_template_part( 'template-parts/content' );
					?>

				<?php endwhile; ?>

			</div>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->

<?php get_footer(); ?>