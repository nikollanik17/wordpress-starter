<?php


/** Disable automatic image scaling */
add_filter('big_image_size_threshold', '__return_false');

/** Remove theme editor */
define('DISALLOW_FILE_EDIT', true);

add_action('admin_menu', 'sc_remove_editor_menu', 1);
function sc_remove_editor_menu() {
	remove_action('admin_menu', '_add_themes_utility_last', 101);
}

add_action('admin_init', 'sc_remove_menu_elements', 102);
function sc_remove_menu_elements() {
	remove_submenu_page( 'themes.php', 'theme-editor.php' );
}

/** Remove empty <p> tags from the_content function. */
remove_filter('the_content', 'wpautop');

/** Add theme support */
add_theme_support('menus');
add_theme_support('post-thumbnails');
set_post_thumbnail_size(100, 100, array('center', 'center'));

/** Set menus */
add_action('init', 'registerMenus');
function registerMenus() {
	register_nav_menus(
		array(
			'main-menu'        => __( 'Main Menu' ),
			'mobile-main-menu' => __( 'Mobile Main Menu' ),
			'footer-menu'      => __( 'Footer Menu' )
		)
	);
}

include 'lib/image-sizes.php';
include 'lib/post-types.php';
include 'lib/performance.php';
include 'lib/functions.php';

/** Javascript */
add_action('wp_enqueue_scripts', 'enqueueScripts');
add_action('enqueue_block_editor_assets', 'enqueueScripts');
function enqueueScripts()
{
	$inHeader = false;
	$inFooter = true;

	$googleMapsApiKey = get_field('google_maps_api_key', 'options');
	wp_deregister_script('jquery');
	wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@6/swiper-bundle.min.css');


	// Javascript
	wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', array(), null, $inHeader);
	wp_register_script('gsap', 'https://cdn.jsdelivr.net/combine/npm/gsap@3.6.1,npm/gsap@3.6.1/dist/CSSRulePlugin.min.js,npm/gsap@3.6.1/dist/ScrollTrigger.min.js,npm/gsap@3.6.1/dist/ScrollToPlugin.min.js', array(), null, $inFooter);
	wp_register_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@6/swiper-bundle.min.js', array(), null, $inFooter);
	wp_register_script('jquery-ui', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', array('jquery'), null, $inFooter);
	wp_register_script('jquery-ui-touch', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js', array('jquery', 'jquery-ui'), null, $inFooter);
	wp_register_script('build', get_template_directory_uri() . '/build/assets/js/main.bundle.js#deferload', array('gsap', 'jquery'), 1.0, $inFooter);

	wp_enqueue_script('jquery');
	wp_enqueue_script('swiper');
	wp_enqueue_script('jquery-ui');
	wp_enqueue_script('jquery-ui-touch');

	if ($googleMapsApiKey && $googleMapsApiKey != '') {
		wp_enqueue_script('google-maps', 'http://maps.googleapis.com/maps/api/js?&key=' . $googleMapsApiKey, array(), null, false);
	}

	wp_enqueue_script('build');

	// CSS
	wp_enqueue_style('style', get_stylesheet_uri());
	wp_enqueue_style('main',  get_template_directory_uri() . '/build/assets/css/main.css');
}

/** Remove 32px margin top when logged into WP */
add_action('get_header', 'remove_admin_login_header');
function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}

include 'lib/blocks.php';
include 'lib/acf-mod.php';
