<?php
/**
 * The template for displaying the footer.
 *
 * @package RED_Starter_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">
					<div class="contact-info-foot">

					</div>
					<div id="footer-hours" class="footer-hours">
							<?php if ( ! is_active_sidebar( 'footer-widget' ) ) {
								return;
							}
							?>

							<div id="secondary" class="footer-widget-area" role="complementary">
								<?php dynamic_sidebar( 'footer-widget' ); ?>
							</div><!-- #secondary -->
					</div>
					<a href="<?php echo esc_url( 'https://wordpress.org/' ); ?>"><?php printf( esc_html( 'Proudly powered by %s' ), 'WordPress' ); ?></a>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
