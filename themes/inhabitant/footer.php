<?php
/**
 * The template for displaying the footer.
 *
 * @package RED_Starter_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<?php if ( ! is_active_sidebar( 'footer-widget' ) ) {
					return;
				}
				?>

				<div id="tertiary" class="footer-widget-area" role="complementary">
					<?php dynamic_sidebar( 'footer-widget' ); ?>
					<div class="footer-logo" ><a href="<?php echo home_url() ?>">home page</a></div>
				</div><!-- #secondary -->
				<a class="disappear" href="<?php echo esc_url( 'https://wordpress.org/' ); ?>"><?php printf( esc_html( 'Proudly powered by %s' ), 'WordPress' ); ?></a>
				<p class='copyright'>Copyright <span>©2017</span> Inhabitent</p>
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
