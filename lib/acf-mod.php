<?php

/**
 * Register ACF-Gutenberg block category
 * @param array $categories
 * @return array
 */
add_filter( 'block_categories', 'acfgRegisterBlockCategory', 10, 2 );
function acfgRegisterBlockCategory($categories) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'customblocks',
				'title' => __( 'Custom Blocks', 'customBlocks' ),
				'icon'  => 'wordpress',
			),
		)
	);
}

/** ACF settings */
if (function_exists('acf_add_options_page')) {
	acf_add_options_sub_page('Options');
}
