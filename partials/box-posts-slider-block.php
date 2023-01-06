<?php
    global $post;
    $slidesNumber = get_field('slides_number');

    $sliderItems = get_posts(array(
        'post_type' => get_field('post_type'),
        'numberposts' => get_field('limit'),
        'order' => get_field('order'),
        'orderby ' => get_field('order_by'),
        'post_status' => 'publish'
    ));
?>

<?php if ($sliderItems && count($sliderItems) > 0) { ?>
    <section class="box-slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="box-slider__slider">
                        <?php foreach ($sliderItems as $sliderItem) { ?>
                            <div class="box-slider__slider__item">
                                <?php setup_postdata($post = $sliderItem); ?>

                                <?php $image = get_the_post_thumbnail_url($post, 'large'); ?>
                                <?php if ($image) { ?>
                                    <div class="box-slider__slider__item__image">
                                        <a href="<?php the_permalink(); ?>">
                                            <img src="<?php echo $image; ?>" alt="" />
                                        </a>
                                    </div>
                                <?php } ?>

                                <div class="box-slider__slider__item__title">
                                    <?php the_title(); ?>
                                </div>

                                <div class="box-slider__slider__item__date">
                                    <?php echo get_the_date(get_option('date_format')); ?>
                                </div>

                                <div class="box-slider__slider__item__text">
                                    <?php the_excerpt(); ?>
                                </div>

                                <div class="box-slider__slider__item__link">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php _e('Read more'); ?>
                                    </a>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php wp_reset_query(); ?>
<?php } ?>
