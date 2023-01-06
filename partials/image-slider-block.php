<?php $images = get_field('images'); ?>
<?php if ($images && count($images) > 0) { ?>
    <section class="image-slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="image-slider__slider">
                        <?php foreach ($images as $image) { ?>
                            <div class="image-slider__slider__item">
                                <img src="<?php echo $image['sizes']['xl']; ?>" alt="" />
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
