<?php

/** ACF blocks */
global $acfBlocks;
$acfBlocks = array();

$acfBlocks[] = array(
	'name'			=> 'accordion',
	'title'			=> __( 'Accordion' ),
	'render_template'   => get_template_directory() . '/partials/accordion-block.php',
	'category'		=> 'customblocks',
	'icon'			=> 'welcome-widgets-menus',
	'mode'			=> 'edit',
	'keywords'		=> array( 'accordion' )
);

$acfBlocks[] = array(
	'name'			=> 'box-content-slider',
	'title'			=> __( 'Content slider' ),
	'render_template'   => get_template_directory() . '/partials/box-content-slider-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'content', 'slider' )
);

$acfBlocks[] = array(
	'name'			=> 'box-posts-slider',
	'title'			=> __( 'Posts Slider' ),
	'render_template'   => get_template_directory() . '/partials/box-posts-slider-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'posts', 'slider' )
);

$acfBlocks[] = array(
	'name'			=> 'content',
	'title'			=> __( 'Content' ),
	'render_template'   => get_template_directory() . '/partials/content-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'content' )
);

$acfBlocks[] = array(
	'name'			=> 'content-list',
	'title'			=> __( 'Content list' ),
	'render_template'   => get_template_directory() . '/partials/content-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'content', 'list' )
);

$acfBlocks[] = array(
	'name'			=> 'cta',
	'title'			=> __( 'CTA' ),
	'render_template'   => get_template_directory() . '/partials/cta-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'cta' )
);

$acfBlocks[] = array(
	'name'			=> 'form',
	'title'			=> __( 'Form' ),
	'render_template'   => get_template_directory() . '/partials/form-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'form' )
);

$acfBlocks[] = array(
	'name'			=> 'hero',
	'title'			=> __( 'Hero' ),
	'render_template'   => get_template_directory() . '/partials/hero-block.php',
	'category'		=> 'customblocks',
	'icon'			=> 'welcome-widgets-menus',
	'mode'			=> 'edit',
	'keywords'		=> array( 'hero' )
);

$acfBlocks[] = array(
	'name'			=> 'hero-slider',
	'title'			=> __( 'Hero slider' ),
	'render_template'   => get_template_directory() . '/partials/hero-slider-block.php',
	'category'		=> 'customblocks',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'hero', 'slider' )
);

$acfBlocks[] = array(
	'name'			=> 'icons',
	'title'			=> __( 'Icon grid' ),
	'render_template'   => get_template_directory() . '/partials/icons-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'icons' )
);

$acfBlocks[] = array(
	'name'			=> 'image-slider',
	'title'			=> __( 'Image slider' ),
	'render_template'   => get_template_directory() . '/partials/image-slider-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'image', 'slider' )
);

$acfBlocks[] = array(
	'name'			=> 'logos',
	'title'			=> __( 'Logos' ),
	'render_template'   => get_template_directory() . '/partials/logos-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'logos' )
);

$acfBlocks[] = array(
	'name'			=> 'map',
	'title'			=> __( 'Map' ),
	'render_template'   => get_template_directory() . '/partials/map-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'map' )
);

$acfBlocks[] = array(
	'name'			=> 'posts-list',
	'title'			=> __( 'Posts list' ),
	'render_template'   => get_template_directory() . '/partials/posts-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'posts', 'list' )
);

$acfBlocks[] = array(
	'name'			=> 'spacer',
	'title'			=> __( 'Spacer' ),
	'render_template'   => get_template_directory() . '/partials/spacer-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'spacer' )
);

$acfBlocks[] = array(
	'name'			=> 'split',
	'title'			=> __( '50/50 Content' ),
	'render_template'   => get_template_directory() . '/partials/split-block.php',
	'category'		=> 'customblocks',
	'icon'			=> 'welcome-widgets-menus',
	'mode'			=> 'edit',
	'keywords'		=> array( 'content', 'split', '50' )
);

$acfBlocks[] = array(
	'name'			=> 'testimonials',
	'title'			=> __( 'Testimonials slider' ),
	'render_template'   => get_template_directory() . '/partials/testimonials-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array( 'slider' )
);

/** Limit to ACF-Gutenberg blocks only */
add_filter('allowed_block_types', 'limitBlockTypes');
function limitBlockTypes($allowedBlocks) {
	global $acfBlocks;

	$allowedBlocks = array();
	foreach ($acfBlocks as $acfBlock) {
		$allowedBlocks[] = 'acf/' . $acfBlock['name'];
	}

	return $allowedBlocks;
}

/** Register ACF-Gutenberg blocks */
add_action('acf/init', 'acfgRegisterBlocks');
function acfgRegisterBlocks() {
	if (!function_exists('acf_register_block_type')) return;

	global $acfBlocks;
	foreach ($acfBlocks as $acfBlock) {
		acf_register_block_type($acfBlock);
	}
}