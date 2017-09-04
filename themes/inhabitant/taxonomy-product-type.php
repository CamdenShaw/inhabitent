<?php
/**
 * 
 * 

 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

	<?php if ( have_posts() ) : ?>

		<header class="page-header">
			<?php
				$title = get_queried_object()->name;
				echo '<h1 class="page-title">' . $title . '</h1>';
				the_archive_description( '<div class="taxonomy-products-description">', '</div>' );
			?>
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
</div><!-- #primary -->
<?php get_footer(); ?>