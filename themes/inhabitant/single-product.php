<?php
/**
 * 
 * 

 */
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class='product-container'><a class='product-img' href='<?php echo get_permalink();?>' > <?php the_post_thumbnail( 'large' );?></a>
					<p class='product-title'><?php the_title(); ?></p>
					<div class='dots'></div>
					<p class='product-price'><?php echo CFS()->get('price'); ?></p></div>
			<?php endif; ?>
		</header>
	</article>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>