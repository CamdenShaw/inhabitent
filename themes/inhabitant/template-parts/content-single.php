<?php
/**
 * Template part for displaying single posts.
 *
 * @package RED_Starter_Theme
 */

?>

<?php
$check = CFS()->get('price');
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( $check ) : ?>
		<header class="product-entry-header">
	<?php else: ?>
		<header class="entry-header">
	<?php endif; ?>
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large' ); ?>
		<?php endif; 
			if ( $check ) : 
			?></header><div class="content-container"><?php the_title( '<h1 class="product-entry-title">', '</h1>' ); 
			else: 
				the_title( '<h1 class="entry-title">', '</h1>' ); 
			endif; ?>
		
		<?php if ( $check ) : ?>
			<div class="product-entry-meta">
		<?php else: ?>
			<div class="entry-meta">
		<?php endif; ?>
		<?php if ( $check ) : ?>
			<p class='single-product-price'><?php echo $check; ?></p>
		<?php else: 
			inhabitent_posted_on(); ?> / <?php red_starter_comment_count(); ?> / <?php inhabitent_posted_by(); ?>
			</div><!-- .entry-meta -->
		</header><!-- .entry-header --><?php
		endif; ?>
	<?php if ( $check ) : ?>
		<div class="product-entry-content">
			<?php the_content(); ?>
		</div><!-- .entry-content -->
	</div>
	<div class='social-buttons'>
		<div class='facebook read-more-link'><a href="facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> Like</a></div>
		<div class='twitter read-more-link'><a href="twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</a></div>
		<div class='pinterest read-more-link'><a href="pinterest.com" target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i> Pin</a></div>
	</div>
	<?php else: ?>
		<div class="entry-content">
			<?php the_content();
		endif; ?>
	
	<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
			'after'  => '</div>',
		) );
	?>

	<?php if ( $check ) : ?>
		</div><div class="product-entry-footer">
	<?php else: ?>
	<footer class="entry-footer">
	<?php endif; ?>
		<?php red_starter_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
