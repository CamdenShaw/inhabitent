<?php
/**
 * Template part for displaying posts.
 *
 * @package RED_Starter_Theme
 */

?>

<?php if ( is_archive( 'archive-product') || is_archive( 'taxonomy-product-type' ) ) : ?>
	<article <?php post_class(); ?>>
		<header class="entry-header-post">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class='product-container'><a class='product-img' href='<?php echo get_permalink();?>' > <?php the_post_thumbnail( 'medium' );?></a>
					<div class='text-wrapper'>
						<p class='product-title'><?php the_title(); ?></p>
						<div class='dots'></div>
						<p class='product-price'><?php echo CFS()->get('price'); ?></p>
					</div>
				</div>
			<?php endif; ?>
		</header>
	</article>
<?php endif;?>