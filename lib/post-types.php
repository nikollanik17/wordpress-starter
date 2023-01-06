<?php

/** Set post types */
add_action('init', 'createPostTypes');
function createPostTypes(){
	register_post_type( 'custompost',
		array(
			'labels' => array(
				'name' => __( 'CustomPosts' ),
				'singular_name' => __( 'CustomPost' )
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'custompost'),
		)
	);
}