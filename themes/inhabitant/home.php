<?php
/**
 * 
 * 

 */
/**
 * The template for displaying archive pages.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>
<?php get_sidebar(); ?>

	<div id="primary-home" class="content-area">
		<main id="main-home" class="site-main-home" role="main">

			<?php if ( have_posts() ) : ?>
			<header class="page-header">
				<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
					the_archive_description( '<div class="taxonomy-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/content', 'page' );
				endwhile;
				the_posts_navigation();
				else :
				get_template_part( 'template-parts/content', 'none' );
				endif;
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>