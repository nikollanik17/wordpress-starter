<?php
    get_header();

    while (have_posts()) {
        the_post();
        the_content();
    }

    wp_reset_query();
    get_footer();
?>