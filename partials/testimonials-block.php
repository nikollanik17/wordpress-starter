<?php $sliderItems = get_field('items'); ?>
<?php if ($sliderItems && count($sliderItems) > 0) { ?>
    <section class="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="testimonials__slider">
                        <?php foreach ($sliderItems as $sliderItem) { ?>
                            <div class="testimonials__slider__item">
                                <div class="testimonials__slider__item__inner">
                                    <?php if ($sliderItem['image'] && $sliderItem['image']['sizes'] && $sliderItem['image']['sizes']['medium']) { ?>
                                        <div class="testimonials__slider__item__image">
                                            <div class="testimonials__slider__item__image__holder" style="background-image: url('<?php echo $sliderItem['image']['sizes']['medium']; ?>');"></div>
                                        </div>
                                    <?php } ?>

                                    <div class="testimonials__slider__item__content">
                                        <div class="testimonials__slider__item__content__message">
                                            <?php echo $sliderItem['message']; ?>
                                        </div>

                                        <div class="testimonials__slider__item__content__author">
                                            - <?php echo $sliderItem['author']; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
