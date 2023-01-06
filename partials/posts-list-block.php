<?php
    global $post;
    $itemsNumber = get_field('items_number');
    $items = get_posts(array(
        'post_type' => get_field('post_type'),
        'numberposts' => get_field('limit'),
        'order' => get_field('order'),
        'orderby ' => get_field('order_by'),
        'post_status' => 'publish'
    ));
?>

<?php if ($items && count($items) > 0) { ?>
    <section class="content-list">
        <div class="container">
            <?php foreach ($items as $item) { ?>
                <div class="row content-list__item">
                    <?php
                        setup_postdata($post = $item);
                        $image = get_the_post_thumbnail_url($post, 'large');
                        $contentNumColumns = ($image) ? '8' : '12';
                        $contentStyle = ($image) ? '' : 'content-list__item__content--no-image';
                    ?>

                    <?php if ($image) { ?>
                        <div class="col-md-4">
                            <div class="content-list__item__image">
                                <a href="<?php the_permalink(); ?>">
                                    <img src="<?php echo $image; ?>" alt="" />
                                </a>
                            </div>
                        </div>
                    <?php } ?>

                    <div class="col-md-<?php echo $contentNumColumns; ?>">
                        <div class="content-list__item__content <?php echo $contentStyle; ?>">
                            <h3 class="content-list__item__content__title">
                                <?php the_title(); ?>
                            </h3>

                            <div class="content-list__item__content__date">
                                <?php echo get_the_date(get_option('date_format')); ?>
                            </div>

                            <div class="content-list__item__content__text">
                                <?php the_excerpt(); ?>
                            </div>

                            <div class="content-list__item__content__link">
                                <a href="<?php the_permalink(); ?>">
                                    <?php _e('Read more'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </section>
    
    <?php wp_reset_query(); ?>
<?php } ?>