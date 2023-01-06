<?php $sliderItems = get_field('items'); ?>
<?php if ($sliderItems && count($sliderItems) > 0) { ?>
    <section class="hero-slider">
        <div class="hero-slider__slider">
            <?php foreach ($sliderItems as $sliderItem) { ?>
                <?php
                    $image = $sliderItem['image'];
                    if ($image && isset($image['sizes'])) {
                        $slideStyle = "background-image: url('" . $image['sizes']['xxl'] . "');";
                    }
                ?>

                <div class="hero-slider__slider__item" style="<?php echo $slideStyle; ?>">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="hero-slider__slider__item__content <?php echo 'hero-slider__content--' . $sliderItem['text_alignment'] . '-aligned'; ?>">
                                    <h2 class="hero-slider__slider__item__title">
                                        <?php echo $sliderItem['title']; ?>
                                    </h2>

                                    <p class="hero-slider__slider__item__text">
                                        <?php echo $sliderItem['text']; ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </section>
<?php } ?>
