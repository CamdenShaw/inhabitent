<?php
/**
 * Template part for displaying posts.
 *
 * @package RED_Starter_Theme
 */

?>

<?php if ( is_archive( 'archive-product' ) || is_archive( 'taxonomy-product-type' ) ) : ?>
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

<?php if ( is_home() ) : ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<header class="entry-header">
				<?php if ( has_post_thumbnail() ) : ?>
					<?php the_post_thumbnail( 'large' ); ?>
			<?php endif; ?>

			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

			<?php if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<?php inhabitent_posted_on(); ?> / <?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?> / <?php inhabitent_posted_by(); ?>
			</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->
		<div class="entry-content">
			<?php the_excerpt(); ?>
			<div class='read-more-link rml'><a href="<?php echo get_permalink(); ?>"> Read More →</a></div>
		</div><!-- .entry-content -->
	</article><!-- #post-## -->
<?php endif; ?>
